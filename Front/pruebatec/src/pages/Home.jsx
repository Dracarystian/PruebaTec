import React from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

import {
  Card,
  CardHeader,
} from "@/components/ui/card";

const Home = () => {
  return (
    <>
      <div>
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search Emoji</CommandItem>
              <CommandItem>Calculator</CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>Profile</CommandItem>
              <CommandItem>Billing</CommandItem>
              <CommandItem>Settings</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
        <Card>
          <CardImage
            src="/ruta/de/la/imagen.jpg"
            alt="Descripción de la imagen"
          />
          <CardHeader>
            <h3>Título de la tarjeta</h3>
          </CardHeader>
        </Card>
      </div>
    </>
  );
};

export default Home;
