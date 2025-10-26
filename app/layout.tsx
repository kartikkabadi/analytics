import './globals.css'
import { Sidebar } from '../components/Sidebar'
import { Toaster } from 'react-hot-toast'

export const metadata = {
  title: 'Analytics Dashboard | Whop App',
  description: 'Advanced analytics dashboard for Whop applications',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-gray-900">
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 overflow-auto">
            <div className="container mx-auto px-6 py-8">
              {children}
            </div>
          </main>
        </div>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            className: 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white',
          }}
        />
      </body>
    </html>
  )
}
