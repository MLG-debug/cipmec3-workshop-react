import { Navbar } from './components/Navbar'
import { Pomodoro } from './components/Pomodoro'

export const App: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <Pomodoro/>
    </div>
  )
}
