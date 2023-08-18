import { Button } from "@/components/ui/button";
import Head from "next/head";
import { type FC } from "react";
const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Meet JK</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center">
        <div className="h-screen w-screen max-w-[1920px]">
          <Sidebar />
          <TopBar />
          <MainContent />
        </div>
      </div>
    </>
  );
};

export default Home;

const TopBar: FC = () => {
  return (
    <nav className="CONTAINER fixed left-0 right-0 top-0 flex h-14 items-center justify-between border-b bg-secondary px-4">
      <div className="LEFT-CONTAINER font-extrabold text-primary">Meet JK</div>
      <div className="RIGHT-CONTAINER flex gap-4">
        <Button variant="ghost">Login</Button>
        <Button>Signup</Button>
      </div>
    </nav>
  );
};

const Sidebar: FC = () => {
  return (
    <aside className="SIDEBAR fixed left-0 top-14 flex h-full w-1/6 flex-col gap-4 bg-secondary p-4">
      <div className="SECTION flex flex-col gap-2">
        <div className="SECTION-TITLE">Section 1</div>
        <div className="SECTION-LINK rounded-lg p-1 text-center font-semibold hover:bg-primary hover:text-primary-foreground">
          topic 1
        </div>
        <div className="SECTION-LINK rounded-lg p-1 text-center font-semibold hover:bg-primary hover:text-primary-foreground">
          topic 2
        </div>
        <div className="SECTION-LINK rounded-lg p-1 text-center font-semibold hover:bg-primary hover:text-primary-foreground">
          topic 3
        </div>
      </div>
    </aside>
  );
};

const MainContent: FC = () => {
  return <main>Hello world</main>;
};
