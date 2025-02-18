import {Link} from 'react-scroll'
import { useNavigate } from 'react-router-dom'

const LandingNavbar = () => {   
    const navigate = useNavigate()
  return (
    <div className='flex justify-between absolute w-screen h-20 items-center px-10'>
        <div>CommUnity</div>
        <div className='flex flex-row gap-10'>
            <Link to='projects' smooth={true} duration={500}>
            <button>Projects</button>
            </Link>
            <Link to='partners' smooth={true} duration={500}> 
            <button>Partners</button>
            </Link>
            <Link to='about' smooth={true} duration={500}>
            <button>About Us</button>
            </Link>
            <button onClick={() => {navigate("/login")}}>LOGIN</button>
        </div>
    </div>
  )
}

export default LandingNavbar