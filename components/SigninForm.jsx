import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "./Button";
import TextInput from "./TextInput";
import AuthSection from "./AuthSection";
import { useStore, ACTION } from "../store/Store";

const schema = yup
  .object({
    email: yup.string().email("This is not a valid email!").required(),
    password: yup.string().min(6, "At least 6 characters!").required(),
  })
  .required();

export default function SigninForm() {
  const [state, dispatch] = useStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  //*   On submit
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="form-wrapper signin" data-signin={state.showSignIn}>
      <div className="signin-form container">
        <div className="title">Login</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            register={register}
            name="email"
            placeholder="Email"
            type="text"
            error={errors.email}
          />
          <TextInput
            register={register}
            name="password"
            type="password"
            placeholder="Password"
            error={errors.password}
          />
          <button type="submit">
            <Button text="Sign in" type="secondary" />
          </button>
        </form>
        <div className="divider"></div>
        <div className="signup-pane">
          <p>
            New to TechIdle,{" "}
            <span
              className="cta"
              onClick={() => dispatch({ type: ACTION.HIDE_SIGNIN })}
            >
              Sign up now!
            </span>
          </p>
          <p>Or sign in with</p>
          <AuthSection />
        </div>
      </div>
    </div>
  );
}
