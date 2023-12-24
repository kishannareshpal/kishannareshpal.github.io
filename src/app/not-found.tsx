import { MoveLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="h-lvh flex flex-col justify-center items-center gap-6">
      <h1 className="text-4xl font-narrow font-black">404 Page not found</h1>

      <a
        className="ring-2 ring-cards-link-outline py-1 px-4 font-semibold
                  rounded-full text-sm flex gap-2 items-center justify-center
                  hover:text-yellow-500 hover:bg-background hover:ring-yellow-500 duration-300"
        href="/"
      >
        <MoveLeft size={14} /> Back to homepage
      </a>
    </div>
  )
}
