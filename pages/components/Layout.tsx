import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <Link href="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link href="/dashboard">Dashboard</Link>
      </nav>
      <main style={{ padding: '1rem' }}>
        {children}
      </main>
    </div>
  )
}
