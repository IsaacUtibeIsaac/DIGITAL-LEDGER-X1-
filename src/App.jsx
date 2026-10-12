import { useState } from 'react'
import BottomNav from './components/BottomNav.jsx'
import Home from './screens/Home.jsx'
import Sell from './screens/Sell.jsx'
import Stock from './screens/Stock.jsx'
import Reports from './screens/Reports.jsx'

const screens = { Home, Sell, Stock, Reports }

export default function App() {
  const [tab, setTab] = useState('Home')
  const Screen = screens[tab]
  return (
    <>
      <Screen />
      <BottomNav tab={tab} setTab={setTab} names={Object.keys(screens)} />
    </>
  )
}
