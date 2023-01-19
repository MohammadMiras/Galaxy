import Image from "next/image"
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Teams = () => {
    const teams = [1, 2, 3, 4]
    return <>
        <section className="py-10" >
            <h2 className="text-center mb-20 text-3xl font-bold text-Template-color1">Expert Team Member</h2>
            <div className="max-w-7xl mx-10 px-20">
                <div className="flex w-full gap-5">
                    {
                        teams?.map(item => <>
                            <div className="basis-1/2 lg:basis-1/4" key={item}>
                                <div className="relative w-full h-64 overflow-hidden group rounded-md">
                                    <Image
                                        src={"https://barakahit.net/html/techmax/assets/img/team/team-4.jpg"}
                                        fill
                                        className="transition-all duration-700 group-hover:scale-150"
                                    />
                                    <div className="flex gap-2 justify-center items-center absolute top-0  w-0 h-0 bg-Template-color6 z-30 duration-700 transition-all group group-hover:w-full group-hover:h-full rounded-md">
                                        <div className="p-1 rounded-md bg-white text-Template-color5 transition-all duration-700 opacity-0 group-hover:opacity-100"><TwitterIcon /></div>
                                        <div className="p-1 rounded-md bg-white text-Template-color5 transition-all duration-700 opacity-0 group-hover:opacity-100"><LinkedInIcon /></div>
                                        <div className="p-1 rounded-md bg-white text-Template-color5 transition-all opacity-0 group-hover:duration-700 group-hover:opacity-100"><YouTubeIcon /></div>
                                    </div>
                                </div>
                                <div className="text-center py-5">
                                    <h3 className="text-xl text-Template-color1">Marc Gibbs</h3>
                                    <p className="transition-all text-Template-color2 hover:text-Template-color4">Backend Developer</p>
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