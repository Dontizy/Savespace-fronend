import { IoMdAdd } from "react-icons/io";
import { MdOutlineTitle } from "react-icons/md";
import { TiInfoLarge } from "react-icons/ti";
import { useForm, type SubmitHandler} from "react-hook-form";
import {z} from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { useNoteStore } from "./store/noteStore";
import api from "../serviceAxios";
import { useNavigate } from "react-router-dom";
import UseErrorCode from "./hooks/UseErrorCode";






const schema = z.object({
    title:z.string().min(1, "Title is required, field can't be empty!"),
    description:z.string().min(1, "Description is required, field can't be empty!")
})

type noteData = z.infer<typeof schema>;

function AddNote() {
    const {register, handleSubmit, formState:{errors, isValid}}= useForm<noteData>({resolver:zodResolver(schema)})
    const addNote = useNoteStore((state)=>state.addNote)
    const navigate = useNavigate()
    const {getError} = UseErrorCode()

    const onSubmitHandler:SubmitHandler<noteData> =async(data)=>{
        await api.post("/note/create", data).then((res)=>{
            addNote(res.data)
            navigate('/dashboard')
            console.log(res.data)
        }).catch(err=>{
            console.log(err);
            const code = err.status
            const msg = err.response?.data.message
            getError(code, msg)
            
        })
        // console.log(notes)
    }

   

  return (
    <main className="h-screen flex justify-center items-center ">
     <div className="bg-white shadow-2xl rounded-2xl p-6 min-w-50 md:min-w-100">
        <div className="flex items-center justify-between">
            <h3 className="text-gray-800 font-semibold text-lg md:text-3xl">
                Add Note 
            </h3>
            <IoMdAdd className="size-9 font-semibold text-gray-800" />
        </div>
        <div>
            <form className="my-4" onSubmit={handleSubmit(onSubmitHandler)}>
                <div className="flex flex-col gap-1">
                    <label htmlFor="title" className="text-sm md:text-base text-gray-700 font-medium flex items-center">Title <MdOutlineTitle  className="size-5" /></label>
                    <input type="text" {...register("title")} className="border border-gray-300 p-1 focus:border-blue-500 focus:ring focus:ring-blue-200 bg-gray-50 rounded-md placeholder:text-gray-400" name="title" id="title" placeholder="Title"/>
                    {errors.title && <p className="text-red-800 text-sm">{errors.title.message}</p>}
                </div>

                <div className="my-4 flex flex-col gap-1">
                    <label htmlFor="description" className="text-sm text-gray-700 font-medium flex items-center">Description <TiInfoLarge className="size-5" /></label>
                    <textarea  {...register("description")} placeholder="Write description here..." className="w-auto min-h-30 bg-gray-50 text-sm placeholder:text-gray-400 rounded-md border  border-gray-300 p-1 focus:border-blue-500 focus:ring focus:ring-blue-200"></textarea>
                    {errors.description && <p className="text-red-800 text-sm">{errors.description.message}</p>}
                </div>

                <div className="flex justify-between">
                    <button type="submit" disabled={!isValid}  className={`py-2 px-8 ${isValid ? 'bg-blue-600':'bg-blue-400'} transition-all duration-0 ${isValid && 'hover:bg-blue-700'} text-white rounded-lg shadow`}>Save</button>
                    <button className="py-2 px-8 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg">Cancel</button>
                </div>
            </form>
        </div>
     </div>

</main>
  )
}

export default AddNote