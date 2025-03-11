import { Service, Testimonial, NavLink, FooterSection, ProcessStep, CaseStudy } from '@/types';

export const studies: CaseStudy[] = [
    {
        title: "Digital Lab Integration",
        client: "Roche",
        description: "Seamless integration between CIDM and eLN Signals, plus a custom bulk upload solution for scientific data management",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=900&q=80",
        color: "from-[#FF5C35] to-[#FF8B6C]",
        stats: ["40% faster data upload", "2.5x ROI", "Enhanced UX"]
    },
    {
        title: "AI-Powered Knowledge Platform",
        client: "Amyris",
        description: "Revolutionary AI agents and RAG system for process optimization, integrated with Shopify ecommerce and custom React/Python stack",
        image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=900&q=80",
        color: "from-[#4C6FFF] to-[#84A1FF]",
        stats: ["60% cost reduction", "8 weeks delivery", "AI-driven insights"]
    },
    {
        title: "Healthcare Scheduling Platform",
        client: "Feegow",
        description: "Advanced medical appointment scheduling system with AI-powered patient flow optimization",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=900&q=80",
        color: "from-[#00E6C3] to-[#4DFFD9]",
        stats: ["3x faster scheduling", "95% patient satisfaction", "50% less no-shows"]
    }
];

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