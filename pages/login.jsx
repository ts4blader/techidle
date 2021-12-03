import React from "react";
import SigninForm from "../components/SigninForm";
import SignupForm from "../components/SignupForm";
import Image from "../components/Image";
import MyHead from "../components/MyHead";

export default function LoginPage() {
  return (
    <div className="login-page">
      {/* Head */}
      <MyHead title="Login page | TechIdle" />

      <SigninForm />
      <SignupForm />
      <div className="preview hide-on-md">
        <Image src="svg/login.svg" alt="login" />
      </div>
    </div>
  );
}
