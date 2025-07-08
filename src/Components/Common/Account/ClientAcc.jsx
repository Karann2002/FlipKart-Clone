import React from "react";
import img from "../../../../public/logo/myProfileFooter_4e9fe2.png"

export default function AccountSettings() {
  return (
    <div className="bg-white shadow-xl  min-h-screen  ml-5 mb-5 mr-20 ">
      <main className="flex-1 p-8 bg-white  ">
        <h2 className="text-xl font-semibold mb-6">Personal Information <button className="text-blue-600 text-sm">Edit</button></h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input type="text" placeholder="First Name" className="border p-2 rounded w-full" />
          <input type="text" placeholder="Last Name" className="border p-2 rounded w-full" />
        </div>

        <div className="mb-6">
          <p className="text-sm  mb-2">Your Gender</p>
          <label className="mr-4">
            <input type="radio" name="gender" className="mr-1" /> Male
          </label>
          <label>
            <input type="radio" name="gender" className="mr-1" /> Female
          </label>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold mb-1">Email Address <button className="text-blue-600 text-sm ml-2">Edit</button></h3>
          <input type="email" placeholder="your@email.com" className="border p-2 rounded w-full" />
        </div>

        <div className="mb-6">
          <h3 className="font-semibold mb-1">Mobile Number <button className="text-blue-600 text-sm ml-2">Edit</button></h3>
          <input type="text" placeholder="Enter Mobile Number" className="border p-2 rounded w-full bg-gray-100" />
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-semibold mb-2">FAQs</h3>
          <p className="font-medium text-sm mb-3">What happens when I update my email address (or mobile number)?</p>
          <p className="text-sm mb-3">Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).</p>
          <p  className="font-medium text-sm mb-3">When will my Flipkart account be updated with the new email address (or mobile number)?</p>
          <p className="text-sm mb-3">It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.</p>



          <p className="font-medium text-sm mb-3">What happens to my existing Flipkart account when I update my email address (or mobile number)?</p>
          <p className="text-sm mb-3">Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.</p>


          <p className="font-medium text-sm mb-3">Does my Seller account get affected when I update my email address?
</p>
<p className="text-sm mb-3">Flipkart has a 'single sign-on' policy. Any changes will reflect in your Seller account also.</p>
        </div>
        <div className="flex flex-col w-50 mt-10 gap-5">
          <div>
          <button className="font-semibold text-blue-500">Deactivate Account</button></div>
          <div>
          <button className="font-semibold text-red-600">Delete Account</button></div>
         
        </div>
        <div>
           
        </div>
        
      </main>
      <img src={img} alt="" className="w-full object-cover"/>
    </div>
  );
}
