import './App.css'

function App() {
  return (
    <nav className="border-b border-[#dedbd2] bg-[#f7f5f0]" aria-label="Main navigation">
      <div className="mx-auto flex max-w-7xl items-center gap-8 px-5 py-5 sm:px-8 lg:px-10">
        <a href="#" className="shrink-0 font-['Space_Grotesk'] text-2xl font-bold tracking-tight text-[#202522]">
          nook<span className="text-[#e46f43]">.</span>
        </a>

        <div className="hidden items-center gap-7 text-sm font-medium text-[#656960] md:flex">
          <a className="text-[#202522] transition-colors hover:text-[#e46f43]" href="#new">New in</a>
          <a className="transition-colors hover:text-[#e46f43]" href="#home">Home</a>
          <a className="transition-colors hover:text-[#e46f43]" href="#wear">Wear</a>
          <a className="transition-colors hover:text-[#e46f43]" href="#objects">Objects</a>
        </div>

        <div className="ml-auto flex items-center gap-3 sm:gap-5">
          <label className="hidden items-center gap-2 border-b border-[#bbb9b1] pb-1 text-sm text-[#656960] sm:flex">
            <span aria-hidden="true">Search</span>
            <input className="w-24 bg-transparent outline-none placeholder:text-[#999b93]" type="search" placeholder="Find a thing" aria-label="Search products" />
          </label>
          <a className="text-sm font-medium text-[#202522] transition-colors hover:text-[#e46f43]" href="#account">Account</a>
          <a className="border border-[#202522] px-3 py-2 text-sm font-medium text-[#202522] transition-colors hover:bg-[#202522] hover:text-[#f7f5f0]" href="#cart">Cart (0)</a>
        </div>
      </div>
    </nav>
  )
}

export default App
