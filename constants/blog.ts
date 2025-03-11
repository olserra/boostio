import { BlogPost } from '@/types/types';

export const BLOG_POSTS: BlogPost[] = [
    {
        id: '1',
        title: 'AI Consulting: Transforming Businesses with Artificial Intelligence',
        excerpt: 'Discover how AI consulting services can revolutionize your business operations and drive innovation.',
        date: 'March 21, 2024',
        category: 'AI Consulting',
        image: '/blog/ai-consulting-hero.jpg',
        tags: ['AI', 'Consulting', 'Innovation'],
        readingTime: '5 min',
        content: {
            introduction: 'Artificial Intelligence is no longer a futuristic concept – it\'s a present-day business imperative. As we navigate through 2024, organizations worldwide are recognizing that AI isn\'t just an option; it\'s a necessity for maintaining competitiveness and driving innovation.',
            sections: [
                {
                    title: 'Why AI Consulting Matters Now More Than Ever',
                    content: 'The rapid advancement of AI technologies has created a significant knowledge gap in many organizations. While the potential of AI is vast, implementing it effectively requires expertise, strategy, and a deep understanding of both business processes and technological capabilities.'
                },
                {
                    title: 'Key Areas Where AI Consulting Makes a Difference',
                    subsections: [
                        {
                            title: 'Strategic Implementation',
                            items: [
                                'Assessment of AI readiness',
                                'Custom AI roadmap development',
                                'Risk management and compliance'
                            ]
                        },
                        {
                            title: 'Process Optimization',
                            items: [
                                'Workflow automation opportunities',
                                'Data infrastructure evaluation',
                                'Integration planning'
                            ]
                        },
                        {
                            title: 'ROI Maximization',
                            items: [
                                'Cost-benefit analysis',
                                'Performance metrics development',
                                'Implementation prioritization'
                            ]
                        }
                    ]
                },
                {
                    title: 'Real-World Impact',
                    content: 'Our clients have seen remarkable results through AI consulting:',
                    items: [
                        '40% reduction in operational costs',
                        '60% improvement in customer response times',
                        '25% increase in revenue through AI-driven insights'
                    ]
                },
                {
                    title: 'Getting Started with AI Consulting',
                    content: 'The journey to AI transformation starts with understanding your current position and where you want to go. At Boostio, we help businesses bridge this gap through:',
                    items: [
                        'Comprehensive AI readiness assessments',
                        'Custom implementation strategies',
                        'Ongoing support and optimization'
                    ]
                },
                {
                    title: 'Looking Ahead',
                    content: 'As AI continues to evolve, staying ahead of the curve becomes increasingly crucial. Working with AI consultants helps ensure your business doesn\'t just keep pace with change – it leads it.'
                }
            ]
        }
    },
    {
        id: '2',
        title: 'The Power of Automation in Modern Business',
        excerpt: 'Learn how automation can streamline your workflows and boost productivity across your organization.',
        date: 'March 18, 2024',
        category: 'Automation',
        image: '/blog/automation-hero.jpg',
        tags: ['Automation', 'Productivity', 'Technology'],
        readingTime: '4 min',
        content: {
            introduction: 'In today\'s fast-paced business environment, automation has emerged as a key driver of efficiency, productivity, and competitive advantage. From simple task automation to complex workflow orchestration, businesses are discovering new ways to optimize their operations.',
            sections: [
                {
                    title: 'The Power of Intelligent Automation',
                    content: 'Modern automation goes far beyond simple rule-based processes. With the integration of AI and machine learning, automation systems can now:',
                    items: [
                        'Adapt to changing conditions',
                        'Learn from past experiences',
                        'Make intelligent decisions',
                        'Handle complex, unstructured data'
                    ]
                },
                {
                    title: 'Key Benefits of Business Automation',
                    subsections: [
                        {
                            title: 'Enhanced Productivity',
                            items: [
                                'Reduction in manual tasks',
                                'Faster process completion',
                                '24/7 operation capability',
                                'Elimination of human error'
                            ]
                        },
                        {
                            title: 'Cost Efficiency',
                            items: [
                                'Lower operational costs',
                                'Reduced resource requirements',
                                'Better resource allocation',
                                'Improved ROI'
                            ]
                        }
                    ]
                }
            ]
        }
    }
];

export const BLOG_CATEGORIES = ['All', 'AI Consulting', 'Automation', 'Development', 'Training']; 