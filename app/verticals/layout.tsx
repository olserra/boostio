import { VerticalsNav } from '@/components/VerticalsNav'

export default function VerticalsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <VerticalsNav />
      {children}
    </div>
  )
} 