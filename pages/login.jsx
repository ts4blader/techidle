import React from "react";
import SigninForm from "../components/SigninForm";
import Image from "../components/Image";

export default function LoginPage() {
  return (
    <div className="login-page">
      <SigninForm />
      <Image src="svg/login.svg" alt="login" />
    </div>
  );
}
