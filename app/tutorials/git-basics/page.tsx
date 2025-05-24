import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TutorialSidebar } from "@/components/tutorial-sidebar"
import { CodeBlock } from "@/components/code-block"
import Link from "next/link"
import Image from "next/image"
import { AlertCircleIcon, ArrowLeft, GitBranch, LightbulbIcon } from "lucide-react"

export default function GitBasicsTutorial() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-col md:flex-row flex-1">
        <TutorialSidebar
          tutorialTitle="Git Basics"
          sections={[
            { title: "Prerequisites", href: "#prerequisites" },
            { title: "Clone Repository", href: "#clone-repository" },
            { title: "Make Changes", href: "#make-changes" },
            { title: "Add and Commit", href: "#add-and-commit" },
            { title: "Fetch and Pull", href: "#fetch-and-pull" },
            { title: "Push Changes", href: "#push-changes" },
            { title: "Next Steps", href: "#next-steps" },
          ]}
          relatedTutorials={[
            { title: "Create a Repository", href: "/tutorials/creating-a-repository" },
            { title: "Branching and Merging", href: "/tutorials/branching-and-merging" },
          ]}
        />
        <div className="flex-1 border-l border-gray-800">
          <div className="max-w-4xl mx-auto px-6 py-10">
            <Link
              href="/tutorials"
              className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-8 group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Tutorials
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#161b22] p-2 rounded-lg">
                <GitBranch className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-white">Git Basics: Clone, Add, Commit, Fetch, and Push</h1>
            </div>

            <p className="text-gray-300 mb-12 text-lg">
              This tutorial will guide you through the basic Git operations: cloning a repository, making changes,
              adding and committing those changes, fetching updates, and pushing your changes back to GitHub.
            </p>

            <section id="prerequisites" className="mb-16 scroll-mt-20">
              <h2 className="text-2xl font-bold text-white mb-6">Prerequisites</h2>
              <p className="text-gray-300 mb-4 text-lg">Before you begin, make sure you have:</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-gray-300 text-lg">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                  <span>A GitHub account</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-lg">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                  <span>
                    A repository on GitHub (follow our{" "}
                    <Link
                      href="/tutorials/creating-a-repository"
                      className="text-purple-400 hover:text-purple-300 hover:underline"
                    >
                      Create a Repository
                    </Link>{" "}
                    tutorial if needed)
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-lg">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                  <span>
                    Git installed on your computer (download from{" "}
                    <a href="https://git-scm.com" className="text-purple-400 hover:text-purple-300 hover:underline">
                      git-scm.com
                    </a>
                    )
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-lg">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                  <span>A text editor or IDE of your choice</span>
                </li>
              </ul>
            </section>

            <section id="clone-repository" className="mb-16 scroll-mt-20">
              <h2 className="text-2xl font-bold text-white mb-6">Step 1: Clone the Repository</h2>
              <p className="text-gray-300 mb-6 text-lg">
                Cloning creates a local copy of your repository on your computer.
              </p>

              <div className="mb-10 rounded-xl overflow-hidden border border-gray-800 bg-[#161b22]">
                <div className="bg-[#0d1117] p-4 border-b border-gray-800">
                  <h3 className="text-lg font-medium text-white">Step 1.1: Get the repository URL</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-6 text-lg">
                    Navigate to your repository on GitHub and click the green "Code" button. Copy the HTTPS or SSH URL.
                  </p>
                  <div className="rounded-lg overflow-hidden border border-gray-700 mb-4">
                    <Image
                      src="/git-basics/001_git_basics.png?height=400&width=800"
                      alt="Screenshot showing the Code button on GitHub"
                      width={800}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-10 rounded-xl overflow-hidden border border-gray-800 bg-[#161b22]">
                <div className="bg-[#0d1117] p-4 border-b border-gray-800">
                  <h3 className="text-lg font-medium text-white">Step 1.2: Open your terminal</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-6 text-lg">
                    Open your terminal (macOS/Linux) or command prompt (Windows). Navigate to the directory where you want to clone the repository.
                  </p>
                  <CodeBlock code="cd ~/Documents/GitHub" />                  
                </div>
              </div>

              <div className="mb-10 rounded-xl overflow-hidden border border-gray-800 bg-[#161b22]">
                <div className="bg-[#0d1117] p-4 border-b border-gray-800">
                  <h3 className="text-lg font-medium text-white">Step 1.3: Clone the repository</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-6 text-lg">
                    Run the{" "}
                    <code className="px-1.5 py-0.5 rounded bg-[#0d1117] text-gray-300 text-sm font-mono">
                      git clone
                    </code>{" "}
                    command followed by the repository URL you copied.
                  </p>
                  <CodeBlock code="git clone https://github.com/yourusername/your-repository.git" />
                  <div className="rounded-lg overflow-hidden border border-gray-700 mb-4 mt-6">
                    <Image
                      src="/git-basics/002_git_basics.png?height=400&width=800"
                      alt="Screenshot: GitHub repository page showing the updated files and commit history"
                      width={800}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-10 rounded-xl overflow-hidden border border-gray-800 bg-[#161b22]">
                <div className="bg-[#0d1117] p-4 border-b border-gray-800">
                  <h3 className="text-lg font-medium text-white">Step 1.4: Navigate into the cloned repository</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-6 text-lg">
                    After cloning is complete, navigate into the repository directory.
                  </p>
                  <CodeBlock code="cd your-repository" />                  
                </div>                
              </div>
            </section>

            <section id="make-changes" className="mb-16 scroll-mt-20">
              <h2 className="text-2xl font-bold text-white mb-6">Step 2: Make Changes to Your Files</h2>
              <p className="text-gray-300 mb-6 text-lg">
                Now that you have a local copy of your repository, let's make some changes.
              </p>

              <div className="mb-10 rounded-xl overflow-hidden border border-gray-800 bg-[#161b22]">
                <div className="bg-[#0d1117] p-4 border-b border-gray-800">
                  <h3 className="text-lg font-medium text-white">Step 2.1: Open the repository in your text editor</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-6 text-lg">
                    Open the repository folder in your preferred text editor or IDE.
                  </p>
                  <div className="rounded-lg overflow-hidden border border-gray-700 mb-4 mt-6">
                    <Image
                      src="/git-basics/003_git_basics.png?height=400&width=800"
                      alt="Screenshot: GitHub repository page showing the updated files and commit history"
                      width={800}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-10 rounded-xl overflow-hidden border border-gray-800 bg-[#161b22]">
                <div className="bg-[#0d1117] p-4 border-b border-gray-800">
                  <h3 className="text-lg font-medium text-white">Step 2.2: Modify an existing file or create a new file</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-6 text-lg">
                    Let's modify the README.md file or create a new file in your repository.
                  </p>
                  <CodeBlock
                    code={`# my-first-repo

My First Repository

# This is the repository for my GitHub tutorial.`}
                    language="markdown"
                  />
                  <p className="text-gray-300 mt-6 text-lg">
                    After making changes, save the file(s).
                  </p>
                </div>
              </div>
            </section>

            <section id="add-and-commit" className="mb-16 scroll-mt-20">
              <h2 className="text-2xl font-bold text-white mb-6">Step 3: Add and Commit Changes</h2>
              <p className="text-gray-300 mb-6 text-lg">
                Now that you've made changes, you need to add them to the staging area and commit them to your local repository.
              </p>

              <div className="mb-10 rounded-xl overflow-hidden border border-gray-800 bg-[#161b22]">
                <div className="bg-[#0d1117] p-4 border-b border-gray-800">
                  <h3 className="text-lg font-medium text-white">Step 3.1: Check the status of your changes</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-6 text-lg">
                    Run the{" "}
                    <code className="px-1.5 py-0.5 rounded bg-[#0d1117] text-gray-300 text-sm font-mono">
                      git status
                    </code>{" "} command to see which files have been modified.
                  </p>
                  <CodeBlock code="git status" />
                  <div className="rounded-lg overflow-hidden border border-gray-700 mb-4 mt-6">
                    <Image
                      src="/git-basics/004_git_basics.png?height=400&width=800"
                      alt="Screenshot: GitHub repository page showing the updated files and commit history"
                      width={800}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-10 rounded-xl overflow-hidden border border-gray-800 bg-[#161b22]">
                <div className="bg-[#0d1117] p-4 border-b border-gray-800">
                  <h3 className="text-lg font-medium text-white">Step 3.2: Add files to the staging area</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-6 text-lg">
                    Use the{" "}
                    <code className="px-1.5 py-0.5 rounded bg-[#0d1117] text-gray-300 text-sm font-mono">
                      git add
                    </code>{" "} command to add your changes to the staging area. You can add specific files or all changed files.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-300 mb-2">Add a specific file:</p>
                      <CodeBlock code="git add README.md" />
                    </div>
                    <div>
                      <p className="text-gray-300 mb-2">Or add all changes:</p>
                      <CodeBlock code="git add ." />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-10 rounded-xl overflow-hidden border border-gray-800 bg-[#161b22]">
                <div className="bg-[#0d1117] p-4 border-b border-gray-800">
                  <h3 className="text-lg font-medium text-white">Step 3.3: Verify files are staged</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-6 text-lg">
                    Run{" "}
                    <code className="px-1.5 py-0.5 rounded bg-[#0d1117] text-gray-300 text-sm font-mono">
                      git status
                    </code>{" "} again to verify that your files are staged for commit.
                  </p>
                  <CodeBlock code='git status' />
                </div>
              </div>

              <div className="mb-10 rounded-xl overflow-hidden border border-gray-800 bg-[#161b22]">
                <div className="bg-[#0d1117] p-4 border-b border-gray-800">
                  <h3 className="text-lg font-medium text-white">Step 3.3: Commit your changes</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-6 text-lg">Use the git commit command to commit your staged changes with a descriptive message.</p>
                  <CodeBlock code='git commit -m "Update README with project description"' />
                  <div className="rounded-lg overflow-hidden border border-gray-700 mb-4 mt-6">
                    <Image
                      src="/git-basics/005_git_basics.png?height=400&width=800"
                      alt="Screenshot: GitHub repository page showing the updated files and commit history"
                      width={800}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-gray-300 mt-4 text-lg">
                    The commit message should be clear and describe what changes you made.
                  </p>
                </div>
              </div>
            </section>

            <section id="fetch-and-pull" className="mb-16 scroll-mt-20">
              <h2 className="text-2xl font-bold text-white mb-6">Step 4: Fetch and Pull Updates</h2>
              <p className="text-gray-300 mb-6 text-lg">
                Before pushing your changes, it's good practice to fetch and pull any updates from the remote
                repository.
              </p>

              <div className="mb-10 rounded-xl overflow-hidden border border-gray-800 bg-[#161b22]">
                <div className="bg-[#0d1117] p-4 border-b border-gray-800">
                  <h3 className="text-lg font-medium text-white">Step 4.1: Fetch changes from the remote repository</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-6 text-lg">
                    The{" "}
                    <code className="px-1.5 py-0.5 rounded bg-[#0d1117] text-gray-300 text-sm font-mono">
                      git fetch
                    </code>{" "} command downloads changes from the remote repository but doesn't integrate them into your working files.
                  </p>
                  <CodeBlock code="git fetch origin" />
                </div>
              </div>

              <div className="mb-10 rounded-xl overflow-hidden border border-gray-800 bg-[#161b22]">
                <div className="bg-[#0d1117] p-4 border-b border-gray-800">
                  <h3 className="text-lg font-medium text-white">Step 4.2: Pull changes from the remote repository</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-6 text-lg">
                    The{" "}
                    <code className="px-1.5 py-0.5 rounded bg-[#0d1117] text-gray-300 text-sm font-mono">
                      git pull
                    </code>{" "} command fetches changes from the remote repository and integrates them into your local branch.
                  </p>
                  <CodeBlock code="git pull origin main" />
                  <div className="rounded-lg overflow-hidden border border-gray-700 mb-4 mt-6">
                    <Image
                      src="/git-basics/006_git_basics.png?height=400&width=800"
                      alt="Screenshot: GitHub repository page showing the updated files and commit history"
                      width={800}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden border border-amber-600/30 bg-amber-950/20 p-6 mt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-amber-900/50 p-2 rounded-lg mt-1">
                        <AlertCircleIcon className="h-5 w-5 text-amber-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-amber-200 mb-3">Note: Handling Merge Conflicts</h4>
                        <p className="text-amber-100 mb-4">
                          If you get an error about "Merge (Safe & Common for Beginners)", you can use the following
                          alternative:
                        </p>
                        <CodeBlock code="git pull --no-rebase origin main" />
                        <p className="text-amber-100 mt-4 mb-4">
                          Or permanently set the behavior for all future pulls in this repository:
                        </p>
                        <CodeBlock code="git config pull.rebase false" />
                        <p className="text-amber-100 mt-4">
                          (Or use{" "}
                          <code className="px-1.5 py-0.5 rounded bg-amber-900/50 text-amber-200 text-sm font-mono">
                            --global
                          </code>{" "}
                          to apply it to all repositories.)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="push-changes" className="mb-16 scroll-mt-20">
              <h2 className="text-2xl font-bold text-white mb-6">Step 5: Push Changes</h2>
              <p className="text-gray-300 mb-6 text-lg">
                Now that you've committed your changes locally and pulled any remote changes, it's time to push your changes to GitHub.
              </p>

              <div className="mb-10 rounded-xl overflow-hidden border border-gray-800 bg-[#161b22]">
                <div className="bg-[#0d1117] p-4 border-b border-gray-800">
                  <h3 className="text-lg font-medium text-white">Step 5.1: Push your changes to GitHub</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-6 text-lg">
                    Use the{" "}
                    <code className="px-1.5 py-0.5 rounded bg-[#0d1117] text-gray-300 text-sm font-mono">
                      git push
                    </code>{" "} command to upload your local commits to the remote repository.</p>
                  <CodeBlock code="git push origin main" />
                  <div className="rounded-lg overflow-hidden border border-gray-700 mb-4 mt-6">
                    <Image
                      src="/git-basics/007_git_basics.png?height=400&width=800"
                      alt="Screenshot: GitHub repository page showing the updated files and commit history"
                      width={800}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-10 rounded-xl overflow-hidden border border-gray-800 bg-[#161b22]">
                <div className="bg-[#0d1117] p-4 border-b border-gray-800">
                  <h3 className="text-lg font-medium text-white">Step 5.2: Verify your changes on GitHub</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-6 text-lg">
                    Navigate to your repository on GitHub and verify that your changes have been pushed successfully.
                  </p>
                  <div className="rounded-lg overflow-hidden border border-gray-700 mb-4 mt-6">
                    <Image
                      src="/git-basics/008_git_basics.png?height=400&width=800"
                      alt="Screenshot: GitHub repository page showing the updated files and commit history"
                      width={800}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section id="next-steps" className="mb-16 scroll-mt-20">
              <h2 className="text-2xl font-bold text-white mb-6">Next Steps</h2>
              <p className="text-gray-300 mb-4 text-lg">
                Congratulations! You've successfully cloned a repository, made changes, committed them, and pushed them
                back to GitHub. Here are some next steps to continue your Git journey:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-gray-300 text-lg">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                  <Link href="#" className="text-purple-400 hover:text-purple-300 hover:underline">
                    Learn about branching and merging
                  </Link>
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-lg">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                  <Link href="#" className="text-purple-400 hover:text-purple-300 hover:underline">
                    Create your first pull request
                  </Link>
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-lg">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                  <Link href="#" className="text-purple-400 hover:text-purple-300 hover:underline">
                    Work with issues and projects
                  </Link>
                </li>
              </ul>

              <div className="rounded-xl overflow-hidden border border-gray-800 bg-[#161b22] p-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-[#0d1117] p-2 rounded-lg mt-1">
                    <LightbulbIcon className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Pro Tip</h3>
                    <p className="text-gray-300 text-lg">
                      Create a{" "}
                      <code className="px-1.5 py-0.5 rounded bg-[#0d1117] text-gray-300 text-sm font-mono">
                        .gitignore
                      </code>{" "}
                      file in your repository to specify files and directories that Git should ignore. This is useful
                      for excluding build artifacts, dependency directories, and sensitive information.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/tutorials/branching-and-merging"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-[#238636] px-6 text-sm font-medium text-white shadow-lg transition-colors hover:bg-[#2ea043]"
                >
                  Next Tutorial: Branching & Merging
                </Link>
                <button className="inline-flex h-12 items-center justify-center rounded-md border border-gray-700 bg-[#161b22] px-6 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#1c2128] hover:border-gray-600">
                  Mark as Completed
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
