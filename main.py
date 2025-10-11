from skill_finder_agent import skill_finder

def main():
    print("Hello from search-agent!")
    position = "Software Engineer AI Agent Developer"
    skills = skill_finder(position)
    print(f"Skills required for {position}: {skills}")


if __name__ == "__main__":
    main()
