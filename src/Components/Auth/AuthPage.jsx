import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TbPhone } from "react-icons/tb";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, googleProvider } from "../../../firebase-config";
import { db } from "../../../firebase-config";
import { toast } from "react-toastify";

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmResult, setConfirmResult] = useState(null);
  const [showPhoneLogin, setShowPhoneLogin] = useState(false);
  const [role, setRole] = useState("client");
  const navigate = useNavigate();

  const handleEmailAuth = async () => {
    try {
      if (isSignUp) {
        const result = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = result.user;

        // Save user with role to Firestore
        await setDoc(doc(db, "users", user.uid), {
          email,
          role,
        });

        toast.success("Sign Up Success");
      } else {
        const result = await signInWithEmailAndPassword(auth, email, password);
        const user = result.user;

        if (user) {
          const token = await user.getIdToken();
          const userDoc = await getDoc(doc(db, "users", user.uid));
          const userRole = userDoc.exists() ? userDoc.data().role : "client";

          // Save to localStorage
          localStorage.setItem("token", token);
          // localStorage.setItem("uid", user.uid);
          // localStorage.setItem("email", user.email);
          localStorage.setItem("role", userRole);

          toast.success("Login Success");

          // Redirect based on role
          navigate(userRole === "admin" ? "/admin" : "/");
        }
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      const token = await user.getIdToken();
      const userDoc = await getDoc(doc(db, "users", user.uid));

      if (!userDoc.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          name: user.displayName,
          role: "client",
        });
      }

      const roleData = (await getDoc(doc(db, "users", user.uid))).data().role;

      localStorage.setItem("token", token);
      
      localStorage.setItem("role", roleData);

      toast.success("Google Login Success");

      navigate(roleData === "admin" ? "/admin/dashboard" : "/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const setUpRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: () => {},
          "expired-callback": () => {},
        }
      );
    }
  };

  const handlePhoneLogin = async () => {
    try {
      setUpRecaptcha();
      const appVerifier = window.recaptchaVerifier;
      const confirmation = await signInWithPhoneNumber(
        auth,
        phone,
        appVerifier
      );
      setConfirmResult(confirmation);
      toast.success("OTP Sent");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const verifyOtp = async () => {
    try {
      const result = await confirmResult.confirm(otp);
      const user = result.user;

      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (!userDoc.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          phone,
          role,
        });
      }

      const userRole = (await getDoc(doc(db, "users", user.uid))).data().role;

      const token = await user.getIdToken();
      localStorage.setItem("token", token);
      localStorage.setItem("role", userRole);

      toast.success("Phone Login Success");
      navigate(userRole === "admin" ? "/admin/dashboard" : "/");
    } catch (err) {
      toast.error("Invalid OTP");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          {isSignUp ? "Create Account" : "Welcome Back"}
        </h2>

        <div className="flex gap-2 justify-center">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center gap-1 border px-4 py-2 rounded-md hover:shadow"
          >
            <img
              src="/logo/icons8-google-48.png"
              alt="Google"
              className="h-5 w-5"
            />
            <span className="text-sm">Sign in with Google</span>
          </button>
          <button
            onClick={() => setShowPhoneLogin(true)}
            className="flex items-center gap-1 border px-4 py-2 rounded-md hover:shadow"
          >
            <TbPhone className="h-5 w-5" />
            <span className="text-sm">Sign in with Phone</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-px flex-1 bg-gray-300" />
          <span className="text-sm text-gray-400">or</span>
          <div className="h-px flex-1 bg-gray-300" />
        </div>

        {showPhoneLogin ? (
          <>
            <form action={handlePhoneLogin} className="">
              <PhoneInput
              className="gap-5"
  country={'in'}
  value={phone}
  onChange={(phone) => setPhone("+" + phone)}
  inputStyle={{
    width: "100%",
    
    borderRadius: "6px",
    border: "1px solid #ccc",
    margin:"5px"
  }}
  inputProps={{
    name: 'phone',
    required: true,
    autoFocus: true
  }}
/>

              <button className="w-full bg-green-600 text-white py-2 rounded-md mt-3  ">
                Send OTP
              </button>
            </form>
            {confirmResult && (
              <>
                <form action={verifyOtp}>
                  <input
                    type="password"
                    placeholder="Enter OTP"
                    className="w-full px-4 py-2 border rounded-md"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                  <button className="w-full bg-purple-600 text-white py-2 rounded-md mt-3">
                    Verify OTP
                  </button>
                </form>
              </>
            )}
            <div id="recaptcha-container"></div>
            <p className="text-center text-sm mt-2">
              Want to login with Email?{" "}
              <button
                onClick={() => setShowPhoneLogin(false)}
                className="text-blue-600 hover:underline"
              >
                Use Email instead
              </button>
            </p>
          </>
        ) : (
          <>
            <form action={handleEmailAuth}>
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-2 border rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-md mt-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="w-full bg-blue-600 text-white py-2 rounded-md mt-3">
                {isSignUp ? "Sign Up with Email" : "Login with Email"}
              </button>
            </form>
            <p className="text-center text-sm mt-4">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-blue-600 hover:underline"
              >
                {isSignUp ? "Sign In" : "Sign Up"}
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
