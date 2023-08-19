import Container from '@/components/common/container';
import Head from 'next/head';
import SideNavbar from '@/components/common/sidenavbar';
import TopNavbar from '@/components/common/topnavbar';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import type { FC, ReactNode } from "react";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Meet JK</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center">
        <div className="h-screen w-screen max-w-[1920px]">
          <SideNavbar />
          <TopNavbar />
          <AnimatePresence mode="wait" initial={false}>
            <Container key={router.route}>{children}</Container>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Layout;
