import { Metadata } from 'next'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Engineering Services | Boostio',
  description: 'Transform your business with our cutting-edge AI engineering solutions.',
}

export default function EngineeringPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Engineering Services</h1>
      
      <div className="grid gap-8">
        {/* Software Engineering */}
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-2xl font-semibold">AI Software Engineering</h2>
            <Badge variant="secondary">Custom Solutions</Badge>
          </div>
          <p className="text-muted-foreground mb-4">
            Build robust, scalable AI applications with our expert software engineering team.
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Services</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Custom AI application development</li>
                <li>Integration of AI models into existing systems</li>
                <li>API development and management</li>
                <li>Real-time data processing systems</li>
                <li>AI-powered automation solutions</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Python</Badge>
                <Badge variant="outline">TensorFlow</Badge>
                <Badge variant="outline">PyTorch</Badge>
                <Badge variant="outline">Node.js</Badge>
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">TypeScript</Badge>
              </div>
            </div>
          </div>
        </Card>

        {/* UI/UX Engineering */}
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-2xl font-semibold">AI-Powered UI/UX</h2>
            <Badge variant="secondary">Intelligent Design</Badge>
          </div>
          <p className="text-muted-foreground mb-4">
            Create intuitive, AI-enhanced user experiences that adapt to user behavior and preferences.
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Services</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>AI-driven user interface design</li>
                <li>Personalized user experiences</li>
                <li>Predictive UI components</li>
                <li>Accessibility optimization</li>
                <li>User behavior analytics</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Figma</Badge>
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">Next.js</Badge>
                <Badge variant="outline">Tailwind CSS</Badge>
                <Badge variant="outline">Framer Motion</Badge>
              </div>
            </div>
          </div>
        </Card>

        {/* Infrastructure & Cloud */}
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-2xl font-semibold">AI Infrastructure & Cloud</h2>
            <Badge variant="secondary">Scalable Solutions</Badge>
          </div>
          <p className="text-muted-foreground mb-4">
            Deploy and scale your AI solutions with our robust infrastructure and cloud services.
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Services</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Cloud infrastructure setup and management</li>
                <li>AI model deployment and scaling</li>
                <li>Data pipeline architecture</li>
                <li>Security and compliance implementation</li>
                <li>Performance optimization</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">AWS</Badge>
                <Badge variant="outline">GCP</Badge>
                <Badge variant="outline">Azure</Badge>
                <Badge variant="outline">Kubernetes</Badge>
                <Badge variant="outline">Docker</Badge>
                <Badge variant="outline">Terraform</Badge>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
} 