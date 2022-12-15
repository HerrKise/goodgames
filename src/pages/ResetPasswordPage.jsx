import React from "react";
import { useDispatch } from "react-redux";
import {
  generateRestorePassword,
  register,
} from "../store/reducers/userSlice.js";

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
        <div className="wrap py-20 h-full w-full  text-white">
          <h1 className="h1 pb-8 text-center">Вход</h1>
          <form className="space-y-[10px]">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              required
              //   value={email}
              //   onChange={handleEmailChange}
              className="bg-[#26262633] w-full py-4 px-7 rounded-lg"
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Пароль"
              required
              //   value={password}
              //   onChange={handlePasswordChange}
              className="bg-[#26262633] w-full py-4 px-7 rounded-lg"
            />

            <button
              className="w-full rounded-lg bg-yellow py-4 text-darkgrey text-sm font-bold"
              type="submit"
            >
              Вход
            </button>
          </form>
        </div>
      </section>
      <section className="w-[100%] bg-black hidden">
        <div className="w-[1024px] mx-auto h-[900px] flex flex-col justify-center items-center">
          <form
            className="bg-[#161823] w-[500px] h-[450px] py-[30px] px-[20px] rounded-[20px]"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col justify-center items-center border-b-[1px] border-gray-400 pb-[10px]">
              <h2 className="text-white">Восстановление пароля</h2>
              <p className="text-gray-500">Введите свой email</p>
            </div>
            <div className="flex flex-col items-center justify-center h-[70%] py-[20px] border-b-[1px] border-gray-400">
              <div className="flex justify-between w-[80%] items-center">
                <label className="text-gray-500">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  placeholder=""
                  value={email}
                  onChange={handleEmailChange}
                  required
                  className="border-[1px] w-[200px] border-[#9e9e9e] rounded-[5px] text-[16px] h-[40px] px-[20px] bg-gray-600"
                />
              </div>
            </div>
            <div className="flex justify-end items-center mt-[20px]">
              <button
                className="bg-amber-500 w-[150px] h-[50px] rounded-[10px]"
                type="submit"
              >
                Восстановить
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
