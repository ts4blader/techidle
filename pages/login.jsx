import React from "react";
import SigninForm from "../components/SigninForm";
import SignupForm from "../components/SignupForm";
import Image from "../components/Image";

export default function LoginPage() {
  return (
    <div className="login-page">
      <SigninForm />
      <SignupForm />
      <div className="preview hide-on-md">
        <Image src="svg/login.svg" alt="login" />
      </div>
    </div>
  );
}
