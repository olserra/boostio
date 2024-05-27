import { Contact } from "@/components/Contact";
import { Footer, Navbar } from "../components";
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from "../sections";

const Page = () => (
  <div className="overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <WhatsNew />
    </div>
    <World />
    <div className="relative">
      <Insights />
      <Feedback />
    </div>
    <div className="relative">
      <Contact />
    </div>
    <Footer />
  </div>
);

export default Page;
