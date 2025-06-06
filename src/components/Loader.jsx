import logo from '/logo.svg'
import '../App.css'

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen min-w-screen animate-fade-in-out">
      <img src={logo} alt="Loading..." className="animate-pulse h-[30vh]" />
    </div>
  )
}

export default Loader