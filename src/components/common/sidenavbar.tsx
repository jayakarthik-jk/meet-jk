import Link from 'next/link';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { useRouter } from 'next/router';
import { type FC } from "react";

const SideNavbar: FC = () => {
  const router = useRouter();
  return (
    <aside className="SIDEBAR fixed left-0 top-12 z-10 h-full w-1/6 bg-secondary">
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0, transition: { delay: 0.1 } }}
        className="flex flex-col p-4 font-bold"
      >
        {sections.map((section) => (
          <div key={section.title}>
            <div className="SECTION my-3 flex flex-col gap-2">
              <span className="SECTION-TITLE text-secondary-foreground">
                {section.title}
              </span>
              {section.links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`SECTION-LINK flex items-center justify-center rounded-lg p-1 text-center font-medium hover:bg-primary-foreground ${
                    link.href === router.pathname
                      ? "bg-primary-foreground text-primary"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Separator />
          </div>
        ))}
      </motion.div>
    </aside>
  );
};

export default SideNavbar;

const sections = [
  {
    title: "Sessions",
    links: [
      {
        name: "All",
        href: "/all-sessions",
      },
      {
        name: "Live",
        href: "/live-sessions",
      },
    ],
  },
  {
    title: "Your",
    links: [
      {
        name: "Attended Sessions",
        href: "/attended-sessions",
      },
      {
        name: "Profile",
        href: "/profile",
      },
    ],
  },
  {
    title: "Links",
    links: [
      {
        name: "About",
        href: "/about",
      },
      {
        name: "Contact",
        href: "/contact",
      },
    ],
  },
];
