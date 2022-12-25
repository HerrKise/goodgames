import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getErrors, signIn } from "../store/reducers/userSlice.js";
import { Link, NavLink, redirect, useNavigate } from "react-router-dom";

import logopic from "../assets/Main/logo.png";

export default function Login() {
  const [email, changeEmail] = React.useState("");
  const [password, changePassword] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log("render");

  const handleEmailChange = (e) => {
    changeEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    changePassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email: email, password: password };
    dispatch(signIn({ payload: data, navigate: navigate }));
  };

  const handleRedirectToRegistration = () => {
    navigate("/reg");
  };

  return (
    <section className="bg-darkgrey min-h-[100vh] flex flex-col items-center justify-center relative">
      <Link
        className="w-full flex items-center justify-center"
        to="/"
      >
        <img src={logopic} alt="logopic" className="w-[132px]" />
      </Link>
      <div className="wrap py-20 h-full w-full  text-white max-w-[400px]">
        <h1 className="h1 pb-8 text-center">Вход</h1>
        <form className="space-y-[10px]" onSubmit={handleSubmit}>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={handleEmailChange}
            className="bg-[#26262633] w-full py-4 px-7 rounded-lg"
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Пароль"
            required
            value={password}
            onChange={handlePasswordChange}
            className="bg-[#26262633] w-full py-4 px-7 rounded-lg"
          />

          <button
            className="w-full rounded-lg bg-yellow py-4 text-darkgrey text-sm font-bold"
            type="submit"
          >
            Вход
          </button>
          <NavLink to="/reset-password" className="w-[50%]">
            <button
              type="button"
              className="w-[calc(50%-5px)] rounded-lg bg-[#26262633] py-4 text-sm font-bold mr-[10px]"
            >
              Забыли пароль?
            </button>
          </NavLink>
          <button
            className="w-[calc(50%-5px)] rounded-lg bg-grey py-4 text-sm font-bold"
            onClick={handleRedirectToRegistration}
          >
            Регистрация
          </button>
        </form>
      </div>
    </section>
  );
}
