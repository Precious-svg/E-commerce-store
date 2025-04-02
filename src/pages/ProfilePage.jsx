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
        <section className="w-[50%]  border-2 border-black mx-auto  text-black">
            <form className="w-full m-auto flex flex-col justify-between gap-4 p-6" onSubmit={handleSubmit}> 
                <label  htmlFor="fName">Enter your first name:</label>
                <input type="text" id="fName" name="firstName" required value={customerDetails.firstName} onChange={handleInputChange}/>

                <label htmlFor="lName">Enter your last name:</label>
                <input type="text" id="lName" name="lastName" value={customerDetails.lastName} required onChange={handleInputChange}/>

                <label  htmlFor="phoneNum" required>Phone Number:</label>
                <input type="tel" id="phoneNum" name="contactPhoneNum" required value={customerDetails.contactPhoneNum} onChange={handleInputChange}/>

                <input type="email" id="emailAddress" name="contactEmail" placeholder='your email' value={customerDetails.contactEmail} onChange={handleInputChange}/>

                <label  htmlFor="adr">Address</label>
                <input type="text" id="adr" name="contactAddress" placeholder='01, My street DD1 2UU' required value={customerDetails.contactAddress} onChange={handleInputChange}/>

                <div>
                    <input type="radio" id="defaultAdr" name="defaultAddress" checked={customerDetails.defaultAddress} onChange={handleInputChange} />
                    <label htmlFor="defaultAdr">Set as default address</label>
                </div>

                <label htmlFor="deliveryInstructions">Delivery</label>
                <textarea id="deliveryInstructions" name="deliveryInstructions" placeholder='Write any delivery instructions...' 
                value={customerDetails.deliveryInstructions} onChange={handleInputChange}>
                </textarea>

                <button className="border-2 border-black" type="submit">Submit</button>
            </form>
        </section>
    </div>
  )
}

export default ProfilePage