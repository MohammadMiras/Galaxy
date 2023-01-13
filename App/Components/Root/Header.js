import { useEffect } from 'react';
import Scroll from './Scroll'

const Header = () => {
    useEffect(()=>{
        Scroll.watchScroll()
    },[])
    return <>
        <section className='scroll'>
            <div className="fixed top-0 w-full py-5 z-20" in="bg-transparent" out="bg-Template-color3">
                <div className="flex justify-between items-center max-w-7xl mx-10 px-20" >
                    <p> Template </p>
                    <ul className="flex justify-center">
                        <li className="p-2">Home</li>
                        <li className="p-2">Blog</li>
                        <li className="p-2">About</li>
                        <li className="p-2">ContactUs</li>
                    </ul>

                    <div className="flex">
                        <div className="relative px-3 py-2 rounded-2xl shadow-lg text-white bg-Template-color4 mr-2  z-10 after:transition-all after:duration-300 after:w-0 hover:after:w-full after:absolute overflow-hidden after:h-full after:top-0 after:left-0 after:bg-Template-color5 after:-z-10 after:opacity-90 cursor-pointer">
                            login
                        </div>

                        <div className="relative px-3 py-2 rounded-2xl shadow-lg text-white bg-Template-color4 z-10 after:transition-all after:duration-300 after:w-0 hover:after:w-full after:absolute overflow-hidden after:h-full after:top-0 after:left-0 after:bg-Template-color5 after:-z-10 after:opacity-90 cursor-pointer">
                            Singin
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}
export default Header