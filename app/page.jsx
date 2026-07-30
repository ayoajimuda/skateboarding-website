import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { connection } from "next/server";

export default async function Home() {
  await connection();

  return (
    <div>
      <Header/>
      <Hero/>
      <Footer/>
    </div>
  );
}