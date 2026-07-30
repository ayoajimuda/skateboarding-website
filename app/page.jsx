import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { connection } from "next/server";
import React from 'react';

export default async function Home() {
  await connection();

  return (
    <div>
      <Header/>
      <Hero/>
      <section>
        <h2>Hello</h2>
      </section>
      <Footer/>
    </div>
  );
}