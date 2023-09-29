import * as React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VilData } from "./VilData";

export default function CardVil() {
  return (
    <>
      {VilData.map((item, index) => (
        <Card className="w-full border border-border" key={index}>
          <CardHeader className="border-b border-separate">
            <CardTitle>{item.title}</CardTitle>
            {/* <CardDescription>
     Deploy your new project in one-click.
   </CardDescription> */}
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-outside marker:text-primary dark:text-muted-foreground p-5">
              {item.list.map((item, index) => (
                <li key={index} className="text-md">
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
          {/* <CardFooter className="flex justify-between">
   <Button variant="outline">Cancel</Button>
   <Button>Deploy</Button>
 </CardFooter> */}
        </Card>
      ))}
    </>
  );
}
