import React from 'react';
import { useLocation } from 'react-router-dom';

const ContactPage = () => {
    const location = useLocation();
    const {customerDetails} = location.state || {};
  return (
    <div>
        <section>
            <h1>Contact Details</h1>
            <div>
              <p><strong>First Name:</strong> {customerDetails?.firstName}</p>
              <p><strong>Last Name:</strong> {customerDetails?.lastName}</p>
              <p><strong>Email:</strong> {customerDetails?.contactEmail}</p>
              <p><strong>Phone Number:</strong> {customerDetails?.contactPhoneNum}</p>
              <p><strong>Address:</strong> {customerDetails?.contactAddress}</p>
              <p><strong>Default Address:</strong> {customerDetails?.defaultAddress ? "Yes" : "No"}</p>
              <p><strong>Delivery Instructions:</strong> {customerDetails?.deliveryInstructions}</p>
            </div>
        </section>
      
    </div>
  )
}

export default ContactPage