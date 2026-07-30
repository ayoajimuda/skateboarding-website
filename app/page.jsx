import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { connection } from "next/server";

export default async function Home() {
  await connection();

  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}