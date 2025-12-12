import React from "react";
import img from "/logo/myProfileFooter_4e9fe2.png"
import { useState,useEffect } from "react";
import { useAuth } from "../../Auth/useAuth";
// import { auth } from "../../../../firebase-config";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "../../../../firebase-config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export default function AccountSettings() {
const {user} = useAuth();
  const [profile, setProfile] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [isEditingPersonal, setIsEditingPersonal] = useState(false);

const [formData, setFormData] = useState(null);
  const navigate = useNavigate();
console.log(user);


   const handleSave = async () => {
    if (!formData?.id) return;

    const docRef = doc(db, "users", formData.id);
    const updatedData = { ...formData };

    // optionally strip fields like image arrays if needed
    try {
      await updateDoc(docRef, updatedData);
      
      toast.success("Profile updated!")
      // alert("Profile updated!");

      setIsEditingPersonal(false);
      setProfile([updatedData]);
    } catch (err) {
      console.error("Error updating profile:", err);
      toast.error("Failed to update profile.")
      // alert("Failed to update profile.");
    }
  };

  useEffect(() => {
    const fetchData = async () => {

      try {
        setLoading(false);

        const querySnapshot = await getDocs(
          collection(db, "users")
        );

        const allContacts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const filteredContacts = allContacts.filter(
          (item) => item?.id === user.uid
        );

        setProfile(filteredContacts);
        if (filteredContacts.length > 0) {
          setFormData({ ...filteredContacts[0] });
        }
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
   const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
<div className="bg-white shadow-xl  min-h-screen  ml-5 mb-5 mr-20 ">

  {profile.length === 0 ? (
    <div>No data available</div>
  ) : (
    profile.map((item, index) => (
      <div
        key={index}
        className="bg-white  m-5 p-4  rounded w-full min-h-[90vh]"
      >
        <main className="flex-grow">
         
          <div className="p-4 mb-6 bg-white   rounded">
            <div className="flex  items-center mb-4">
              <h2 className="text-lg font-semibold">Personal Information</h2>
              <div>
                {!isEditingPersonal ? (
                  <button
                    className="text-blue-600 text-sm"
                    onClick={() => setIsEditingPersonal(true)}
                  >
                    Edit
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button
                      className="bg-green-600 text-white px-3 py-1 rounded text-sm"
                      onClick={handleSave}
                    >
                      Save
                    </button>
                    <button
                      className="bg-gray-500 text-white px-3 py-1 rounded text-sm"
                      onClick={() => {
                        setIsEditingPersonal(false);
                        setFormData({ ...profile[0] });
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium">First Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData?.name || ""}
                  onChange={handleChange}
                  disabled={!isEditingPersonal}
                  placeholder="First Name"
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Last Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData?.name || ""}
                  onChange={handleChange}
                  disabled={!isEditingPersonal}
                  placeholder="Last Name"
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              
            </div>

            {/* Gender */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">Gender</label>
              <div>
                {!isEditingPersonal ? (
                  <button
                    className="text-blue-600 text-sm"
                    onClick={() => setIsEditingPersonal(true)}
                  >
                    Edit
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button
                      className="bg-green-600 text-white px-3 py-1 rounded text-sm"
                      onClick={handleSave}
                    >
                      Save
                    </button>
                    <button
                      className="bg-gray-500 text-white px-3 py-1 rounded text-sm"
                      onClick={() => {
                        setIsEditingPersonal(false);
                        setFormData({ ...profile[0] });
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    className="form-radio"
                    name="gender"
                    value="Male"
                    checked={formData?.gender === "Male"}
                    onChange={handleChange}
                    disabled={!isEditingPersonal}
                  />
                  Male
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    className="form-radio"
                    name="gender"
                    value="Female"
                    checked={formData?.gender === "Female"}
                    onChange={handleChange}
                    disabled={!isEditingPersonal}
                  />
                  Female
                </label>
              </div>
            </div>

            {/* DOB */}
            <div className="mb-4">

              <label className="block text-sm font-medium mb-1">Date of Birth</label>
              <div>
                {!isEditingPersonal ? (
                  <button
                    className="text-blue-600 text-sm"
                    onClick={() => setIsEditingPersonal(true)}
                  >
                    Edit
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button
                      className="bg-green-600 text-white px-3 py-1 rounded text-sm"
                      onClick={handleSave}
                    >
                      Save
                    </button>
                    <button
                      className="bg-gray-500 text-white px-3 py-1 rounded text-sm"
                      onClick={() => {
                        setIsEditingPersonal(false);
                        setFormData({ ...profile[0] });
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
              <input
                type="text"
                name="dob"
                value={
                  formData?.dob
                    ? new Date(formData?.dob).toLocaleDateString("en-GB")
                    : ""
                }
                onChange={handleChange}
                disabled={!isEditingPersonal}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <div>
                {!isEditingPersonal ? (
                  <button
                    className="text-blue-600 text-sm"
                    onClick={() => setIsEditingPersonal(true)}
                  >
                    Edit
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button
                      className="bg-green-600 text-white px-3 py-1 rounded text-sm"
                      onClick={handleSave}
                    >
                      Save
                    </button>
                    <button
                      className="bg-gray-500 text-white px-3 py-1 rounded text-sm"
                      onClick={() => {
                        setIsEditingPersonal(false);
                        setFormData({ ...profile[0] });
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
              <input
                type="email"
                name="email"
                value={formData?.email || ""}
                onChange={handleChange}
                disabled={!isEditingPersonal}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="your@email.com"
              />
            </div>

            {/* Mobile */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Mobile Number</label>
              <div>
                {!isEditingPersonal ? (
                  <button
                    className="text-blue-600 text-sm"
                    onClick={() => setIsEditingPersonal(true)}
                  >
                    Edit
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button
                      className="bg-green-600 text-white px-3 py-1 rounded text-sm"
                      onClick={handleSave}
                    >
                      Save
                    </button>
                    <button
                      className="bg-gray-500 text-white px-3 py-1 rounded text-sm"
                      onClick={() => {
                        setIsEditingPersonal(false);
                        setFormData({ ...profile[0] });
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
              <input
                type="phone"
                name="mobilno"
                value={formData?.mobilno || ""}
                onChange={handleChange}
                disabled={!isEditingPersonal}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="Enter Mobile Number"
              />
            </div>
            <div className="mt-10">
          <h3 className="text-lg font-semibold mb-2">FAQs</h3>
          <p className="font-medium text-sm mb-3">What happens when I update my email address (or mobile number)?</p>
          <p className="text-sm mb-3">Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).</p>
          <p  className="font-medium text-sm mb-3">When will my ShopEasy account be updated with the new email address (or mobile number)?</p>
          <p className="text-sm mb-3">It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.</p>



          <p className="font-medium text-sm mb-3">What happens to my existing ShopEasy account when I update my email address (or mobile number)?</p>
          <p className="text-sm mb-3">Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.</p>


          <p className="font-medium text-sm mb-3">Does my Seller account get affected when I update my email address?
</p>
<p className="text-sm mb-3">ShopEasy has a 'single sign-on' policy. Any changes will reflect in your Seller account also.</p>
        </div>
        <div className="flex flex-col w-50 mt-10 gap-5">
          <div>
          <button className="font-semibold text-blue-500">Deactivate Account</button></div>
          <div>
          <button className="font-semibold text-red-600">Delete Account</button></div>
         
        </div>
          </div>
        </main>
    <img src={img} alt="" className="w-full object-cover"/>
        
      </div>
      
    ))
  )}
  
  
</div>



  );
}
