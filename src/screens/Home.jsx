import { supabase } from '../lib/supabase.js'
import PoweredBy from '../components/PoweredBy.jsx'

export default function Home() {
  return (
    <div className="screen">
      <h2>Home</h2>
      <p>Today's summary will appear here.</p>
      <button onClick={() => supabase.auth.signOut()}>Sign out</button>
      <PoweredBy />
    </div>
  )
}
