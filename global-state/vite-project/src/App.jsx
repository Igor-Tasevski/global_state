import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeContext } from './store/ThemeProvider'

function App() {
  const [count, setCount] = useState(0)

  const { theme, toggleTheme } = useContext(ThemeContext)
  console.log(theme)

  return (
    <div style={{
      backgroundColor: `${theme === "light" ? "white" : "black"}`,
      width: "100%",
      height: "100vh",
    }}
    >

      <div class="container">
        <div class="center">
          <button className="hero" onClick={() => toggleTheme()} >{theme} </button>
        </div>
      </div>





    </div>

  )
}

export default App
