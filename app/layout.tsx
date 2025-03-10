import { Space_Grotesk, Vampiro_One } from "next/font/google";
import "./globals.css";
import { Metadata, Viewport } from "next";
import { Navbar, Footer } from "@/components";

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    display: 'swap',
});

const vampiroOne = Vampiro_One({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
});

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
    icons: {
        icon: '/thumbnail.png',
        shortcut: '/thumbnail.png',
        apple: '/thumbnail.png',
    },
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
        <html lang="en" className={spaceGrotesk.className}>
            <body className="bg-white text-[#111111] selection:bg-[#FF5C35] selection:text-white">
                <Navbar />
                <main className="pt-20">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
} 