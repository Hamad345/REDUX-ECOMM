import CommonForm from "@/components/common/form";
// import { useToast } from "@/components/ui/use-toast";
import { loginFormControls } from "@/config";
import { loginUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";



const initialState ={
  userName : "",
  email : "",
  password:"",
}

function AuthLogin() {
  const [formData,setFormData]=useState(initialState)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function onSubmit(event) {
    event.preventDefault();
    
    dispatch(loginUser(formData)).then((data) => console.log(data))}
  return (
    <div className="mx-auto w-full max-w-md space-y-6">
    <div className="text-center">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
       Sign in to your account
      </h1>
      <p className="mt-2">
        Don't have an account
        <Link
          className="font-medium ml-2 text-primary hover:underline"
          to="/auth/register"
        >
          Login
        </Link>
      </p>
    </div>
    <CommonForm
      formControls={loginFormControls}
      buttonText={"Sign In"}
      formData={formData}
      setFormData={setFormData}
      onSubmit={onSubmit}
    />
  </div>
  )
}

export default AuthLogin