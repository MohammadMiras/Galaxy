import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import TimelineIcon from '@mui/icons-material/Timeline';;
import { useEffect } from 'react';
import Scroll from './Root/Scroll'

const Services = () => {
    useEffect(() => {
        Scroll.watchScroll()
    }, [])
    return <>
        <section>
            <div className="max-w-7xl mx-10 px-20 py-20 ">
                <div className="grid grid-cols-3 gap-3">
                    <div className="py-9 px-7 shadow-xl rounded-2xl text-center transition-all duration-500 hover:translate-y-2 hover:bg-gradient-to-r hover:from-Template-color4 hover:to-Template-color5 hover:text-Template-color3 group" in="opacity-1" out="opacity-0">
                        <div className='flex justify-center items-center w-20 h-20 bg-Template-color3 rounded-full mx-auto my-5'>
                            <ElectricBoltIcon className='text-Template-color4 text-3xl font-iransans' />
                        </div>
                        <h2 className='mb-5'>Web Developer</h2>
                        <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua</p>
                        <a className='text-Template-color4 group-hover:text-white' href="#">Read Me</a>
                    </div>
                    <div className="py-9 px-7 shadow-xl rounded-2xl text-center transition-all duration-500 hover:translate-y-2 hover:bg-gradient-to-r hover:from-Template-color4 hover:to-Template-color5 hover:text-Template-color3 group" in="opacity-1" out="opacity-0">
                        <div className='flex justify-center items-center w-20 h-20 bg-Template-color3 rounded-full mx-auto my-5'>
                            <FlashOnIcon className='text-Template-color4 text-3xl font-iransans' />
                        </div>
                        <h2 className='mb-5'>Web Developer</h2>
                        <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua</p>
                        <a className='text-Template-color4 group-hover:text-white' href="#">Read Me</a>
                    </div>
                    <div className="py-9 px-7 shadow-xl rounded-2xl text-center transition-all duration-500 hover:translate-y-2 hover:bg-gradient-to-r hover:from-Template-color4 hover:to-Template-color5 hover:text-Template-color3 group" in="opacity-1" out="opacity-0">
                        <div className='flex justify-center items-center w-20 h-20 bg-Template-color3 rounded-full mx-auto my-5'>
                            <TimelineIcon className='text-Template-color4 text-3xl font-iransans' />
                        </div>
                        <h2 className='mb-5'>Web Developer</h2>
                        <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua</p>
                        <a className='text-Template-color4 group-hover:text-white' href="#">Read Me</a>
                    </div>

                </div>
            </div>
        </section>
    </>
}
export default Services