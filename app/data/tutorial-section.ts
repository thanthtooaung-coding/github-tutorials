// data/tutorial-sections.ts

import type { TutorialSectionProps } from "@/components/tutorial-section"

export const tutorialSections: TutorialSectionProps[] = [
  {
    title: "Getting Started",
    icon: "git-branch",
    sections: [
      {
        title: "Creating a Repository",
        icon: "plus",
        description: "Learn how to create your first GitHub repository",
        items: [
          "Setting up a new repository",
          "Repository initialization options",
          "Repository settings and configuration",
        ],
        link: "/tutorials/creating-a-repository",
      },
      {
        title: "Git Basics",
        icon: "git-branch",
        description: "Master clone, add, commit, and push commands",
        items: ["Cloning repositories", "Making and tracking changes", "Committing and pushing to GitHub"],
        link: "/tutorials/git-basics",
      },
      {
        title: "Branching & Merging",
        icon: "git-merge",
        description: "Learn how to work with branches and merge code",
        items: ["Creating and switching branches", "Merging branches together", "Resolving merge conflicts"],
        // link: "/tutorials/branching-and-merging",
        comingSoon: true,
      },
    ],
  },
  {
    title: "Collaboration",
    icon: "users",
    sections: [
      {
        title: "Working with Pull Requests",
        icon: "git-pull-request",
        description: "Create, review, and merge pull requests",
        items: ["Creating pull requests", "Code review process", "Merging and closing pull requests"],
        comingSoon: true,
      },
      {
        title: "Managing Issues",
        icon: "alert-circle",
        description: "Track bugs and feature requests",
        items: ["Creating and assigning issues", "Using labels and milestones", "Closing issues with commits"],
        comingSoon: true,
      },
      {
        title: "GitHub Projects",
        icon: "layout-grid",
        description: "Organize and prioritize your work",
        items: ["Setting up project boards", "Creating and managing cards", "Automating project workflows"],
        comingSoon: true,
      },
    ],
  },
  {
    title: "Advanced Topics",
    icon: "zap",
    sections: [
      {
        title: "GitHub Actions",
        icon: "zap",
        description: "Automate your development workflow",
        items: ["Setting up CI/CD pipelines", "Creating custom workflows", "Using GitHub-hosted runners"],
        comingSoon: true,
      },
      {
        title: "GitHub Pages",
        icon: "file",
        description: "Host websites directly from your repository",
        items: ["Setting up GitHub Pages", "Using Jekyll themes", "Custom domains and HTTPS"],
        comingSoon: true,
      },
      {
        title: "GitHub CLI",
        icon: "terminal",
        description: "Work with GitHub from the command line",
        items: [
          "Installing and configuring GitHub CLI",
          "Common commands and workflows",
          "Creating PRs and issues from terminal",
        ],
        comingSoon: true,
      },
    ],
  },
]
