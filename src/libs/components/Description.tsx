import { Divider, Accordion, AccordionItem, Tooltip } from "@nextui-org/react";
import { Skills } from "./Skills";
import { Contacts } from "./Contacts";
import { differenceInYears } from "date-fns";
import { ExternalLink } from "./ExternalLink";

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
    const birthDate = new Date('1999-08-08');
    return differenceInYears(new Date(), birthDate);
  }

  return (
    <div id="description" className='flex flex-col justify-center items-center py-[120px]'>
      <div className="mt-24 bg-description-background text-description-foreground font-medium p-3 max-w-[800px] text-justify">
        <div className="text-[18px] md:text-[24px]">
          <p>
            <span className="before:content-['Hello👋'] hover:text-yellow-500 hover:font-black duration-200 relative cursor-none"></span>. I am a self-starter,
            dedicated and highly motivated full-stack <span className="font-bold">Software Engineer</span> with
            extensive technical background, adept at swiftly acquiring and leveraging new skills while building upon past
            experiences with efficiency and applying the industry{"'"}s best practices.
          </p>

          <p className="mt-4">
            {age()}-year-old, born on August 8th in the beautiful city of <TripAdvisorLink placeId="3652237" label="Inhambane, Mozambique" />, currently residing in <TripAdvisorLink placeId="186334" label="Leicester, United Kingdom" />.
            Fluent in Portuguese, my native language, and English. I enjoy a variety of things in my free time but music is my main source of creativity and focus every day <span className="text-gray-400">(</span><ExternalLink href="https://open.spotify.com/playlist/5oFcuasvDJLsVe8cHWezCz" className="text-gray-400 hover:text-green-500 hover:underline">my spotify playlist</ExternalLink><span className="text-gray-400">)</span>.
          </p>
        </div>

        <div className="flex justify-center">
          <Divider className="my-6 w-1/12 h-1 rounded-full bg-description-divider" />
        </div>

        <Accordion>
          <AccordionItem
            key="contacts"
            id="contacts"
            title="CONTACTS"
            classNames={{ heading: "group font-bold", title: "text-description-foreground group-hover:text-green-500" }}
          >
            <Contacts />
          </AccordionItem>

          <AccordionItem
            key="skills"
            title="SKILLS"
            classNames={{ heading: "group font-bold", title: "text-description-foreground group-hover:text-green-500",  }}
          >
            <Skills />
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
