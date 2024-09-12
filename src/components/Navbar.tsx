'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";

import Link from "next/link";


function Navbar({ className }: { className?: string }) {
   
    const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>


        <Menu setActive={setActive}>
             <Link href={"/"}>
             <MenuItem setActive={setActive} active={active} item="Головна">
                
             </MenuItem>
             </Link>
             <MenuItem setActive={setActive} active={active} item="Наші курси">
                <div className="flex flex-col space-y-4 text-sm">

             <HoveredLink href="/courses">Усі курси</HoveredLink>
             <HoveredLink href="/courses">Основи музичної теорії</HoveredLink>
             <HoveredLink href="/courses">Удосконалений склад</HoveredLink>
             <HoveredLink href="/courses">Написання пісень</HoveredLink>
             <HoveredLink href="/courses">Музичне продюсування</HoveredLink>
             
                </div>
             </MenuItem>
             <Link href={"/contact"}>
             <MenuItem setActive={setActive} active={active} item="Зв'яжіться з нами">
                
                </MenuItem>
             </Link>
        </Menu>

         
    </div>
  )
}

export default Navbar
