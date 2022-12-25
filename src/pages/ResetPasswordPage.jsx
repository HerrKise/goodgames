import React from "react";
import { useDispatch } from "react-redux";
import {
  generateRestorePassword,
  register,
} from "../store/reducers/userSlice.js";
import { Link } from "react-router-dom";

import logopic from "../assets/Main/logo.png"

export default function ResetPassword() {
  const dispatch = useDispatch();

  const [email, changeEmail] = React.useState("");

  const handleEmailChange = (e) => {
    changeEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(generateRestorePassword({ email }));
  };

  return (
    <>
      <section className="bg-darkgrey min-h-[100vh] flex flex-col items-center justify-center relative">
        <Link className="w-full flex items-center justify-center fixed top-12" to="/">
          <img src={logopic} alt="logopic" className="w-[132px]"/>
        </Link>
        <div className="wrap py-20 h-full w-full  text-white max-w-[400px]">
          <h1 className="h1 pb-8 text-center">Восстановление пароля</h1>
          <form
            className="space-y-[10px]"
            onSubmit={handleSubmit}
          >
            <input
                  type="email"
                  id="email"
                  name="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  className="bg-[#26262633] w-full py-4 px-7 rounded-lg"
            />
            <button
              className="w-full rounded-lg bg-yellow py-4 text-darkgrey text-sm font-bold md:text-base"
              type="submit"
            >
               Восстановить
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
