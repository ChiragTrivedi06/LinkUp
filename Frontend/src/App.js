import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import UpdateProfile from "./components/forms/UpdateProfile";
import Login from "./pages/Login";
import DeleteAccount from "./components/forms/DeleteAccount";
import UpdatePassword from "./components/forms/UpdatePassword";
import Notification from "./pages/Notification";
import FirstView from "./pages/firstView";
import RegisterUpdateForm from "./components/forms/RegisterUpdateForm";
import SignUpForm from "./components/forms/Signup";

export default function App() {
  return (
    <div className="w-screen  min-h-screen bg-[#0A0A0A] text-white ">
      <Header />
      <div className="pt-20">
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/new-user"} element={<FirstView />} />

          
          <Route path={"/chat"} element={<Chat />} />
          <Route path={"/notification"} element={<Notification />} />
          <Route path={"/update-profile"} element={<UpdateProfile />} />
          <Route path={"/auth/signup"} element={<SignUpForm />} />
          <Route path={"/auth/update-password"} element={<UpdatePassword />} />
          <Route path={"/auth/delete-account"} element={<DeleteAccount />} />
          <Route path={"/auth/register"} element={< RegisterUpdateForm/>} />
          <Route path={"/auth/login"} element={<Login />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}
