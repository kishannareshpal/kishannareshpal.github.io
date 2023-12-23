import './SectionTitle.scss';

type SectionTitleProps = {
  title: string;
}

export const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <h2 className='text-[52px] md:text-[76px] font-black text-[#BBF7D2] font-narrow mt-9 mb-6 text-center leading-none'>
      {title}
    </h2>
  )
}
