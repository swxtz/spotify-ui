

import Image from 'next/image';
import { useId } from 'react';

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
          className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors"
        >
          <Image src="/album.jpg" alt="Capa do album" width={80} height={80} priority quality={100} />
          <strong>{playlist}</strong>
        </a>
      ))}
    </div>
  );
}
