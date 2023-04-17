import { Home as HomeIcon, Search, Library} from 'lucide-react'
import { Playlist } from "./components/Playlist";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          <nav className="space-y-5 mt-10">
            <a href="#" className="flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:brightness-50 duration-200">
              <HomeIcon />
              Home</a>
            <a href="#" className="flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:brightness-50 duration-200">
              <Search />  
              Search</a>
            <a href="#" className="flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:brightness-50 duration-200">
              <Library />
              Your Library</a>
          </nav>

          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <Playlist href="#" title="Hot Hits Brasil" />
            <Playlist href="#" title="Dope" />
            <Playlist href="#" title="Daily Mix 1" />
            <Playlist href="#" title="Daily Mix 2" />
            <Playlist href="#" title="Daily Mix 3" />
            <Playlist href="#" title="Daily Mix 4" />
            <Playlist href="#" title="Daily Mix 5" />
          </nav>
        </aside>
        <main className="flex-1 p-6">main</main>
      </div>
      <footer className="bg-zinc-800 border-1 border-zinc-700 p-6">footer</footer>
    </div>
  );
}
