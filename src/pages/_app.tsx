import Layout from './api/layout'
import { api } from '@/utils/api'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from '@/components/theme-provider'
import '@/styles/globals.css'
import { type Session } from 'next-auth'
import { type AppType } from 'next/app'

const App: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps }
}) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </SessionProvider>
  )
}

export default api.withTRPC(App)
