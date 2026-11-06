import {useEffect} from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import {scrollReveal} from './util/scrollReveal'
import {initAnalytics} from './util/firebase'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import ProjectDetails from './components/ProjectDetails'
import Footer from './components/Footer'
import {Analytics} from "@vercel/analytics/react";
import {SpeedInsights} from "@vercel/speed-insights/react"
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


window.addEventListener('load', scrollReveal)
window.addEventListener('scroll', scrollReveal)
window.addEventListener('resize', scrollReveal)

function App() {
    const location = useLocation()

    useEffect(() => initAnalytics(), [])

    // Route changes render new images without a load/scroll event, so reveal them here.
    useEffect(() => scrollReveal(), [location])

    return (
        <div className="App container md:max-w-7xl mx-auto">
            <Analytics/>
            <SpeedInsights/>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                draggable
                theme="light"
            />
            <Navbar/>
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/portfolio" element={<Portfolio/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/resume" element={<Resume/>}/>
                    <Route path="/portfolio/:slug" element={<ProjectDetails/>}/>
                </Routes>
            </ScrollToTop>
            <Footer/>
        </div>
    )
}

export default App
