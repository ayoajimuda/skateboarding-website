import Image from 'next/image';
import fs from "node:fs";
import path from "node:path";
import { thrashBurn } from "@/app/fonts";
import React from 'react';
import '../styles/hero.css';

export const dynamic = "force-dynamic";

const heroImages = fs
  .readdirSync(path.join(process.cwd(), "public/images/hero"))
  .filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f))
  .map((f) => `/images/hero/${f}`);

function pickHeroImage() {
  return heroImages[Math.floor(Math.random() * heroImages.length)];
}

const Hero = () => {
  const src = pickHeroImage();

  return (
    <section className="hero">
      <div className="hero-copy">
        <div className={`${thrashBurn.className} hero-shout`}>
          <h2>No Fear!</h2>
          <h2>No Overthinking!</h2>
          <h2>
            <span className="line">Just go </span>
            <span className="line">Skateboarding!</span>
          </h2>
        </div>

        <p className="hero-strap">
          Slam.com — a way for skaters to learn, connect and explore
        </p>
      </div>

      <div className="hero-image">
        <Image
          src={src}
          alt="Skater mid-trick"
          fill
          priority
          sizes="(max-width: 820px) 100vw, 56vw"
        />
      </div>
    </section>
  );
};

export default Hero;