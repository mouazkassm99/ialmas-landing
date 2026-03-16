import StickyBar from "@/components/sections/StickyBar";
import Hero from "@/components/sections/Hero";
import TrustSnapshot from "@/components/sections/TrustSnapshot";
import Solutions from "@/components/sections/Solutions";
import Vendors from "@/components/sections/Vendors";
import WhyContact from "@/components/sections/WhyContact";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <StickyBar />
      <main>
        <Hero />
        <TrustSnapshot />
        <Solutions />
        <Vendors />
        <WhyContact />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
