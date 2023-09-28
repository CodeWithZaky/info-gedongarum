"use client";
import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import { VilData } from "../datas/VilData";

export default function CardList() {
  return (
    <>
      {VilData.map((item, index) => {
        return (
          <Card
            key={index}
            className="max-w-[400px] bg-slate-50 dark:bg-gray-950"
          >
            <CardHeader className="flex gap-3">
              {/* <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={40}
              /> */}
              <div className="flex flex-col">
                <p className="text-xl font-semibold dark:text-slate-100">
                  {item.title}
                </p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <ul className="list-disc list-inside dark:text-slate-300">
                {item.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link
                isExternal
                showAnchorIcon
                href="https://github.com/nextui-org/nextui"
              >
                Visit source code on GitHub.
              </Link>
            </CardFooter>
          </Card>
        );
      })}
    </>
  );
}
