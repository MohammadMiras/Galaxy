import Link from 'next/link'

const About = () => {
    return <>
        <section
            className='w-full py-16 text-center text-Template-color3 bg-center bg-cover'
            style={{ backgroundImage: `url("https://barakahit.net/html/techmax/assets/img/banner-bg.jpg")` }}>
            <h2 className='text-4xl font-bold'>What do you know About us ?</h2>
            <p className='my-10 mx-auto max-w-4xl'>
                We are a programming team consisting of the best programmers the country
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud consectetur
            </p>
            <Link
                href={"/"}
                className='px-5 py-3 rounded-lg bg-Template-color3 text-Template-color4 transition-all duration-700 hover:text-Template-color3 hover:bg-Template-color4'
            >
                Read More
            </Link>

        </section>
    </>
}
export default About