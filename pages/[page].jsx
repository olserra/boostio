import React from "react";
import { useRouter } from "next/router";
import { PrivacyPolicy } from "@/components/PrivacyPolicy";
import { TermsOfService } from "@/components/TermsOfService";
import { Footer, Navbar } from "../components";

const PageContent = {
  "privacy-policy": <PrivacyPolicy />,
  "terms-of-service": <TermsOfService />,
};

const DynamicPage = () => {
  const router = useRouter();
  const { page } = router.query;

  const content = PageContent[page] || (
    <div>Page not found</div>
  );

  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <div title={page}>{content}</div>
      <Footer />
    </div>
  );
};

export default DynamicPage;