import { Divider, Accordion, AccordionItem, Tooltip } from "@nextui-org/react";
import { Skills } from "./Skills";
import { Contacts } from "./Contacts";

const TripAdvisorLink = ({ placeId, label }: { placeId: string, label: string }) => {
  return (
    <a className="hover:text-green-500 hover:underline"
      href={`https://www.tripadvisor.co.uk/${placeId}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  )
}

export const Description = () => {
  const age = () => {
    return new Date().getFullYear() - 1999;
  }

  return (
    <div id="description" className='flex flex-col justify-center items-center py-[120px]'>
      <div className="mt-24 bg-white text-black font-medium p-3 max-w-[800px] text-justify">
        <div className="text-[18px] md:text-[24px]">
          <p>
            <span className="hover:text-yellow-500 hover:font-black cursor-none">Hello 👋</span>. I am a self-starter,
            dedicated and highly motivated full-stack <span className="font-black">Software Engineer</span> with
            extensive technical background, adept at swiftly acquiring and leveraging new skills while building upon past
            experiences with efficiency and applying the industry{"'"}s best practices.
          </p>

          <p className="mt-4">
            <span className="font-semibold text-background">Few facts about me: </span> I am{' '}
            <Tooltip content="Born in 8th August 1999"><span>{age()} years old</span></Tooltip>,
            originally from <TripAdvisorLink placeId="3652237" label="Inhambane, Mozambique" /> living in{' '}
            <TripAdvisorLink placeId="186334" label="Leicester, United Kingdom" />. Although my native language is Portuguese,
            I also speak fluent english. I enjoy watching <a href="https://x.com/f1/" className="hover:text-green-500 hover:underline">Formula 1</a>{' '}
            (favorite team: <a href="https://redbullracing.com" className="hover:text-green-500 hover:underline">Red Bull Racing</a>).
          </p>
        </div>

        <Divider style={{ marginTop: 32 }} />

        <Accordion>
          <AccordionItem
            key="contacts"
            id="contacts"
            title="CONTACTS"
            classNames={{ heading: "group font-bold", title: "group-hover:text-green-500" }}
          >
            <Contacts />
          </AccordionItem>

          <AccordionItem
            key="skills"
            title="SKILLS"
            classNames={{ heading: "group font-bold", title: "group-hover:text-green-500" }}
          >
            <Skills />
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
