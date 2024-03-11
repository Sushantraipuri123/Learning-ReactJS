
import { useForm } from "react-hook-form"
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm()


  const delay =(d)=>{
    return new Promise((resolve , reject)=>{
      setTimeout(() => {
        resolve()
      }, d*1000);
    })
  }
  const onSubmit = async (data) => {
    await delay(3) // delayed due to network connection 
    console.log(data)
  }

  return (
    <>

    <h1 className="mt-2  mb-5 text-2xl font-mono font-semibold text-white  italic">Handling form using "React-Hook-Form"</h1>
    {isSubmitting && <div> Submitting...</div>}
    {isSubmitSuccessful && <div> Submitted </div>}
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div>
        <input placeholder="Username"
        className=" rounded-2xl px-3 py-1"
        type="text"  {...register("username" , {required:{value:true , message:"this Field is required"} , minLength:{value:3 , message:"minimum 3 characters required"} , maxLength:{value:8 , message:"maximum 8  characters"}} )}/>
        {errors.username && <span className=" text-red-600  text-sm"> {errors.username.message} </span>}
       
       
        <input placeholder="Password"
        className=" rounded-2xl px-3  ms-3 py-1"
        type="password"  {...register("password", {required:{value:true, message:"This fiels is required"}, minLength:{value:4, message:"Minimum 4 characters"}, maxLength:{value:8, message:"Maiximum 8 characters"}})}
        
        />
         {errors.password && <span className=" text-red-600  text-sm"> {errors.password.message} </span>}
        </div>
        <div>
        <input disabled={isSubmitting} type="submit" value="Submit"
        className=" bg-slate-500 mt-2 px-3 py-2 rounded-full"
        />
        </div>
      </form>
    </>
  )
}

export default App
