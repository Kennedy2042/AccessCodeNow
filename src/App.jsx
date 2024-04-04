import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './components/landingPage/LandingPage'
import ContactUs from './components/contact_us/ContactUs';
import Blog from './components/blog/Blog';
import AboutUs from './components/about_us/AboutUs';

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/contact_us' element={<ContactUs/>} />
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/about_us' element={<AboutUs/>}/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
