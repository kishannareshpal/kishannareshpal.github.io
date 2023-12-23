import { Footer } from "@/libs/components/Footer";
import { MoveLeft } from "lucide-react";

export default function HomePage() {
  return (
    <div className="h-lvh text-[#DAFFCC] flex flex-col justify-center items-center gap-6">
      <h1 className="text-4xl">404 Page not found</h1>
      <a
        className="ring-2 ring-yellow-500/10 text-white py-1 px-4 font-semibold
                  rounded-full text-sm flex gap-2 items-center justify-center
                  hover:text-yellow-500 hover:bg-background hover:ring-yellow-500 duration-300"
        href="/"
        target='_blank'
      >
        <MoveLeft size={14} /> Back to homepage
      </a>
    </div>
  )
}
