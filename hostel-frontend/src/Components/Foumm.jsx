import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

function Foumm() {
  // const [input,setInput] = useState('');
  const onSubmit = (data) => {
    console.log(data);
  };

  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Enter email</label>
        <input
          type="text"
          className="border border-red-300 rounded-md h-12 pl-5 "
          //   value={input}
          //   onChange={handleChange}
          {...register("email", {
            required: "This field is required.",
            pattern: {
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: "Invalid Email Format",
            },
          })}
        />
        <p>{errors.email?.message}</p>
        {/* <p>{email}</p> */}
        <button className="">Sumbmit</button>
      </form>
      <DevTool control={control} /> {/* set up the dev tool */}
    </div>
  );
}

export default Foumm;
