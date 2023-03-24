import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>City Gallery</title>
      </Head>
      <main>
        <header className="h-20 flex items-center shadow-2xl px-5">
          <h1 className="text-3xl font-bold">Logo.</h1>
        </header>
        {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      </main>
    </>
  );
}
