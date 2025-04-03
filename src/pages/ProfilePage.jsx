import React from 'react'
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate} from "react-router-dom"

const ProfilePage = () => {
    const [customerDetails, setCustomerDetails] = useState({
        firstName: "",
        lastName: "",
        contactEmail: "",
        contactPhoneNum: "",
        contactAddress: "",
        defaultAddress: false,
        deliveryInstructions: ""
    })
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();

        navigate("/contact", { state: { customerDetails } });
        console.log("form submitted with details", customerDetails)
    }
    const handleInputChange = (e) => {
        const {name, type, value, checked} = e.target
        setCustomerDetails((prevDetails) => ({
            ...prevDetails, [name]: type === "radio" ? checked : value,
        }))
        
    }

    
  return (
    <div>
        <section className="w-[50%]  border-2 border-black mx-auto  text-black bg-cyan-100 rounded-md">
            <form className="w-full m-auto flex flex-col justify-between gap-4 p-8" onSubmit={handleSubmit}> 
                <div className="flex flex-row w-full justify-center items-center">
                    <div className="w-[50%] flex flex-col gap-4">
                        <label className="text-sky-950 font-bold" htmlFor="fName">Enter your first name:</label>
                        <input type="text" id="fName" name="firstName" className='bg-white rounded-md  p-4 w-[95%]' required value={customerDetails.firstName} onChange={handleInputChange}/>
                    </div>
                    <div className="w-[50%]  flex flex-col gap-4">
                        <label className="pl-4 text-sky-950 font-bold" htmlFor="lName">Enter your last name:</label>
                        <input type="text" id="lName" name="lastName" className='bg-white rounded-md mx-4 p-4 w-[95%]'  value={customerDetails.lastName} required onChange={handleInputChange}/>
                    </div>
                </div>

                <div className="flex flex-row w-full justify-center items-center">
                    <div  className="w-[50%] flex flex-col gap-4">
                        <label  htmlFor="phoneNum" required className='text-sky-950 font-bold'>Phone Number:</label>
                        <input type="tel" id="phoneNum" name="contactPhoneNum" className='bg-white rounded-md p-4 w-[95%]' required value={customerDetails.contactPhoneNum} onChange={handleInputChange}/>
                    </div>
                    <div  className="w-[50%] flex flex-col gap-4">
                        <label  htmlFor="emailAddress" className="pl-4 text-sky-950 font-bold" required>Email:</label>
                        <input type="email" id="emailAddress" name="contactEmail" className='bg-white rounded-md mx-4 p-4 w-[95%]' placeholder='your email' value={customerDetails.contactEmail} onChange={handleInputChange}/>
                    </div>
                </div>

                <label  htmlFor="adr" className="text-sky-950 font-bold">Address</label>
                <input type="text" id="adr" name="contactAddress" className='bg-white w-full mx-auto px-4 py-6 rounded-md' placeholder='01, My street DD1 2UU' required value={customerDetails.contactAddress} onChange={handleInputChange}/>

                <div>
                    <input type="radio" id="defaultAdr" name="defaultAddress" checked={customerDetails.defaultAddress} onChange={handleInputChange} />
                    <label htmlFor="defaultAdr" className="mx-2 text-sky-950 font-bold">Set as default address</label>
                </div>

                <label htmlFor="deliveryInstructions" className='font-bold text-sky-950 '>Delivery</label>
                <textarea id="deliveryInstructions" name="deliveryInstructions" className='bg-white w-full mx-auto px-4 py-6 rounded-md' placeholder='Write any delivery instructions...' 
                value={customerDetails.deliveryInstructions} onChange={handleInputChange}>
                </textarea>

                <button className="border-2 border-black w-[110px] h-[50px] my-2 text-lg text-center text-white bg-sky-950" type="submit">Submit</button>
            </form>
        </section>
    </div>
  )
}

export default ProfilePage