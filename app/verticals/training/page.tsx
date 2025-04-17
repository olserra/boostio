import { Metadata } from 'next'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Training & Workshops | Boostio',
  description: 'Empower your team with AI through our comprehensive training programs and workshops.',
}

export default function TrainingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Training & Workshops</h1>
      
      <div className="grid gap-8">
        {/* Leadership Training */}
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-2xl font-semibold">Leadership Training</h2>
            <Badge variant="secondary">4 weeks</Badge>
          </div>
          <p className="text-muted-foreground mb-4">
            Equip leaders with the knowledge and tools to effectively use AI, tailored to their specific roles, without requiring coding expertise.
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Delivery Method</h3>
              <p className="text-muted-foreground">Flexible options for remote or onsite delivery. Travel and accommodation will be billed separately for onsite sessions.</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Topics Covered</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Introduction to AI and its impact on business</li>
                <li>Use cases of AI in various sectors</li>
                <li>Defining KPIs to measure AI success</li>
                <li>Strategic planning for AI adoption</li>
                <li>Identifying AI opportunities within the company</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Outcome</h3>
              <p className="text-muted-foreground">Leaders will understand AI's strategic value, enabling them to guide AI initiatives within their teams.</p>
            </div>
          </div>
        </Card>

        {/* Employee Training */}
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-2xl font-semibold">Employee Training</h2>
            <Badge variant="secondary">4 weeks</Badge>
          </div>
          <p className="text-muted-foreground mb-4">
            Equip employees with practical AI skills to enhance their daily productivity and workflow efficiency.
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Delivery Method</h3>
              <p className="text-muted-foreground">Flexible options for remote or onsite delivery. Travel and accommodation will be billed separately for onsite sessions.</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Topics Covered</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Basics of AI and machine learning</li>
                <li>AI tools for automation and data analysis</li>
                <li>Workflow improvements through AI</li>
                <li>Hands-on workshops with no-code AI tools</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Outcome</h3>
              <p className="text-muted-foreground">Employees will be equipped to integrate AI tools into their workflows, improving efficiency and outcomes.</p>
            </div>
          </div>
        </Card>

        {/* Hackathon */}
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-2xl font-semibold">AI Hackathon</h2>
            <Badge variant="secondary">3 days</Badge>
          </div>
          <p className="text-muted-foreground mb-4">
            Facilitate a hands-on, in-person event to prototype AI solutions for real business challenges using Lean Startup principles.
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Delivery Method</h3>
              <p className="text-muted-foreground">Onsite (preferred) or remote, with travel costs added for onsite events.</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Program Structure</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Day 1</h4>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>AI fundamentals and Lean Startup methodology (workshops)</li>
                    <li>Ideation and group dynamics</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium">Day 2</h4>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>PoC ideation for real company problems</li>
                    <li>Development of PoCs with support from AI mentors</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium">Day 3</h4>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Presentation of prototypes to leadership</li>
                    <li>Feedback and scalability discussion</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Resources Provided</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>2 resources (1 Product Manager and 1 AI Engineer) for support</li>
                <li>Workshop materials (templates, AI tool licenses, etc.)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Outcome</h3>
              <p className="text-muted-foreground">Employees will gain practical experience with AI and prototype solutions for real challenges.</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
} 