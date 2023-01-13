import Counter from "../Components/Counter"
import Features from "../Components/Features"
import Hero from "../Components/Hero"
import Overview from "../Components/Overview"
import Services from "../Components/Services"
import Teams from "../Components/Teams"

const Home = () => {
    return <>
        <Hero />
        <Services />
        <Overview />
        <Features />
        <Counter />
        <Teams />
    </>
}

export default Home