"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";

import { siteConfig } from "@/config/site";
import { PhoneIcon, Logo } from "@/components/Icons";

export const Navbar = () => {
  const item = {
    hidden: { opacity: 0, y: -100 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      animate="show"
      className="relative"
      initial="hidden"
      transition={{ duration: 1 }}
      variants={item}
    >
      <NextUINavbar maxWidth="xl" position="sticky">
        <NavbarContent
          className="basis-1/5 sm:basis-full gap-2 md:gap-8"
          justify="start"
        >
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink
              className="flex justify-start items-center gap-1"
              href="/"
            >
              <Logo className="text-primary" />
              <span className="font-bold text-primary text-xl">Zappy</span>
            </NextLink>
          </NavbarBrand>
          <ul className="hidden lg:flex gap-8 justify-start ml-2">
            {siteConfig.navItems.map((item) => (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary font-medium text-default-600",
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </ul>
        </NavbarContent>

        <NavbarContent className="flex basis-1/5 sm:basis-full" justify="end">
          <NavbarItem className="flex gap-2">
            <Link
              isExternal
              aria-label="Twitter"
              className="text-default-600 inline-flex gap-2"
              href={siteConfig.contact.telephone}
            >
              <PhoneIcon size={16} />
              <span>1.8080.847.298</span>
            </Link>
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">
            <Button color="primary" variant="solid">
              Start free trial
            </Button>
          </NavbarItem>
          <NavbarMenuToggle className="lg:hidden" />
        </NavbarContent>

        <NavbarMenu>
          <div className="mx-2 mt-2 flex flex-col gap-2">
            {siteConfig.mobileNavItems.map((item) => (
              <NavbarMenuItem key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
      </NextUINavbar>
    </motion.div>
  );
};
