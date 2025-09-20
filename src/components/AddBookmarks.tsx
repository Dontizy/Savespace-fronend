import { SlLink } from "react-icons/sl";
import { FaInfo } from "react-icons/fa6";
import { z } from "zod";
import { useForm, type FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


const schema = z.object({
    name: z.string().min(1, "Name is required, field can't be empty!").trim(),
    url: z.string().min(1, "Enter url link, field can't be empty!").regex(
    /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/,
    "Invalid URL"
  )
})


type bookmarkData = z.infer<typeof schema>

const AddBookmarks = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<bookmarkData>({ resolver: zodResolver(schema) })


    const onSubmitBookmark = (data: FieldValues) => {
        console.log(data);
    }


    return (
        <main className="h-screen flex justify-center items-center">
            <div className="bookmark-container bg-white shadow-2xl rounded-2xl p-6 min-w-50 md:min-w-100">
                <h3 className="text-gray-800 font-semibold text-lg md:text-3xl mb-6">Add Bookmark</h3>
                <form className="my-4" onSubmit={handleSubmit(onSubmitBookmark)}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm md:text-base text-gray-700 font-medium flex items-center"><FaInfo className="size-5" />Url Name</label>
                        <input type="text" {...register("name")} className="border border-gray-300 p-1 focus:border-blue-500 focus:ring focus:ring-blue-200 bg-gray-50 rounded-md placeholder:text-gray-400" placeholder="Link name" />
                        {errors.name && <p className="text-red-800 text-sm">{errors.name.message}</p>}
                    </div>
                    <div className="my-4">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="url" className="ext-sm md:text-base text-gray-700 font-medium flex items-center gap-1"><SlLink className="size-6" /> URL</label>
                            <input {...register("url")} type="text" className="border border-gray-300 p-1 focus:border-blue-500 focus:ring focus:ring-blue-200 bg-gray-50 rounded-md placeholder:text-gray-400" placeholder="Enter Ur Link" />
                            {errors.url && <p className="text-red-800 text-sm">{errors.url.message}</p>}
                        </div>
                    </div>
                    <div className="my-6">
                        <button className="bg-blue-600 hover:bg-blue-700 py-1 px-6 rounded-md text-white transition-all duration-10 ease-in-out">
                            Save
                        </button>
                    </div>
                </form>

            </div>
        </main>
    )
}

export default AddBookmarks