 import CommonForm from "@/components/common/form";
// import { useToast } from "@/components/ui/use-toast";
import { registerFormControls } from "@/config";
// import { registerUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";



const initialState ={
  userName : "",
  email : "",
  password:"",
}
const dispatch=useDispatch;
const navigate=useNavigate;  

function AuthRegister() {
  const [formData,setFormData]=useState(initialState)
  const onSubmit=(e)=>{
    e.preventDefault()
    // dispatch(registerUser(formData)).then(()=>)
   

  }
  return (
    <div className="mx-auto w-full max-w-md space-y-6">
    <div className="text-center">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        Create new account
      </h1>
      <p className="mt-2">
        Already have an account
        <Link
          className="font-medium ml-2 text-primary hover:underline"
          to="/auth/login"
        >
          Login
        </Link>
      </p>
    </div>
    <CommonForm
      formControls={registerFormControls}
      buttonText={"Sign Up"}
      formData={formData}
      setFormData={setFormData}
      onSubmit={onSubmit}
    />
  </div>
  )
}

export default AuthRegister