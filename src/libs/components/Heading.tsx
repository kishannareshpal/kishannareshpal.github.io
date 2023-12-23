import { Me } from "./Me";

export const Heading = () => {
  return (
    <div className="h-svh flex flex-col justify-center items-center">
      <Me />

      <h1 className='text-center mt-8 font-black text-primary leading-none text-[80px] sm:text-[94px] md:text-[120px] lg:text-[190px] break-word'>
        Kishan Jadav
      </h1>
    </div>
  )
}
