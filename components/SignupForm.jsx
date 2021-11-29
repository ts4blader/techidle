import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "./Button";
import TextInput from "./TextInput";
import { useStore, ACTION } from "../store/Store";

const schema = yup
  .object({
    email: yup.string().email("This is not a valid email!").required(),
    displayName: yup.string().required("Display name is required!"),
    password: yup.string().min(6, "At least 6 characters!").required(),
    rePassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password must match"),
  })
  .required();

export default function SignupForm() {
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

  const [state, dispatch] = useStore();

  return (
    <div className="form-wrapper signup" data-signin={state.showSignIn}>
      <div className="signup-form container">
        <div className="title">Sign up</div>
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
            name="displayName"
            placeholder="Display Name"
            type="text"
            error={errors.displayName}
          />
          <TextInput
            register={register}
            name="password"
            type="password"
            placeholder="Password"
            error={errors.password}
          />
          <TextInput
            register={register}
            name="rePassword"
            type="password"
            placeholder="Type Password Again"
            error={errors.rePassword}
          />

          <button type="submit">
            <Button text="Sign up" type="secondary" />
          </button>
        </form>

        <div className="divider"></div>
        <p>
          Have a account?{" "}
          <span
            className="cta"
            onClick={() => {
              dispatch({ type: ACTION.SHOW_SIGNIN });
            }}
          >
            Sign in now!
          </span>
        </p>
      </div>
    </div>
  );
}
