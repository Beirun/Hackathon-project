import {Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import Events from './pages/Events'
import EventsInfo from './pages/EventsInfo'
import Organizations from './pages/Organizations'
import Organization from './pages/Organization'
import '@fontsource/poppins/100-italic.css';
import '@fontsource/poppins/200-italic.css';
import '@fontsource/poppins/300-italic.css';
import '@fontsource/poppins/400-italic.css';
import '@fontsource/poppins/500-italic.css';
import '@fontsource/poppins/600-italic.css';
import '@fontsource/poppins/700-italic.css';
import '@fontsource/poppins/800-italic.css';
import '@fontsource/poppins/900-italic.css';
import YourOrganization from './pages/YourOrganization'
function App() {

  return (
    <>
     <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Landing/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/events/:id' element={<EventsInfo/>}/>
      <Route path='/organizations' element={<Organizations/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/your-organization' element={<YourOrganization/>}/>
      <Route path='/your-organization/:id' element={<Organization/>}/>
     </Routes>
    </>
  )
}

export default App
