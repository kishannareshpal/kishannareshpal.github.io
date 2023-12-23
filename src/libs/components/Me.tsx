import Image from "next/image"
import me from '../../assets/images/me-transparent.png';

export const Me = () => {
  return (
    <Image
      className="rounded-full w-[120px] h-[120px] md:w-[180px] md:h-[180px]"
      draggable={false}
      src={me}
      alt="A photo of Kishan smiling."
    />
  );
}
