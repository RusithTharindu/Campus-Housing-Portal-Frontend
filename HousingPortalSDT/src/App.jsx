import 'tailwindcss/tailwind.css';
import Login from './pages/Login';
import Register from './pages/Register';
import AcceptBtn from './components/AcceptBtn'
import RejectBtn from './components/RejectBtn'

function App() {
  return(
    <>
      <div className='bg-black h-[100vh] w-[100vw] flex items-center justify-center'>
        <AcceptBtn/>
        <RejectBtn/>
      </div>
    </>
  )
}

export default App
