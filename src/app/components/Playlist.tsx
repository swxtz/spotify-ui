interface PlaylistProps {
  href: string
  title: string
}

export function Playlist({href, title}: PlaylistProps) {
  return (
    <a href={href} className="text-sm text-zinc-400 hover:text-zinc-100 duration-200">{title}</a>
  );
}