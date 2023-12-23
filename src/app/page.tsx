'use client';

import { openSourceContributions } from '@/assets/data/openSourceContributions';
import { projects } from '@/assets/data/projects';
import { Cards } from '@/libs/components/Cards';
import { Description } from '@/libs/components/Description';
import { Heading } from '@/libs/components/Heading';
import { SectionTitle } from '@/libs/components/SectionTitle';

export default function HomePage() {
  return (
    <div>
      <Heading />

      <Description />

      <div className='px-4'>
        <SectionTitle title="PROJECTS" />

        <Cards.Container>
          {projects.map((project) => (
            <Cards.Item
              key={project.name}
              logoSrc={project.logo}
              name={project.name}
              description={project.description}
              links={project.links}
            />
          ))}
        </Cards.Container>
      </div>

      <div className='mt-24 px-4'>
        <SectionTitle title="OPEN-SOURCE CONTRIBUTIONS" />

        <Cards.Container>
          {openSourceContributions.map((osc) => (
            <Cards.Item
              key={osc.name}
              logoSrc={osc.logo}
              name={osc.name}
              description={osc.description}
              links={osc.links}
            />
          ))}
        </Cards.Container>
      </div>
    </div>
  )
}
