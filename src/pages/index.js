import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./components/Header/Header";
import ImageGrid from "./components/ImageGrid/ImageGrid";
import Detail from "./components/Detail/Detail";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>City Gallery</title>
      </Head>
      <Header />
      <main className="px-10">
        <ImageGrid />
        <Detail />
      </main>
    </>
  );
}
