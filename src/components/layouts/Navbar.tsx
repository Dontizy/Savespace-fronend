import Logo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <>
            <header className="flex bg-gradient-to-r  to-indigo-600 from-blue-500 h-12 p-6 py-2 text-white bg-gray-300 items-center justify-between">
                <div className="h-10 w-20 flex justify-center items-center">
                    <img className="" width="100" height="100" src={Logo} alt=""/>
                </div>

                <nav className="flex gap-1 items-center">
                    <span className="text-sm"><a href="" className="p-2">Add Note</a></span>
                    <span className="text-sm"><a href="" className="p-2">Add Bookmark</a></span>
                    <span className="text-sm"><a href="" className="p-2">Login</a></span>
                </nav>
            </header>
        </>
    )
}

export default Navbar