import React from 'react'
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from "@/components/ui/navigation-menu"
import Link from "next/link";


export default function Navigationbar() {
  return (
    <NavigationMenu className="m-4">
    <NavigationMenuList>
    <NavigationMenuItem>
    <Link href="/" legacyBehavior passHref>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        Search
      </NavigationMenuLink>
    </Link>
  </NavigationMenuItem>
  
  <NavigationMenuItem>
    <Link href="/categories" legacyBehavior passHref>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      Categories
      </NavigationMenuLink>
    </Link>
  </NavigationMenuItem>
  
  <NavigationMenuItem>
    <Link href="/allwords" legacyBehavior passHref>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      All words
      </NavigationMenuLink>
    </Link>
  </NavigationMenuItem>
  
    </NavigationMenuList>
  </NavigationMenu>
  )
}
