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
            className="border-2 rounded-2xl w-full"
            key={category.name}
          >
            <TableHeader>
              <TableColumn
                className="font-semibold uppercase text-md font-narrow bg-gray-200 text-black break-words whitespace-pre-line leading-tight py-2"
              >
                {category.name}
              </TableColumn>
            </TableHeader>
            <TableBody>
              {category.skills.map((technology) => (
                <TableRow
                  key={technology}
                  className="group md:hover:bg-primary/30 duration-100"
                >
                  <TableCell className="rounded-lg">{technology}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        );
      })}
    </div>
  )
}
