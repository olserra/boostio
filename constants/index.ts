import { Service, Testimonial, NavLink, FooterSection, ProcessStep } from '@/types';

export const SERVICES: Service[] = [
    {
        title: "AI Consultancy",
        description: "Strategic guidance to leverage AI for your business growth",
        icon: "🤖"
    },
    {
        title: "Automation Solutions",
        description: "Streamline operations with cutting-edge AI automation",
        icon: "⚡"
    },
    {
        title: "Hackathons",
        description: "Innovative events to solve complex business challenges",
        icon: "🚀"
    },
    {
        title: "Training Programs",
        description: "Empower your team with AI knowledge and skills",
        icon: "📚"
    }
];

export const TESTIMONIALS: Testimonial[] = [
    {
        name: "Sarah Johnson",
        role: "CTO at TechCorp",
        content: "BoostioAI transformed our business with their AI solutions. The results were beyond our expectations.",
        image: "https://i.pravatar.cc/150?img=1"
    },
    {
        name: "Michael Chen",
        role: "Product Manager at InnovateCo",
        content: "Their hackathon event brought fresh perspectives and innovative solutions to our challenges.",
        image: "https://i.pravatar.cc/150?img=12"
    }
];

export const NAV_LINKS: NavLink[] = [
    { name: "Services", href: "/#services" },
    { name: "About", href: "/#about" },
    { name: "Process", href: "/#process" },
    { name: "Case Studies", href: "/#case-studies" },
    { name: "Contact", href: "https://wa.me/351914127195" }
];

export const PROCESS_STEPS: ProcessStep[] = [
    { step: "01", title: "Discovery", desc: "Understanding your needs" },
    { step: "02", title: "Strategy", desc: "Planning the solution" },
    { step: "03", title: "Implementation", desc: "Building the solution" },
    { step: "04", title: "Optimization", desc: "Continuous improvement" }
];

export const FOOTER_SECTIONS: FooterSection[] = [
    {
        title: "Services",
        links: [
            { name: "AI Consultancy", href: "/#services" },
            { name: "Automation Solutions", href: "/#services" },
            { name: "Hackathons", href: "/#services" },
            { name: "Training Programs", href: "/#services" }
        ]
    },
    {
        title: "Company",
        links: [
            { name: "About Us", href: "/#about" },
            { name: "Our Team", href: "/#about" },
            { name: "Case Studies", href: "/#case-studies" },
            { name: "Careers", href: "/careers" }
        ]
    },
    {
        title: "Resources",
        links: [
            { name: "Blog", href: "/blog" },
            { name: "Documentation", href: "/docs" },
            { name: "Support", href: "https://wa.me/351914127195" },
            { name: "FAQ", href: "/faq" }
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", href: "/privacy-policy" },
            { name: "Terms of Service", href: "/terms-of-service" },
            { name: "Cookie Policy", href: "/cookie-policy" },
            { name: "GDPR", href: "/gdpr" }
        ]
    }
]; 