import {useEffect, useRef} from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import PreFooter from '../components/PreFooter'
import PastProjects from '../components/PastProjects'
import {logEvent} from "firebase/analytics";
import {analytics} from "../config/FirebaseConfig";

const Home = () => {
    const targetElem = useRef();
    useEffect(() => logEvent(analytics, 'landing_home'), [analytics]);

    const scrollIntoView = () => {
        const elmnt: any = targetElem
        elmnt.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "start"
        })
    }

    return (
        <div className="flex flex-col divide-y dark:divide-gray-600">
            <Hero scrollToAbout={scrollIntoView}/>
            <About ref={targetElem}/>
            <Experience/>
            <PastProjects/>
            <PreFooter/>
        </div>
    )
}

export default Home