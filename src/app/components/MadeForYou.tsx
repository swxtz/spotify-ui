import Image from 'next/image';
import Album from '../../../public/album.jpg';
import { useId } from 'react';

export function MadeForYou() {
  const playlists = [
    { name: 'Daily Mix 1', description: 'Wiu, Teto, Matue Orochi e mais' },
    { name: 'Daily Mix 2', description: 'Wiu, Teto, Matue Orochi e mais' },
    { name: 'Daily Mix 3', description: 'Wiu, Teto, Matue Orochi e mais' },
    { name: 'Daily Mix 4', description: 'Wiu, Teto, Matue Orochi e mais' },
    { name: 'Daily Mix 5', description: 'Wiu, Teto, Matue Orochi e mais' },
  ];


  return (
    <>
      {playlists.map((playlist) => (
        <a
          key={useId()}
          href="#"
          className="bg-white/5 p-2 rounded-md flex flex-col gap-2 w-44 hover:bg-white/10 transition-colors"
        >
          <Image
            src={Album}
            alt="Manual de como amar errado"
            className="w-full"
          />
          <strong className="font-semibold">{playlist.name}</strong>
          <span className="text-sm text-zinc-500">{playlist.description}</span>
        </a>
      ))}
    </>
  );
}
