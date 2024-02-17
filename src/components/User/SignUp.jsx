import { useState } from "react";
import Logo from "../../assets/images/signup.svg"
import { Link, useNavigate } from "react-router-dom";
import {UserSignUpRequest} from "../../API/apiRequiest"
import {IsEmail,IsEmpty,ErrorToast,SuccessToast} from "../../helper/FormHelper"
import SubmitButton from "../common/SubmitButton";
const SignUp = () => {
    const navigate = useNavigate();
    const [BtnLoader, SetBtnLoader] = useState(false);
    const [formData,setFormData] = useState({
      fullName: "",
      phoneNumber: "",
      password: "",
    });
  
    const changeHandeler = (property,value) => {
        setFormData({
        ...formData, [property]:value
      });
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        // input validation
        let { fullName, phoneNumber, password } = formData;
        if (IsEmpty(fullName)) {
          return ErrorToast("Full Name is Required");
        } else if (IsEmpty(phoneNumber)) {
          return ErrorToast("Email is Required");
        } else if (password.length === 0) {
          return ErrorToast("Password is Required");
        } else {
          SetBtnLoader(true);
          const res = await UserSignUpRequest(fullName,phoneNumber,password);
          SetBtnLoader(false);
          if (res) {
            SuccessToast("Account Create Success")
            navigate("/login");
          }
        }
      };
    return (
        <div className='container py-5'>
            <div className="row">
                <div className="col-12 col-md-6">
                    <img src={Logo} width={400} alt="" />
                </div>
                <div className="col-12 col-md-6">
                    <h5 className='pb-2'>Create an account</h5>

                    <div>
                        <div className='pb-2'>
                            <label>Full Name</label>
                            <input type="text" onChange={(e)=>changeHandeler("fullName",e.target.value)} className='form-control'/>
                        </div>
                        <div className='pb-2'>
                            <label>Phone Number</label>
                            <input type="text" onChange={(e)=>changeHandeler("phoneNumber",e.target.value)} className='form-control'/>
                        </div>
                        <div className='pb-2'>
                            <label>Password</label>
                            <input type="password" onChange={(e)=>changeHandeler("password",e.target.value)} className='form-control'/>
                        </div>
                        <div className='py-4'>
                            <SubmitButton submit={BtnLoader} onClick={onSubmit} className='btn btn-dark w-100' text="Register"/>
                        </div>
                        <div>
                          <span>Already have an account <Link className="btn text-primary" to="/login">Login</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;