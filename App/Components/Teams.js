import Image from 'next/image'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Social from './Root/Social';

const Teams = () => {
    const teams = [1, 2, 3, 4]
    return <>
        <section className='py-10' >
            <h2 className='text-center mb-20 text-3xl font-bold text-Template-color1'>Expert Team Member</h2>
            <div className='max-w-7xl mx-10 sm:px-20'>
                <div className='flex w-full flex-wrap justify-center'>
                    {
                        teams?.map(item => <>
                            <div className='basis-full md:basis-1/2 lg:basis-1/4 px-2' key={item}>
                                <div className='relative w-full h-64 overflow-hidden group rounded-md'>
                                    <Image
                                        src={`https://barakahit.net/html/techmax/assets/img/team/team-${item}.jpg`}
                                        fill
                                        className='transition-all duration-700 group-hover:scale-150'
                                    />
                                    <div className='flex gap-2 justify-center items-center absolute top-0  w-0 h-0 bg-Template-color6 z-1 duration-700 transition-all group group-hover:w-full group-hover:h-full rounded-md'>

                                        <Social><TwitterIcon /></Social>

                                        <Social><LinkedInIcon /></Social>

                                        <Social><YouTubeIcon /></Social>
                                    </div>
                                </div>
                                <div className='text-center py-5'>
                                    <h3 className='text-xl text-Template-color1'>Marc Gibbs</h3>
                                    <p className='transition-all text-Template-color2 hover:text-Template-color4'>
                                        Backend Developer
                                    </p>
                                </div>
                            </div>
                        </>)
                    }

                </div>
            </div>
        </section>
    </>
}
export default Teams