import logo from './assets/imgLogos/logo.png'

function App() {
  return (
    <header className="flex h-28 items-center justify-center border-b border-neutral-800">
      <a href="/">
        <img src={logo} alt="Crunna Diner" className="h-20" />
      </a>
    </header>
  )
}

export default App
