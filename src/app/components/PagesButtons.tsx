import { ChevronLeft, ChevronRight } from 'lucide-react'
 
export function PagesButtons() {
  return (
    <div className="flex items-center gap-3">
      <button className="rounded-full bg-black/40 p-1 hover:brightness-125 hover:bg-black/20 transition-colors"> 
        <ChevronLeft />
      </button>

      <button className="rounded-full bg-black/40 p-1 hover:brightness-125 hover:bg-black/20 transition-colors">
        <ChevronRight />
      </button>
    </div>
  )
}