import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata, Viewport } from "next";
import { Navbar, Footer } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1.0,
};

export const metadata: Metadata = {
    title: "BoostioAI - AI Solutions for Business Growth",
    description: "Transform your business with AI innovation through consultancy, automation, hackathons, and training programs.",
    keywords: "AI, Automation, LLMs, Agents, Sentiment Analysis, Software Engineering, Web Development, App Development",
    authors: [{ name: "Boostio" }],
    metadataBase: new URL('https://boostio.ai'),
    openGraph: {
        title: "Boostio - AI and Automation Agency",
        description: "Boostio provides a wide range of services including LLMs, Agents, Sentiment Analysis, Automations, and Software Engineering to help businesses achieve their goals.",
        images: [{ url: "/thumbnail.png" }],
        url: "https://boostio.ai",
    },
    twitter: {
        card: "summary_large_image",
        title: "Boostio - AI and Automation Agency",
        description: "Boostio offers services in AI and Automation to help businesses grow and scale using the latest technologies.",
        images: ["/thumbnail.png"],
    },
    alternates: {
        canonical: "https://boostio.ai",
    },
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
} 