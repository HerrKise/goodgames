import googlebadge from "../../assets/Main/google-play-badge.png";
import appstorebadge from "../../assets/Main/App_Store_Badge.svg";
import { NavLink } from "react-router-dom";

import appsbg from "../../assets/Main/appsbg.jfif";

export const MainApps = () => {
  return (
    <section className="my-10 bg-appsbg bg-cover bg-center h-[555px] rounded-3xl relative">
      <img
        src={appsbg}
        alt="appsbg"
        className="absolute top-0 left-0 h-full w-full object-top object-cover"
      />
      <div className="absolute top-0 w-full h-full bg-gradient-to-b from-[#191919] via-[#00000070] to-[#191919] z-10"></div>
      <div className="wrap relative z-20 w-full h-full flex flex-col justify-end">
        <h1 className="h1 text-center mb-3">
          Приложения для
          <br />
          iOS&nbsp;и&nbsp;Android
        </h1>
        <p className="p text-center">
          Скачайте приложения GoodGames для удобства пользователя.
          <br />
          Получите доступ ко&nbsp;всем мероприятиям от&nbsp;нас и&nbsp;наших
          партнеров.
        </p>
        <div className="flex items-center justify-center gap-[15px] mt-[15px]">
          <NavLink className="flex-1 -translate-x-[5px]">
            <img
              src={appstorebadge}
              alt="appstorebadge"
              className="w-full h-auto scale-[.90]"
            />
          </NavLink>
          <NavLink className="flex-1 ">
            <img
              src={googlebadge}
              alt="googlebadge"
              className="w-auto h-auto"
            />
          </NavLink>
        </div>
      </div>
    </section>
  );
};
