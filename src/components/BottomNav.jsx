export default function BottomNav({ tab, setTab, names }) {
  return (
    <nav>
      {names.map(n => (
        <button key={n} className={n === tab ? 'active' : ''} onClick={() => setTab(n)}>
          {n}
        </button>
      ))}
    </nav>
  )
}
