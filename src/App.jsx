import { useState, useEffect } from 'react'
import { supabase, supabaseReady } from './lib/supabase.js'
import BottomNav from './components/BottomNav.jsx'
import Login from './screens/Login.jsx'
import Home from './screens/Home.jsx'
import Sell from './screens/Sell.jsx'
import Stock from './screens/Stock.jsx'
import Reports from './screens/Reports.jsx'

const screens = { Home, Sell, Stock, Reports }

export default function App() {
  const [tab, setTab] = useState('Home')
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!supabaseReady) { setLoading(false); return }
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
      setLoading(false)
    })
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s))
    return () => sub.subscription.unsubscribe()
  }, [])

  if (!supabaseReady) {
    return <div className="screen"><h2>Setup needed</h2><p>The Supabase keys are missing in Vercel.</p></div>
  }
  if (loading) return <div className="screen">Loading...</div>
  if (!session) return <Login />

  const Screen = screens[tab]
  return (
    <>
      <Screen />
      <BottomNav tab={tab} setTab={setTab} names={Object.keys(screens)} />
    </>
  )
}
