import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TutorialSidebar } from "@/components/tutorial-sidebar"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Plus, LightbulbIcon } from "lucide-react"

export default function CreateRepositoryTutorial() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-col md:flex-row flex-1">
        <TutorialSidebar
          tutorialTitle="Creating a Repository"
          sections={[
            { title: "Prerequisites", href: "#prerequisites" },
            { title: "Create a Repository", href: "#create-repository" },
            { title: "Initialize Repository", href: "#initialize-repository" },
            { title: "Repository Settings", href: "#repository-settings" },
            { title: "Next Steps", href: "#next-steps" },
          ]}
          relatedTutorials={[
            { title: "Git Basics", href: "/tutorials/git-basics" },
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
                <Plus className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-white">Creating a New Repository</h1>
            </div>

            <p className="text-gray-300 mb-12 text-lg">
              This step-by-step guide will walk you through the process of creating a new repository on GitHub with
              detailed screenshots.
            </p>

            <section id="prerequisites" className="mb-16 scroll-mt-20">
              <h2 className="text-2xl font-bold text-white mb-6">Prerequisites</h2>
              <p className="text-gray-300 mb-4 text-lg">Before you begin, make sure you have:</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-gray-300 text-lg">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                  <span>
                    A GitHub account (if you don't have one, sign up at{" "}
                    <a href="https://github.com" className="text-purple-400 hover:text-purple-300 hover:underline">
                      github.com
                    </a>
                    )
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-300 text-lg">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                  <span>Logged into your GitHub account</span>
                </li>
              </ul>
            </section>

            <section id="create-repository" className="mb-16 scroll-mt-20">
              <h2 className="text-2xl font-bold text-white mb-6">Step 1: Create a New Repository</h2>
              <p className="text-gray-300 mb-6 text-lg">Let's start by creating a new repository on GitHub.</p>

              <div className="mb-10 rounded-xl overflow-hidden border border-gray-800 bg-[#161b22]">
                <div className="bg-[#0d1117] p-4 border-b border-gray-800">
                  <h3 className="text-lg font-medium text-white">
                    Step 1.1: Click the "+" icon in the top-right corner
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-6 text-lg">
                    In the top-right corner of any GitHub page, click on the "+" icon and select "New repository" from
                    the dropdown menu.
                  </p>
                  <div className="rounded-lg overflow-hidden border border-gray-700 mb-4">
                    <Image
                      src="/creating-a-repository/001_creating_a_repository.png?height=400&width=800"
                      alt="Screenshot showing the + icon in GitHub's top navigation"
                      width={800}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-10 rounded-xl overflow-hidden border border-gray-800 bg-[#161b22]">
                <div className="bg-[#0d1117] p-4 border-b border-gray-800">
                  <h3 className="text-lg font-medium text-white">Step 1.2: Fill in repository details</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-6 text-lg">
                    On the "Create a new repository" page, fill in the following information:
                  </p>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start gap-3 text-gray-300 text-lg">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                      <span>Repository name (e.g., "my-first-repo")</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300 text-lg">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                      <span>Description (optional but recommended)</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300 text-lg">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                      <span>Choose whether the repository should be public or private</span>
                    </li>
                  </ul>
                  <div className="rounded-lg overflow-hidden border border-gray-700 mb-4">
                    <Image
                      src="/creating-a-repository/002_creating_a_repository.png?height=400&width=800"
                      alt="Screenshot of the Create a new repository form"
                      width={800}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section id="initialize-repository" className="mb-16 scroll-mt-20">
              <h2 className="text-2xl font-bold text-white mb-6">Step 2: Initialize Your Repository</h2>
              <p className="text-gray-300 mb-6 text-lg">
                Now, let's initialize your repository with some starter files.
              </p>

              <div className="mb-10 rounded-xl overflow-hidden border border-gray-800 bg-[#161b22]">
                <div className="bg-[#0d1117] p-4 border-b border-gray-800">
                  <h3 className="text-lg font-medium text-white">Step 2.1: Initialize repository options</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-6 text-lg">Scroll down to the "Initialize this repository with" section and select the options you want:</p>
                  <ul className="space-y-4 mb-6">
                    <li className="flex items-start gap-3 text-gray-300 text-lg">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                      <span>Add a README file (recommended for new repositories)</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300 text-lg">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                      <span>Add .gitignore (select a template based on your project type)</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300 text-lg">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                      <span>Choose a license (optional)</span>
                    </li>
                  </ul>
                  <p className="text-gray-300 mb-6 text-lg">After filling in all the details, click the "Create repository" button at the bottom of the form.</p>
                  <div className="rounded-lg overflow-hidden border border-gray-700 mb-4">
                    <Image
                      src="/creating-a-repository/003_creating_a_repository.png?height=400&width=800"
                      alt="Screenshot showing repository initialization options"
                      width={800}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              
              <div className="mb-10 rounded-xl overflow-hidden border border-gray-800 bg-[#161b22]">
                <div className="bg-[#0d1117] p-4 border-b border-gray-800">
                  <h3 className="text-lg font-medium text-white">Step 2.2: Repository created successfully</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-6 text-lg">Congratulations! Your new repository has been created. You'll be redirected to your repository's main page.</p>
                  <div className="rounded-lg overflow-hidden border border-gray-700 mb-4">
                    <Image
                      src="/creating-a-repository/005_creating_a_repository.png?height=400&width=800"
                      alt="Screenshot showing repository initialization options"
                      width={800}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              
            </section>

            <section id="repository-settings" className="mb-16 scroll-mt-20">
              <h2 className="text-2xl font-bold text-white mb-6">Step 3: Configure Repository Settings</h2>
              <p className="text-gray-300 mb-6 text-lg">
                After creating your repository, you can configure additional settings to customize your workflow.
              </p>

              <div className="mb-10 rounded-xl overflow-hidden border border-gray-800 bg-[#161b22]">
                <div className="bg-[#0d1117] p-4 border-b border-gray-800">
                  <h3 className="text-lg font-medium text-white">Step 3.1: Access repository settings</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-6 text-lg">
                    Navigate to your repository's main page and click on the "Settings" tab in the top navigation bar.
                  </p>
                  <div className="rounded-lg overflow-hidden border border-gray-700 mb-4">
                    <Image
                      src="/creating-a-repository/006_creating_a_repository.png?height=400&width=800"
                      alt="Screenshot showing the Settings tab in a GitHub repository"
                      width={800}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-gray-300 mb-6 text-lg">In the General settings section, you can:</p>
                  <ul className="space-y-4 mb-3">
                    <li className="flex items-start gap-3 text-gray-300 text-lg">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                      <span>Change repository name</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300 text-lg">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                      <span>Change visibility (public/private) and set default branch</span>
                    </li>
                    <li className="flex items-start gap-3 text-gray-300 text-lg">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                      <span>Enable/disable features (Issues, Wiki, etc.)</span>
                    </li>
                  </ul>                  
                </div>
              </div>

              <div className="mb-10 rounded-xl overflow-hidden border border-gray-800 bg-[#161b22]">
                <div className="bg-[#0d1117] p-4 border-b border-gray-800">
                  <h3 className="text-lg font-medium text-white">Step 3.2: Manage collaborators</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-6 text-lg">
                    In the Settings page, click on "Collaborators" in the left sidebar to add team members to your
                    repository.
                  </p>
                  <div className="rounded-lg overflow-hidden border border-gray-700 mb-4">
                    <Image
                      src="/creating-a-repository/007_creating_a_repository.png?height=400&width=800"
                      alt="Screenshot showing the collaborators page"
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
              <p className="text-gray-300 mb-4 text-lg">Now that you've successfully created a repository, you can:</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-gray-300 text-lg">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                  <Link href="#" className="text-purple-400 hover:text-purple-300 hover:underline">
                    Clone your repository and learn basic Git commands
                  </Link>
                </li>
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
              </ul>

              <div className="rounded-xl overflow-hidden border border-gray-800 bg-[#161b22] p-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-[#0d1117] p-2 rounded-lg mt-1">
                    <LightbulbIcon className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Pro Tip</h3>
                    <p className="text-gray-300 text-lg">
                      When naming your repository, use lowercase letters, hyphens instead of spaces, and keep the name
                      short but descriptive. This makes it easier to reference your repository in commands and URLs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/tutorials/git-basics"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-blue-600 px-6 text-sm font-medium text-white shadow-purple-900/20 transition-colors hover:bg-[#2ea043]"
                >
                  Next Tutorial: Git Basics
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
