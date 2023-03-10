
import { getServerSession } from 'next-auth'
import ClientProvider from '../components/ClientProvider'
import Login from '../components/Login'
import { SessionProvider } from '../components/SessionProvider'
import Sidebar from '../components/SideBar'
import { authOptions } from '../pages/api/auth/[...nextauth]'
import '../styles/globals.css'
 
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const session = await getServerSession(authOptions)

  return (
    <html>
      <head />
      <body>
        {/* Session provider */}
       <SessionProvider session={session}>
        {/* ternanry use react->  { value? (component or html) : (same here) }       */}
        {!session ? 
              ( <Login />) : 
              (
              <div className="flex">
              <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
              {/* Sidebar */}
              <Sidebar />
            </div>

            {/* ClientProvider-Notification */}
                <ClientProvider />       {/* it is called here so that if any toast method is called it will be shown in the layout  */ }


            <div className="bg-[#343541] flex-1">
              {children}
              </div>
            </div>
        )}
          </SessionProvider>
        </body>
    </html>
  )
}