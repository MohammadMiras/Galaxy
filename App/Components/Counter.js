import { useRef } from 'react'
import NumberCount from './NumberCount'
import useOnScreen from '../Hooks/useOnScreen'
const Counter = () => {
    const ref = useRef(null)
    const onScreen = useOnScreen(ref, '0px')
    return <>
        <section>
            <div
                style={{ backgroundImage: `url("https://barakahit.net/html/techmax/assets/img/banner-bg.jpg")` }}
                ref={ref}
                className="w-full bg-cover bg-center py-20 bg-fixed">
                <div className="flex sm:flex-row flex-col justify-center max-w-7xl m-autp sm:px-20 gap-5 sm:gap-0">
                    <div className="basis-full md:basis-1/4 px-5 text-white text-center ">
                        <NumberCount item={500} onScreen={onScreen}/>
                        <h3 className="text-xl">Company Project</h3>
                    </div>
                    <div className="basis-full md:basis-1/4 px-5 text-white text-center ">
                        <NumberCount item={100} onScreen={onScreen}/>
                        <h3 className="text-xl">Company Project</h3>
                    </div>
                    <div className="md:basis-1/4 px-5 text-white  text-center" >
                        <NumberCount item={90} onScreen={onScreen}/>
                        <h3 className="text-xl">Company Project</h3>
                    </div>
                    <div className="basis-full md:basis-1/4 px-5 text-white text-center ">
                        <NumberCount item={450} onScreen={onScreen}/>
                        <h3 className="text-xl">Company Project</h3>
                    </div>
                </div>
            </div>
        </section>
    </>
}
export default Counter