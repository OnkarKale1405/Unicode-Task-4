import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import validateRegister from "./ValidateRegister.js";
import axios from "../api/axios.js";
import RootLayout from "../Layouts/RootLayout.js";

const register_url = '/newUser';

export default function Register() {

    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [phone, setPhone] = useState("");
    const [bdate, setBdate] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("Male");

    // for Validation
    const [Register, setRegister] = useState("");
    const [RegisterSuccess, setRegisterSuccess] = useState(false);
    const [errorFullName, setErrorFullName] = useState("");
    const [errorUsername, setErrorUsername] = useState("");
    const [errorMail, setErrorMail] = useState("");
    const [errorPass, setErrorPass] = useState("");
    const [errorConfirmPass, setErrorConfirmPass] = useState("");
    const [errorPhone, setErrorPhone] = useState("");

    // showing password
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);

    let changeFullName = (event) => {
        setFullName(event.target.value);
    }
    let changeUsername = (event) => {
        setUsername(event.target.value);
    }
    let changeMail = (event) => {
        setMail(event.target.value);
    }
    let changePass = (event) => {
        setPass(event.target.value);
    }
    let changeConfirmPass = (event) => {
        setConfirmPass(event.target.value);
    }
    let changePhone = (event) => {
        setPhone(event.target.value);
    }
    let changeBdate = (event) => {
        setBdate(event.target.value);
    }
    let changeGender = (event) => {
        setGender(event.target.value);
    }
    let changeAge = (event) => {
        setAge(event.target.value);
    }

    const history = useNavigate();
    let checkRegister = async (event) => {

        const { errorFullName, errorMail, errorPass, errorConfirmPass, errorPhone } = validateRegister(fullName, mail, pass, confirmPass, phone);

        if (errorFullName || errorMail || errorPass || errorConfirmPass || errorPhone) {
            setErrorFullName(errorFullName);
            setErrorUsername('Enter valid username');
            setErrorMail(errorMail);
            setErrorPass(errorPass);
            setErrorConfirmPass(errorConfirmPass);
            setErrorPhone(errorPhone);
            setRegister("Please fill all the details correctly");
        } else {

            await axios.post(register_url, {
                username: username,
                email: mail,
                password: pass,
                mobile: phone
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                // console.log(response.data);
                console.log(response.accessToken);
                
                setErrorFullName("");
                setErrorMail("");
                setErrorPass("");
                setErrorConfirmPass("");
                setErrorPhone("");
                
                if ( response.data.token ) {
                    setRegisterSuccess(true);
                    setRegister("Registration Successfull ");
                }
                if(RegisterSuccess){
                    history("/Unicode-Task-4/login");
                }
            }).catch(err => {
                setRegister("Registration Failed !!! ") ;
                 
            });
        }
    }

    return (
        <>
            <RootLayout />
            <div id="register-comp" className="h-auto w-3/4 flex md:mt-2 justify-center m-auto p-4 md:border-black sm:border-none bg-[rgba(36, 37, 42,1)] ">
                <form id="registerForm" className="sm:p-24 md:px-24 md:py-12 sm:w-full md:w-1/2 md:border-2 flex flex-col bg-[#24252A] rounded-xl">
                    <h1 className="md:mb-8 text-center font-bold md:text-3xl text-[#e5f0f1]">Register Now</h1>
                    <div className="relative z-0 md:w-full mb-4 group">
                        <input onChange={changeFullName} type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-[#e5f0f1] bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[rgba(0,136,169,1)] peer" placeholder=" " required />
                        <label htmlFor="floating_full_name" className="peer-focus:font-medium absolute md:text-lg sm:text-md text-[#e5f0f1] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#e5f0f1] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full name</label>
                        <p className="text-sm inline-block text-red-400">{errorFullName}</p>
                    </div>
                    <div className="relative z-0 md:w-full mb-4 group">
                        <input onChange={changeUsername} type="text" name="Username" id="floating_Username_name" className="block py-2.5 px-0 w-full text-sm text-[#e5f0f1] bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[rgba(0,136,169,1)] peer" placeholder=" " required />
                        <label htmlFor="floating_username_name" className="peer-focus:font-medium absolute md:text-lg sm:text-md text-[#e5f0f1] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#e5f0f1] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
                        <p className="text-sm inline-block text-red-400">{errorUsername}</p>
                    </div>
                    <div className="relative z-0 w-full mb-4 group">
                        <input onChange={changeMail} type="email" name="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-[#e5f0f1] bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[rgba(0,136,169,1)] peer" placeholder=" " required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute md:text-lg sm:text-md text-[#e5f0f1]  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#e5f0f1] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        <p className="text-sm inline-block text-red-400">{errorMail}</p>
                    </div>
                    <div className="relative z-0 w-full mb-4 group">
                        <div>
                            <input onChange={changePass} type={showPassword ? "text" : "password"} name="password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-[#e5f0f1] bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[rgba(0,136,169,1)] peer" placeholder=" " required />
                            <label htmlFor="floating_password" className="peer-focus:font-medium absolute md:text-lg sm:text-md text-[#e5f0f1] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#e5f0f1] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                            <svg id="first_svg" className="bi bi-eye-fill absolute top-7 right-2 -translate-y-1/2"
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#e5f0f1" viewBox="0 0 16 16" onClick={() => setShowPassword(!showPassword)}>
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                            </svg>
                        </div>
                        <p className="text-sm inline-block text-red-400">{errorPass}</p>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <div>
                            <input onChange={changeConfirmPass} type={showConfirmPass ? "text" : "password"} name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-[#e5f0f1] bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[rgba(0,136,169,1)] peer" placeholder=" " required />
                            <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute md:text-lg sm:text-md text-[#e5f0f1]  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#e5f0f1]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                            <svg id="second_svg" className="bi bi-eye-fill absolute top-7 right-2 -translate-y-1/2"
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#e5f0f1" viewBox="0 0 16 16" onClick={() => setShowConfirmPass(!showConfirmPass)}>
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                            </svg>
                        </div>
                        <p className="text-sm inline-block text-red-400">{errorConfirmPass}</p>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input onChange={changeBdate} type="date" name="floating_dob" id="floating_dob" className="block py-2.5 px-0 w-full text-sm text-[#e5f0f1] bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[rgba(0,136,169,1)] peer" placeholder=" " required />
                        <label htmlFor="floating_dob" className="peer-focus:font-medium absolute md:text-lg sm:text-md text-[#e5f0f1] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#e5f0f1] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Date of birth</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input onChange={changeAge} type="number" name="floating_age" id="floating_age" className="block py-2.5 px-0 w-full text-sm text-[#e5f0f1] bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[rgba(0,136,169,1)] peer" placeholder=" " required />
                        <label htmlFor="floating_age" className="peer-focus:font-medium absolute md:text-lg sm:text-md text-[#e5f0f1]  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#e5f0f1] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Age</label>
                    </div>

                    <label htmlFor="Gender" className="block mb-2 text-xl font-medium text-[#e5f0f1] dark:text-white">Select your gender</label>
                    <select id="gender" value={gender} onChange={changeGender} className="bg-gray-50 border border-[#e5f0f1] text-[#24252A] text-sm rounded-lg focus:ring-[rgba(0,136,169,1)] focus:border-[rgba(0,136,169,1)] block w-full p-2.5">
                        <option value="Male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">other</option>
                    </select>

                    <div className="relative z-0 w-full mb-6 group mt-6">
                        <input onChange={changePhone} type="tel" name="floating_phone" id="floating_phone" className="block  py-2.5 px-0 w-full text-sm text-[#e5f0f1] bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[rgba(0,136,169,1)] peer" placeholder=" " required />
                        <label htmlFor="floating_phone" className="peer-focus:font-medium absolute md:text-lg sm:text-md text-[#e5f0f1] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#e5f0f1] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
                        <p className="text-sm inline-block text-red-400">{errorPhone}</p>
                    </div>

                    <button onClick={checkRegister} type="button" className="text-white bg-[rgba(0,136,169,1)] hover:bg-[rgba(0,136,169,0.8)] focus:ring-4 focus:outline-none focus:ring-[rgba(0,136,169,0.8)] font-medium rounded-lg text-sm md:w-full sm:w-auto px-5 py-2.5 text-center">Sign UP</button>

                    <div className={`mt-5 flex items-center w-full p-4 rounded-lg border border-gray-700 shadow text-white ${RegisterSuccess ? "bg-green-800" : "bg-red-800"} ${Register ? "visible" : "invisible"}`} role="alert">
                        <div className="text-md sm:w-full font-medium text-center">
                            {Register}
                        </div>
                    </div>

                    <div className="text-center mt-12 mb-6">
                        <p className="text-[#e5f0f1]">Already a user ? <Link to="/Unicode-Task-4/login" className="uppercase text-blue-400">Login In</Link></p>
                    </div>
                </form >
            </div>
        </>
    )
}