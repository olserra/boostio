import { Metadata } from 'next'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Social Media | Boostio',
  description: 'Transform your social media presence with AI-powered content and strategy.',
}

export default function SocialMediaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Social Media Services</h1>
      
      <div className="grid gap-8">
        {/* Content Creation */}
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-2xl font-semibold">AI-Powered Content Creation</h2>
            <Badge variant="secondary">Smart Content</Badge>
          </div>
          <p className="text-muted-foreground mb-4">
            Create engaging, platform-optimized content that resonates with your audience using AI.
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Services</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Automated content generation</li>
                <li>Platform-specific optimization</li>
                <li>Visual content creation</li>
                <li>Hashtag research and optimization</li>
                <li>Content calendar management</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Platforms</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">LinkedIn</Badge>
                <Badge variant="outline">Twitter</Badge>
                <Badge variant="outline">Instagram</Badge>
                <Badge variant="outline">Facebook</Badge>
                <Badge variant="outline">TikTok</Badge>
              </div>
            </div>
          </div>
        </Card>

        {/* Analytics & Strategy */}
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-2xl font-semibold">AI Analytics & Strategy</h2>
            <Badge variant="secondary">Data-Driven</Badge>
          </div>
          <p className="text-muted-foreground mb-4">
            Leverage AI to analyze performance and optimize your social media strategy.
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Features</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Real-time performance tracking</li>
                <li>Audience behavior analysis</li>
                <li>Competitor analysis</li>
                <li>Trend prediction</li>
                <li>ROI measurement</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Tools</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Custom Analytics</Badge>
                <Badge variant="outline">Predictive Models</Badge>
                <Badge variant="outline">A/B Testing</Badge>
                <Badge variant="outline">Sentiment Analysis</Badge>
              </div>
            </div>
          </div>
        </Card>

        {/* Community Management */}
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-2xl font-semibold">AI Community Management</h2>
            <Badge variant="secondary">Smart Engagement</Badge>
          </div>
          <p className="text-muted-foreground mb-4">
            Enhance community engagement with AI-powered tools and automation.
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Features</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Automated response management</li>
                <li>Sentiment analysis</li>
                <li>Community growth strategies</li>
                <li>Crisis management support</li>
                <li>Influencer identification</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">NLP</Badge>
                <Badge variant="outline">Chatbots</Badge>
                <Badge variant="outline">Automation</Badge>
                <Badge variant="outline">Analytics</Badge>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
} 