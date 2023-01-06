const Header = () => {
    return <>
        <section>
            <div className="flex justify-around w-full items-center py-5 fixed top-0">
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
        </section>
    </>
}
export default Header