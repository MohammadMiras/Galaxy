import Image from "next/image"
import Link from "next/link"

const Blog = () => {
    const posts = [1, 2, 3]
    return <>
        <section className="bg-Template-color3 hidden">
            <div className="max-w-7xl mx-5 md:m-auto px-20  py-16">
                <h2 className="text-center text-Template-color2 text-4xl">
                    Blog and News
                </h2>
                <div className="flex flex-wrap justify-center items-center my-10">
                    {
                        posts?.map(post => <>
                            <div key={post} className="basis-1 md:basis-1/2 lg:basis-1/3 px-2 text-center">
                                <div className="w-full h-64 relative overflow-hidden rounded-md group">
                                    <Image
                                    src={`https://barakahit.net/html/techmax/assets/img/blog/blog-${post}.jpg`}
                                        fill
                                        className='transition-all duration-700 group-hover:scale-110' />
                                </div>
                                <div className="px-5 py-2 text-center">
                                    <h3 className="text-lg">
                                        The 17 Most Misunderstood Facts About Technology
                                    </h3>
                                    <p className="my-5 text-sm text-Template-color1">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt
                                    </p>
                                </div>
                                <Link
                                    href="#"
                                    className="relative px-4 py-3 rounded-xl shadow-lg bg-Template-color4 text-Template-color3 transition-all duration-300 hover:bg-Template-color5"
                                >
                                    Continue Reading
                                </Link>
                            </div>
                        </>)
                    }
                </div>
            </div>
        </section>
    </>
}
export default Blog