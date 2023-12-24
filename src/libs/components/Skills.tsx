'use client';

import { categorizedSkills } from "@/assets/data/skills";
import { TableHeader, TableColumn, TableBody, TableRow, TableCell, Table } from "@nextui-org/react";

export const Skills = () => {
  return (
    <div className="flex flex-col gap-3">
      {categorizedSkills.map((category) => {
        return (
          <Table
            shadow="none"
            className="rounded-2xl w-full"
            classNames={{ wrapper: 'bg-skill-background text-skill-foreground' }}
            key={category.name}
          >
            <TableHeader>
              <TableColumn
                className="font-semibold uppercase text-md font-narrow bg-transparent underline text-skill-foreground break-words whitespace-pre-line leading-tight py-2"
              >
                {category.name}
              </TableColumn>
            </TableHeader>
            <TableBody>
              {category.skills.map((technology) => (
                <TableRow
                  key={technology}
                  className="group duration-100"
                >
                  <TableCell className="rounded-lg md:hover:bg-primary/10">{technology}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        );
      })}
    </div>
  )
}
