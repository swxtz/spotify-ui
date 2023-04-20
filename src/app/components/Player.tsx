import Image from 'next/image';
import album from '../../../public/album.jpg';
import play from '../../../public/play.svg';
import playlist from '../../../public/playlist-fill.svg';
import { Laptop2, Maximize, Maximize2, Repeat, Shuffle, SkipBack } from 'lucide-react';
import { SkipForward } from 'lucide-react';
import { Mic2 } from "lucide-react";
import { Volume } from "lucide-react";

export function Player() {
  return (
    <footer className="bg-zinc-800 border-1 border-zinc-700 px-6 py-3 fixed bottom-0 w-full flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image
          src={album}
          alt="Manual de como amar errado"
          width={56}
          height={56}
        />
        <div className="flex flex-col gap-0.5">
          <strong className="font-normal">Coração de gelo</strong>
          <span className="text-xs text-zinc-400">Wiu, Matue, Teto</span>
        </div>
      </div>

      <div className="flex flex-col ml-24 items-center">
        <div className="flex flex-row items-center gap-2">
          <Shuffle size={20} />
          <SkipBack size={20} />
          <button className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
            <Image src={play} alt="" width={16} height={16} />
          </button>
          <SkipForward size={20} />
          <Repeat size={20} />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-500">0:31</span>
          <div className="h-1 rounded-full w-80 bg-zinc-600">
            <div className="bg-zinc-200 w-16 h-1 rounded-full"></div>
          </div>
          <span className="text-xs text-zinc-500">2:48</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Mic2 size={20} />
        <Image src={playlist} alt="" width={20} height={20}/>
        <Laptop2 size={20} />

        <div className="flex items-center gap-2 ">
          <Volume size={20} />
          <div className="h-1 rounded-full w-24 bg-zinc-600">
            <div className="h-1 rounded-full w-16 bg-white"></div>
          </div>
        </div>

        <Maximize2 size={20} />
      </div>
    </footer>
  );
}
