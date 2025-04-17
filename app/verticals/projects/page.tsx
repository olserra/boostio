import { Metadata } from 'next'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Projects | Boostio',
  description: 'Discover our innovative AI-powered projects and solutions.',
}

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      
      <div className="grid gap-8">
        {/* AI Automations */}
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-2xl font-semibold">AI Automations</h2>
            <Badge variant="secondary">Process Optimization</Badge>
          </div>
          <p className="text-muted-foreground mb-4">
            Identify inefficiencies in current processes and implement AI automations to streamline operations, focusing on cost reduction and improved efficiency.
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Phase 1: Assessment & Discovery</h3>
              <p className="text-muted-foreground mb-2">Duration: 2-3 weeks</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Conduct stakeholder meetings to map current processes</li>
                <li>Identify areas where AI can drive efficiencies</li>
                <li>Deliver comprehensive report with AI opportunities and ROI projections</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Phase 2: AI Implementation</h3>
              <p className="text-muted-foreground mb-2">Duration: 3-5 months</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Select 2-3 high-priority projects</li>
                <li>Develop tailored AI solutions</li>
                <li>Ensure seamless integration into existing systems</li>
                <li>Provide employee training for new tools</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Resources</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>2 FTEs (1 Product Manager, 1 AI Engineer)</li>
                <li>Additional support staff for integration and testing</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* AI-Powered Design Systems */}
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-2xl font-semibold">AI-Powered Design Systems</h2>
            <Badge variant="secondary">Smart UI</Badge>
          </div>
          <p className="text-muted-foreground mb-4">
            Create intelligent design systems that adapt to user behavior and preferences, powered by AI.
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Features</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Dynamic component generation</li>
                <li>Personalized user interfaces</li>
                <li>Automated accessibility testing</li>
                <li>Real-time design optimization</li>
                <li>Cross-platform consistency</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Figma</Badge>
                <Badge variant="outline">Storybook</Badge>
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">Tailwind CSS</Badge>
              </div>
            </div>
          </div>
        </Card>

        {/* Conversational Interfaces */}
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-2xl font-semibold">Conversational Interfaces</h2>
            <Badge variant="secondary">Natural Interaction</Badge>
          </div>
          <p className="text-muted-foreground mb-4">
            Design and implement intuitive conversational interfaces powered by advanced AI.
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Features</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Natural language processing</li>
                <li>Context-aware responses</li>
                <li>Multi-modal interactions</li>
                <li>Emotional intelligence</li>
                <li>Seamless handoff to human agents</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">OpenAI</Badge>
                <Badge variant="outline">LangChain</Badge>
                <Badge variant="outline">WebSocket</Badge>
                <Badge variant="outline">React</Badge>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
} 