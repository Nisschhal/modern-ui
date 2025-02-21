import "./App.css"
import Keyboard from "./components/Keyboard/Keyboard"
import Profile from "./components/Profile/Profile"

function App() {
  return (
    <div className="min-h-dvh flex flex-col border justify-center items-center bg-[#ecf0f3]">
      <Profile />
      <Keyboard />
    </div>
  )
}

export default App
