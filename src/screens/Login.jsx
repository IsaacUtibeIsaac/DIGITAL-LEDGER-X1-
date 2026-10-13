import { supabase } from '../lib/supabase.js'
import PoweredBy from '../components/PoweredBy.jsx'

export default function Login() {
  async function signIn() {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin }
    })
  }

  return (
    <div className="screen">
      <h2>Digital Ledger</h2>
      <p>Sign in to continue.</p>
      <button onClick={signIn}>Sign in with your Google account</button>
      <PoweredBy />
    </div>
  )
}
