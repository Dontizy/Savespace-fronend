import { TfiNotepad } from "react-icons/tfi";
import { FaFolderClosed, FaBookBookmark } from "react-icons/fa6";
import { IoIosCloudDone } from "react-icons/io";


const LandingPage = () => {
  return (
    <>
    <section className="hero-page h-screen flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-2 md:w-5xl pt-8">
            <div className="mx-2 px-2 flex flex-col items-center">
                <h3 className="text-[#1E3A8A] text-xl md:text-2xl lg:text-4xl font-bold self-start">Save it. Organize it.
                    Find it. Welcome to
                    <span className="text-[#10B981]">SaveSpace.</span>
                </h3>
                <p className="text-sm md:text-lg text-[#374151] font-normal">your personal hub for notes and bookmarks. Stay
                    organized, save what matters, and find it when you need it.</p>
                <div className="self-start my-2 flex gap-2">
                    <button
                        className="bg-green-600 transition-all duration-300 ease-in hover:bg-green-400  text-white hover:text-black hover:shadow-lg md:px-2 py-2 text-sm px-4 rounded-md">Get
                        Started</button>
                    <button
                        className="bg-blue-600 transition-all duration-300 ease-out hover:bg-blue-400  text-white hover:text-black hover:shadow-lg py-2 text-sm px-4 rounded-md">Learn
                        More</button>
                </div>
            </div>

            <div
                className="image-container mt-4 md:mt-1 flex justify-center h-70 items-center bg-[url(./img/box.png)] bg-center bg-no-repeat bg-cover">

            </div>
        </div>
    </section>


    
    <div className="listing min-h-50 grid md:grid-cols-2 lg:grid-cols-4 gap-4 items-center px-2 md:px-4 py-4 mx-auto">
        <div className="bg-white py-4 px-1 md:py-2 md:max-h-30 md:px-2 md:min-h-30 rounded-md shadow-sm">
            <div className="flex gap-1 px-2 items-center">
                <TfiNotepad  className="size-6 md:size-7 lg:size-10 text-[#10B981]"/>
                <h3 className="text-base md:text-xl lg:text-2xl font-bold text-blue-900">Notes</h3>
            </div>
            <p className="px-2 mt-2 text-sm lg:text-base text-gray-700">Capture thoughts, tasks, and reminders.
            </p>
        </div>

        <div className="bg-white py-4 px-1 md:py-4 md:px-2 md:max-h-30 md:min-h-30 rounded-md shadow-sm">
            <div className="flex gap-1 px-2 items-center">
                <FaFolderClosed className="size-6 md:size-7 lg:size-10 text-[#3B82F6]" />
                <h3 className="text-base md:text-xl lg:text-2xl font-bold text-blue-900">Bookmarks</h3>
            </div>
            <p className="px-2 mt-2 text-sm lg:text-base text-gray-700">Save and categorize your favorite links.
            </p>
        </div>

        <div className="bg-white py-4 px-1 md:py-4 md:px-2 md:max-h-30 md:min-h-30  rounded-md shadow-sm">
            <div className="flex gap-1 px-2 items-center">
                <FaBookBookmark className="size-6 md:size-7 lg:size-10 text-[#F59E0B]"/>
                <h3 className="text-base md:text-xl lg:text-2xl font-bold text-blue-900">Tags & Folders</h3>
            </div>
            <p className="px-2 mt-2 text-sm  lg:text-base text-gray-700">Keep everything neatly organized.</p>
        </div>

        <div className="bg-white py-4 px-1 md:py-4 md:px-2 md:max-h-30 md:min-h-30  rounded-md shadow-sm">
            <div className="flex px-2  items-center">
                <IoIosCloudDone className="size-6 md:size-7 lg:size-10 text-[#6B7280]"/>
                <h3 className="text-base md:text-xl lg:text-2xl font-bold text-blue-900">Cloud Sync</h3>
            </div>
            <p className="mx-2 mt-2 text-sm lg:text-base text-gray-700">Your data, available anywhere.</p>
        </div>
    </div>

    

    <section className="min-h-40 flex flex-col justify-center items-center">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:3xl font-semibold text-blue-900 py-4">Why SaveSpace?</h2>
        <div className="qoutes grid sm:grid-cols md:grid-cols-3 italic gap-2 px-2 text-sm lg:text-base text-gray-800">
            <div className="py-4 px-4 rounded-2xl shadow-lg">
                <blockquote className="text-blue-900 font-semibold">"Save notes instantly"</blockquote>
                <p className="text-gray-700">Never lose an idea.</p>
            </div>

            <div className="py-4 px-4 rounded-2xl shadow-lg">
                <blockquote className="text-blue-900 font-semibold">"Bookmark smarter" </blockquote>
                <p className="text-gray-700">Organize links in one place.</p>
            </div>

            <div className="py-4 px-4 rounded-2xl shadow-lg">
                <blockquote className="text-blue-900 font-semibold">“Access anywhere”</blockquote>
                <p className="text-gray-700">Your space, always with you.</p>
            </div>
        </div>
    </section>

    <div className="testimonial-page  mt-4 py-4 flex flex-col items-center justify-center">
        <div className="px-2 py-2">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-blue-900">What our users say</h2>
            <p className="text-gray-700 pb-4 text-sm md:text-base">SaveSpace helps people stay organized every day.</p>
        </div>

        <div className="grid md:grid-cols-3 text-gray-700 lg:grid-cols-4 gap-2 my-4 items-center">

            <div className="p-6 h-auto rounded-md bg-white shadow-md">
                <div className="img-container">
                    <img src="src/img/anita.jpg" className="w-auto h-auto" alt=""/>
                </div>
                <div className="testimonia-content">
                    <p className="text-gray-700 italic my-4 text-sm lg:text-base">“At work I juggle notes, project links,
                        and reminders. SaveSpace keeps everything tidy and within
                        reach. It’s like having a second brain!”</p>
                    <div className="flex items-center mt-2 gap-3">
                        <div
                            className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
                            A</div>
                        <div className="text-left">
                            <p className="font-semibold text-blue-900">— Anita R., </p>
                            <p className="text-sm text-gray-500">Project Manager 📂</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-6 h-auto bg-white rounded-2xl shadow-md">
                <div className="img-container">
                    <img src="src/img/arm.jpg" className="w-auto h-auto" alt="" />
                </div>
                <div className="testimonia-content">
                    <p className="text-gray-700 italic my-4">“I use SaveSpace daily to save recipes, articles, and random
                        ideas. It’s simple, clean, and I
                        love that I can find things fast.”</p>

                    <div className="flex items-center mt-2 gap-3">
                        <div
                            className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                            J</div>
                        <div className="text-left">
                            <p className="font-semibold text-blue-900">— James O.</p>
                            <p className="text-sm text-gray-500">Everyday User 🌟</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="p-6 h-auto bg-white rounded-2xl shadow-md">
                <div className="img-container">
                    <img src="src/img/anita.jpg" className="w-auto h-auto" alt=""/>
                </div>
                <div className="testimonia-content ">
                    <p className="text-gray-700 italic my-4">As a developer, I’m constantly saving tutorials and docs.
                        SaveSpace makes it so easy to keep all
                        my bookmarks organized and accessible in one place.</p>
                    <div className="flex items-center mt-2 gap-3">
                        <div
                            className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold">
                            J</div>
                        <div className="text-left">
                            <p className="font-semibold text-blue-900">— Daniel K.</p>
                            <p className="text-sm text-gray-500">Frontend Developer 💻</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-6 h-auto bg-white rounded-2xl shadow-md">
                <div className="img-container">
                    <img src="src/img/anita.jpg" className="w-auto h-auto" alt=""/>
                </div>
                <div className="testimonia-content">
                    <p className="text-gray-700 italic my-4">“SaveSpace has completely changed the way I take notes for
                        className. Everything is organized, and I
                        never lose track of my study materials anymore.”</p>
                    <div className="flex items-center mt-2 gap-3">
                        <div
                            className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">
                            J</div>
                        <div className="text-left">
                            <p className="font-semibold text-blue-900">— Sarah M.</p>
                            <p className="text-sm text-gray-500">University Student 🎓</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default LandingPage