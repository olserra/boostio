import React from "react";
import { useRouter } from "next/router";
import { PrivacyPolicy } from "@/components/PrivacyPolicy";
import { TermsOfService } from "@/components/TermsOfService";

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
        <div title={page}>{content}</div>
    );
};

export default DynamicPage;