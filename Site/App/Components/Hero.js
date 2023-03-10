const Hero = () => {
    return <>
        <section 
        className="bg-center bg-cover"
        style={{backgroundImage:`url("https://s2.uupload.ir/files/home-bg_lrvr.jpg")`}}
        >
            <div className="max-w-7xl mx-5 md:m-auto px-20">
                <div className="flex flex-col lg:flex-row justify-center items-center pt-28">
                    <div className="basis-full pr-6 lg:basis-2/4">
                        <h1 className="text-3xl font-semibold text-Template-color2 mb-5 leading-10">Encourage innovation with trusted <span class="text-Template-color4">Technology Solutions</span></h1>
                        <p className="text-Template-color1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, magna aliqua. ipsum is simply dummy text of the printing.</p>
                        <div className="flex justify-around mt-8 flex-wrap">
                            <a className="px-10 py-3 text-Template-color3 rounded-full bg-Template-color4" href="#">ContactUs</a>
                            <a className="px-10 py-3 text-Template-color3 rounded-full bg-Template-color4" href="#">Learn More</a>
                        </div>
                    </div>

                    <div className="basis-full lg:basis-2/4 ">
                        <div>
                            <img src="https://barakahit.net/html/Techmax/assets/img/home-font.png" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}
export default Hero