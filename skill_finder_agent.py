import os

from dotenv import load_dotenv
from langchain.agents import AgentExecutor
from langchain.agents.react.agent import create_react_agent
from langchain_core.prompts import PromptTemplate
from langchain_core.runnables import RunnableLambda
from langchain_openai import ChatOpenAI
from langchain_tavily import TavilySearch

from prompt import REACT_PROMPT
from schema import AgentResponseForSkills

load_dotenv()
OPEN_ROUTER_API_KEY = os.getenv("OPEN_ROUTER_API_KEY")

tools = [TavilySearch()]

llm = ChatOpenAI(
    base_url="https://openrouter.ai/api/v1",
    model="qwen/qwen3-235b-a22b:free",
    api_key=OPEN_ROUTER_API_KEY,
    temperature=0,
)
structured_llm = llm.with_structured_output(AgentResponseForSkills)

react_prompt = PromptTemplate.from_template(REACT_PROMPT)

search_agent = create_react_agent(
    llm=llm,
    tools=tools,
    prompt=react_prompt,
)

agent_executor = AgentExecutor(agent=search_agent, tools=tools, verbose=True)
agent_output = RunnableLambda(lambda x: x['output'])

chain = agent_executor | agent_output | structured_llm

def skill_finder(position:str):
    response = chain.invoke(
        {
            'input': f'Give me the list of skills required for {position} position from Linkedin'
        }
    )

    return response