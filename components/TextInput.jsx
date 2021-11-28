import React from "react";

export default function TextInput({ register, name, error, ...restProps }) {
  return (
    <div className={`field ${name}-field`}>
      {error && <p className="error">{error.message}</p>}
      <input {...register(name)} {...restProps} />
    </div>
  );
}
