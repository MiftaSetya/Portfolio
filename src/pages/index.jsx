import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import HomeSection from "@/components/home-section";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="overflow-x-hidden">
        <HomeSection />
        <AboutSection />
        <ContactSection/>
      </div>
    </div>
  );
}
