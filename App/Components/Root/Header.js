const Header = () => {
    return <>
        <section>
            <div className="fixed top-0 w-full py-5 z-20">
                <div className="flex justify-between items-center max-w-7xl mx-10 px-20">
                    <p> Template </p>
                    <ul className="flex justify-center">
                        <li className="p-2">Home</li>
                        <li className="p-2">Blog</li>
                        <li className="p-2">About</li>
                        <li className="p-2">ContactUs</li>
                    </ul>

                    <div className="flex">
                        <div className="px-3 py-2 rounded-2xl shadow-lg text-white bg-violet-600 mr-2">login</div>
                        <div className="px-3 py-2 rounded-2xl shadow-lg text-white bg-violet-600">Singin</div>
                    </div>
                </div>
            </div>
        </section>
    </>
}
export default Header