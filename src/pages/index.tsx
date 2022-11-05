import Head from "next/head";
import Image from "next/image";
import Header from "../components/templates/Header";
import TopFv from "../components/atoms/TopFv";
import SlidebarGrid from "../components/templates/SlidebarGrid";

export default function Home() {
  return (
    <>
      <Header />
      <TopFv />
      <SlidebarGrid />
    </>
  );
}
