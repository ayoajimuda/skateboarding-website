import Image from 'next/image';
import fs from "node:fs";
import path from "node:path";
import { thrashBurn } from "@/app/fonts";
import React from 'react';

export const dynamic = "force-dynamic";

const heroImages = fs
  .readdirSync(path.join(process.cwd(), "public/images/hero"))
  .filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f))
  .map((f) => `/images/hero/${f}`);

async function pickHeroImage() {
  return heroImages[Math.floor(Math.random() * heroImages.length)];
}

const Hero = async () => {
  const src = await pickHeroImage();

    return ( 
    <section className="relative">
      <div className={`${thrashBurn.className} text-6xl`}>
        <h2>NO FEAR!</h2>
        <h2>NO OVERTHINKING!</h2>
        <h2>JUST GO SKATEBOARDING!</h2>
      </div>
      <p>Slam.com — a way for skaters to learn, connect and explore</p>

      <div className="hero-image relative w-full h-[60vh]">
        <Image src={src} alt="Skater mid-trick" fill priority sizes="100vw" className="object-cover" />
      </div>
    </section>
    );
};

export default Hero;