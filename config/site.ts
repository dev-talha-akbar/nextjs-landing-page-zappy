import {
  DribbbleIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "@/components/Icons";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Zappy",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Features",
      href: "/features",
    },
    {
      label: "Integrations",
      href: "/integrations",
    },
    {
      label: "Case studies",
      href: "/case-studies",
    },
    {
      label: "Reviews",
      href: "/reviews",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
  ],
  mobileNavItems: [
    {
      label: "Features",
      href: "/features",
    },
    {
      label: "Integrations",
      href: "/integrations",
    },
    {
      label: "Case studies",
      href: "/case-studies",
    },
    {
      label: "Reviews",
      href: "/reviews",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
  ],
  contact: {
    telephone: "tel:1-800-847-298",
  },
  socialNavItems: [
    {
      label: "Facebook",
      href: "/facebook",
      icon: FacebookIcon,
    },
    {
      label: "Instagram",
      href: "/instagram",
      icon: InstagramIcon,
    },
    {
      label: "Twitter",
      href: "/twitter",
      icon: TwitterIcon,
    },
    {
      label: "Dribble",
      href: "/dribbble",
      icon: DribbbleIcon,
    },
  ],
  footerNavItems: [
    {
      group: "Services",
      items: [
        {
          label: "Features",
          href: "/features",
        },
        {
          label: "Integrations",
          href: "/integrations",
        },
        {
          label: "Case studies",
          href: "/case-studies",
        },
        {
          label: "Reviews",
          href: "/reviews",
        },
        {
          label: "Pricing",
          href: "/pricing",
        },
      ],
    },
    {
      group: "Company",
      items: [
        {
          label: "About",
          href: "/about",
        },
        {
          label: "Our team",
          href: "/team",
        },
        {
          label: "Blog",
          href: "/company-blog",
        },
      ],
    },
    {
      group: "Helpful links",
      items: [
        {
          label: "Contact",
          href: "/contact",
        },
        {
          label: "FAQs",
          href: "/faqs",
        },
        {
          label: "Live chat",
          href: "/live-chat",
        },
      ],
    },
  ],
};
