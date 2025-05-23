export function RequestSection() {
  return (
    <section className="w-full py-16 bg-[#0d1117]">
      <div className="container px-4 md:px-6">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl blur-3xl opacity-30"></div>
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 rounded-xl border border-gray-800 bg-[#161b22] p-8 shadow-xl">
            <div className="space-y-3 text-center md:text-left">
              <h2 className="text-2xl font-bold text-white">Don&apos;t see what you&apos;re looking for?</h2>
              <p className="text-gray-400 max-w-md">
                Let us know what GitHub topic you&apos;d like us to cover in a future tutorial.
              </p>
            </div>
            <button className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-blue-600 px-8 text-sm font-medium text-white shadow-lg shadow-purple-900/20 transition-transform hover:scale-105">
              Request a Tutorial
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
