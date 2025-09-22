// import Image from "next/image";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";

export default function Home() {
  return (
    <div className="w-full h-full overflow-hidden">
    <Nav/>
    <Header/>
    <SectionOne/>
    <SectionTwo/>
    <SectionThree/>
    <SectionFour/>
    <SectionFive/>
    <Footer/>
    </div>
  );
}
