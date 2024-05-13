import React from "react";
import { Card, CardImage, CardContent, CardTitle } from "@/components/ui/card";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

function Home() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4">
      <Command>
          <CommandInput placeholder="Buscar por numero de Cédula" />
        </Command>

        <Card className="w-339 h-188.16 relative">
          <CardImage
            src="src/assets/img/imgAndres.jpg"
            alt="Andres Laverde"
            className="w-full h-full rounded-lg"
          />
          <CardContent
            className="absolute bottom-0 left-0 right-0"
            style={{ background: "white" }}
          >
            <div className="p-4">
              <CardTitle className="text-xl font-semibold text-black px-1 absolute bottom-0 left-0">
                Ándres Laverde
              </CardTitle>
            </div>
          </CardContent>
        </Card>
        <Card className="w-339 h-188.16 relative">
          <CardImage
            src="src/assets/img/imgWendy.jpg"
            alt="Descripción de la imagen"
            className="w-full h-full rounded-lg"
          />
          <CardContent
            className="absolute bottom-0 left-0 right-0"
            style={{ background: "white" }}
          >
            <div className="p-4">
              <CardTitle className="text-xl font-semibold text-black px-1 absolute bottom-0 left-0">
                Wendy Sanchez
              </CardTitle>
            </div>
          </CardContent>
        </Card>
        <Card className="w-339 h-188.16 relative">
          <CardImage
            src="src/assets/img/imgCarlos.jpg"
            alt="Descripción de la imagen"
            className="w-full h-full rounded-lg"
          />
          <CardContent
            className="absolute bottom-0 left-0 right-0"
            style={{ background: "white" }}
          >
            <div className="p-4">
              <CardTitle className="text-xl font-semibold text-black px-1 absolute bottom-0 left-0">
                Carlos Ladino
              </CardTitle>
            </div>
          </CardContent>
        </Card>

        
      </div>
    </>
  );
}

export default Home;
