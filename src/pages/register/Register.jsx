import React from "react";
import { NavLink } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchemas } from "../../schemas/authSchema";

const register = () => {
  const {register,handleSubmit,formState: {errors}} = useForm({
    resolver: zodResolver(registerSchemas)
  })


  
  return <div className="flex w-full items-center justify-center">
      <div className="card card-border card-md min-w-md bg-blue-500">
        <div className="card-body">
          <h2 className="card-title">Welcome Carat </h2>
          <p>Silakan Lengkapi Form Dibawah Ini </p>

          <form onSubmit={handleSubmit(console.log)} className="space-y-2">
            <label className="floating-label">
              <span>Full Name</span>
              <input
                type="text"
                placeholder="Masukkan Nama U"
                className="input input-md"
                {...register("name")}
              />
            </label>

            <label className="floating-label">
              <span>Email</span>
              <input
                type="text"
                placeholder="Masukkan Email"
                className="input input-md"
                {...register("email")}
              />
            </label>

            <label className="floating-label">
              <span>Password</span>
              <input
                type="text"
                placeholder="Masukkan Password"
                className="input input-md"
                {...register("password")}
              />
            </label>

            <button type="submit" className="btn btn-primary">
              Buat Akun
            </button>


          </form>
        </div>
      </div>
    </div>
};

export default register;
