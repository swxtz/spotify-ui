import { Home as HomeIcon, Search, Library} from 'lucide-react'
import { Playlist } from "./components/Playlist";
import { PagesButtons } from "./components/PagesButtons";
import { RecentPlaylists } from "./components/RecentPlaylists";
import { useId } from 'react'
import { MadeForYou } from "./components/MadeForYou";
 
export default function Home() {

  const playlists = [
    'Hot Hits Brasil',
    'Dope',
    'Daily Mix 1',
    'Daily Mix 2',
    'Daily Mix 3',
    'Daily Mix 4',
  ];

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
            <a href="#" className="flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:brightness-50 transition-colors">
              <HomeIcon />
              Home</a>
            <a href="#" className="flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:brightness-50 transition-colors">
              <Search />  
              Search</a>
            <a href="#" className="flex items-center gap-3 text-sm font-semibold text-zinc-200 hover:brightness-50 transition-colors">
              <Library />
              Your Library</a>
          </nav>

          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            {playlists.map((playlist) => <Playlist href="#" title={playlist} key={useId()} />)}
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <PagesButtons />

          <h1 className="font-semibold text-4xl mt-8">Good Afternoon</h1>

          <RecentPlaylists />

          <h2 className="font-semibold text-2xl mt-8">Made for Gustavo Mendonça</h2>

          <div className="grid grid-cols-5 gap-4 mt-4">
            <MadeForYou />
          </div>

        </main>
      </div>
      <footer className="bg-zinc-800 border-1 border-zinc-700 p-6 fixed bottom-0 w-full">footer</footer>
    </div>
  );
}
