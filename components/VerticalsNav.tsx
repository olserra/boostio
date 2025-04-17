"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const verticals = [
  {
    name: 'Projects',
    href: '/verticals/projects',
    description: 'AI-powered UI/UX solutions',
  },
  {
    name: 'Engineering',
    href: '/verticals/engineering',
    description: 'Software, UI/UX, and infrastructure services',
  },
  {
    name: 'Training & Workshops',
    href: '/verticals/training',
    description: 'AI training programs and workshops',
  },
  {
    name: 'Social Media',
    href: '/verticals/social-media',
    description: 'AI-powered social media services',
  },
]

export function VerticalsNav() {
  const pathname = usePathname()

  return (
    <nav className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {verticals.map((vertical) => (
          <Link
            key={vertical.href}
            href={vertical.href}
            className={cn(
              "group rounded-lg border p-6 transition-colors hover:border-primary",
              pathname === vertical.href ? "border-primary bg-primary text-white" : "border-muted"
            )}
          >
            <h3 className="text-lg font-semibold mb-2">{vertical.name}</h3>
            <p className={cn(
              "text-sm",
              pathname === vertical.href ? "text-white/90" : "text-muted-foreground"
            )}>{vertical.description}</p>
          </Link>
        ))}
      </div>
    </nav>
  )
} 