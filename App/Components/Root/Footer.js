const Footer = () => {
    return <>
        <footer
            className='relative w-full py-16 text-Template-color3 bg-center bg-cover z-10 after:-z-10 after:absolute after:w-full after:h-full after:top-0 after:bg-Template-color4 after:opacity-50'
            style={{ backgroundImage: `url("https://barakahit.net/html/techmax/assets/img/banner-bg.jpg")` }}
        >
            <div className="max-w-7xl mx-10 ms:px-20">
                <div className="flex flex-wrap">
                    <div className="basis-full sm:basis-2/6 px-3">
                        <div className="mb-4 border-b-[1px] border-Template-color3">
                            <h2 className="text-xl font-extrabold pb-2">About Us</h2>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco consectetur laboris
                        </p>
                    </div>
                    <div className="basis-full sm:basis-1/6 px-3">
                        <div className="mb-4 border-b-[1px] border-Template-color3">
                            <h2 className="text-xl font-extrabold pb-2">
                                Our Servcies
                            </h2>
                        </div>
                        <ul className="[&_li]:my-5">
                            <li className="hover:text-Template-color5 cursor-pointer">It Soultion</li>
                            <li className="hover:text-Template-color5 cursor-pointer">Web Site</li>
                            <li className="hover:text-Template-color5 cursor-pointer">Backend</li>
                            <li className="hover:text-Template-color5 cursor-pointer">Seo</li>
                        </ul>
                    </div>
                    <div className="basis-full sm:basis-1/6 px-3">
                        <div className="mb-4 border-b-[1px] border-Template-color3">
                            <h2 className="text-xl font-extrabold pb-2">
                                Quick Accsess
                            </h2>
                        </div>
                        <ul className="[&_li]:my-5">
                            <li className="hover:text-Template-color5 cursor-pointer">About Us</li>
                            <li className="hover:text-Template-color5 cursor-pointer">Blog</li>
                            <li className="hover:text-Template-color5 cursor-pointer">Contact Us</li>
                            <li className="hover:text-Template-color5 cursor-pointer">Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="basis-full sm:basis-2/6 px-3">
                        <div className="mb-4 border-b-[1px] border-Template-color3">
                            <h2 className="text-xl font-extrabold pb-2">
                                Contact Information
                            </h2>
                        </div>
                        <ul className="[&_li]:my-5">
                            <li className="flex flex-wrap hover:text-Template-color5 cursor-pointer ">
                                <span className="font-bold">
                                    Email:
                                </span>
                                TemplateEmail@Gmail.com
                            </li>
                            <li className="flex flex-wrap hover:text-Template-color5 cursor-pointer">
                                <span className="font-bold">
                                    Phone:
                                </span>
                                +986969596
                            </li>
                            <li className="flex flex-wrap hover:text-Template-color5 cursor-pointer">
                                <span className="font-bold">
                                    Address:
                                </span>
                                4035 Heavens, Los Angeles, California
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </>
}
export default Footer