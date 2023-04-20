

import Image from 'next/image';
import { useId } from 'react';
import play from '../../../public/play.svg';

export function RecentPlaylists() {


  const playlists = [
    'Hot Hits Brasil',
    'Dope',
    'Daily Mix 1',
    'Daily Mix 2',
    'Daily Mix 3',
    'Daily Mix 4',
  ];

  //

  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      {playlists.map((playlist) => (
        <a
          href="#"
          key={useId()}
          className="bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors group"
        >
          <Image
            src="/album.jpg"
            alt="Capa do album"
            width={80}
            height={80}
            priority
            quality={100}
          />
          <strong>{playlist}</strong>
          <button className="w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Image src={play} alt=""/>
          </button>
        </a>
      ))}
    </div>
  );
}
