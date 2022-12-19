// import { Button } from "../UI/Button";
import { useState, useEffect } from "react";


export const GamesFilter = ({
  popupVisible,
  setPopupVisible,
  changeFilter,
}) => {
  const [filter, setFilter] = useState({
    type: "",
    mode: "",
    view: "",
  });
  //
  return (
    <div
      className={`
      fixed top-0 left-0 w-full h-full bg-grey z-[200] overflow-scroll transition-all duration-300
      ${popupVisible ? "translate-y-0" : "translate-y-[100%]"}`}
    >
      <form className="py-10 wrap space-y-5 relative">
        {/*  */}
        <div className="flex flex-row items-center w-full justify-between">
          <h1 className="h1 text-center mx-auto translate-x-[10%]">Фильтры</h1>
          <button
            className="z-[210]"
            type="button"
            onClick={() => {
              setPopupVisible(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 stroke-[1px] stroke-current text-white"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        {/*  */}
        <div className="space-y-5">
          <h3 className="h3">Тип</h3>
          <ul className="grid grid-cols-2 gap-3">
            <label
              htmlFor="paid"
              className="w-full h-[110px] bg-darkgrey rounded-xl flex flex-col items-center justify-center relative gap-[10px] cursor-pointer"
            >
              {/*  */}
              <input
                type="checkbox"
                name="paid"
                id="paid"
                value="paid"
                checked={filter.type === "paid"}
                onChange={(e) => {
                  if (filter.type === "paid") {
                    setFilter({ ...filter, type: "" });
                  } else {
                    setFilter({ ...filter, type: e.target.value });
                  }
                }}
                className="w-4 h-4 rounded-full checked:bg-yellow absolute top-4 right-4 bg-grey appearance-none checked:border-transparent focus:outline-none peer"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-2 h-2 opacity-0 peer-checked:opacity-100 absolute top-5 right-5 fill-black stroke-[3px] stroke-darkgrey transition-all duration-300"
              >
                <path
                  fillRule="evenodd"
                  d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                  clipRule="evenodd"
                />
              </svg>
              {/*  */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-[34px] h-[34px]"
              >
                <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="font-semibold text-[16px]">Платные</p>
            </label>
            <label
              htmlFor="free"
              className="w-full h-[110px] bg-darkgrey rounded-xl flex flex-col items-center justify-center relative gap-[10px] cursor-pointer"
            >
              {/*  */}
              <input
                type="checkbox"
                name="free"
                id="free"
                value="free"
                checked={filter.type === "free"}
                onChange={(e) => {
                  if (filter.type === "free") {
                    setFilter({ ...filter, type: "" });
                  } else {
                    setFilter({ ...filter, type: e.target.value });
                  }
                }}
                className="w-4 h-4 rounded-full checked:bg-yellow absolute top-4 right-4 bg-grey appearance-none checked:border-transparent focus:outline-none peer"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-2 h-2 opacity-0 peer-checked:opacity-100 absolute top-5 right-5 fill-black stroke-[3px] stroke-darkgrey transition-all duration-300"
              >
                <path
                  fillRule="evenodd"
                  d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                  clipRule="evenodd"
                />
              </svg>
              {/*  */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-[34px] h-[34px]"
              >
                <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="font-semibold text-[16px]">Бесплатные</p>
            </label>
          </ul>
        </div>
        <div className="space-y-5">
          <h3 className="h3">Режим</h3>
          <ul className="grid grid-cols-2 gap-3">
            <label
              htmlFor="solo"
              className="w-full h-[110px] bg-darkgrey rounded-xl flex flex-col items-center justify-center relative gap-[10px] cursor-pointer"
            >
              {/*  */}
              <input
                type="checkbox"
                name="solo"
                id="solo"
                value="solo"
                checked={filter.mode === "solo"}
                onChange={(e) => {
                  if (filter.mode === "solo") {
                    setFilter({ ...filter, mode: "" });
                  } else {
                    setFilter({ ...filter, mode: e.target.value });
                  }
                }}
                className="w-4 h-4 rounded-full checked:bg-yellow absolute top-4 right-4 bg-grey appearance-none checked:border-transparent focus:outline-none peer"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-2 h-2 opacity-0 peer-checked:opacity-100 absolute top-5 right-5 fill-black stroke-[3px] stroke-darkgrey transition-all duration-300"
              >
                <path
                  fillRule="evenodd"
                  d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                  clipRule="evenodd"
                />
              </svg>
              {/*  */}
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[34px] h-[34px]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.625 8.5C10.625 6.80925 11.2966 5.18774 12.4922 3.99219C13.6877 2.79665 15.3092 2.125 17 2.125C18.6907 2.125 20.3122 2.79665 21.5078 3.99219C22.7033 5.18774 23.375 6.80925 23.375 8.5C23.375 10.1908 22.7033 11.8123 21.5078 13.0078C20.3122 14.2034 18.6907 14.875 17 14.875C15.3092 14.875 13.6877 14.2034 12.4922 13.0078C11.2966 11.8123 10.625 10.1908 10.625 8.5ZM5.31389 28.4821C5.36166 25.4143 6.61388 22.4882 8.80025 20.3357C10.9866 18.1831 13.9318 16.9766 17 16.9766C20.0682 16.9766 23.0133 18.1831 25.1997 20.3357C27.3861 22.4882 28.6383 25.4143 28.6861 28.4821C28.6897 28.6886 28.6331 28.8917 28.5232 29.0666C28.4132 29.2415 28.2547 29.3805 28.067 29.4667C24.595 31.0586 20.8195 31.8802 17 31.875C13.0531 31.875 9.30322 31.0137 5.93297 29.4667C5.74524 29.3805 5.5867 29.2415 5.47675 29.0666C5.3668 28.8917 5.3102 28.6886 5.31389 28.4821Z"
                  fill="white"
                />
              </svg>
              <p className="font-semibold text-[16px]">Соло</p>
            </label>
            <label
              htmlFor="duo"
              className="w-full h-[110px] bg-darkgrey rounded-xl flex flex-col items-center justify-center relative gap-[10px] cursor-pointer"
            >
              {/*  */}
              <input
                type="checkbox"
                name="duo"
                id="duo"
                value="duo"
                checked={filter.mode === "duo"}
                onChange={(e) => {
                  if (filter.mode === "duo") {
                    setFilter({ ...filter, mode: "" });
                  } else {
                    setFilter({ ...filter, mode: e.target.value });
                  }
                }}
                className="w-4 h-4 rounded-full checked:bg-yellow absolute top-4 right-4 bg-grey appearance-none checked:border-transparent focus:outline-none peer"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-2 h-2 opacity-0 peer-checked:opacity-100 absolute top-5 right-5 fill-black stroke-[3px] stroke-darkgrey transition-all duration-300"
              >
                <path
                  fillRule="evenodd"
                  d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                  clipRule="evenodd"
                />
              </svg>
              {/*  */}
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.375 9.03125C6.375 7.48139 6.99068 5.99501 8.0866 4.89909C9.18251 3.80318 10.6689 3.1875 12.2188 3.1875C13.7686 3.1875 15.255 3.80318 16.3509 4.89909C17.4468 5.99501 18.0625 7.48139 18.0625 9.03125C18.0625 10.5811 17.4468 12.0675 16.3509 13.1634C15.255 14.2593 13.7686 14.875 12.2188 14.875C10.6689 14.875 9.18251 14.2593 8.0866 13.1634C6.99068 12.0675 6.375 10.5811 6.375 9.03125ZM20.1875 12.2188C20.1875 11.5909 20.3112 10.9691 20.5515 10.389C20.7917 9.80896 21.1439 9.28188 21.5879 8.8379C22.0319 8.39392 22.559 8.04173 23.139 7.80145C23.7191 7.56117 24.3409 7.4375 24.9688 7.4375C25.5966 7.4375 26.2184 7.56117 26.7985 7.80145C27.3785 8.04173 27.9056 8.39392 28.3496 8.8379C28.7936 9.28188 29.1458 9.80896 29.3861 10.389C29.6263 10.9691 29.75 11.5909 29.75 12.2188C29.75 13.4868 29.2463 14.7029 28.3496 15.5996C27.4529 16.4963 26.2368 17 24.9688 17C23.7007 17 22.4846 16.4963 21.5879 15.5996C20.6912 14.7029 20.1875 13.4868 20.1875 12.2188ZM2.125 27.0938C2.125 24.4167 3.18845 21.8493 5.08139 19.9564C6.97434 18.0634 9.54172 17 12.2188 17C14.8958 17 17.4632 18.0634 19.3561 19.9564C21.2491 21.8493 22.3125 24.4167 22.3125 27.0938V27.098L22.3111 27.2666C22.3081 27.4467 22.2593 27.6232 22.1693 27.7793C22.0794 27.9354 21.9512 28.0661 21.7968 28.1591C18.9057 29.9001 15.5936 30.8177 12.2188 30.8125C8.71675 30.8125 5.43858 29.8435 2.64208 28.1591C2.48746 28.0663 2.35899 27.9357 2.26877 27.7796C2.17856 27.6234 2.12957 27.4469 2.12642 27.2666L2.125 27.0938ZM24.4375 27.098L24.4361 27.302C24.4282 27.7742 24.3154 28.2387 24.106 28.662C26.5791 28.8145 29.0493 28.3215 31.2743 27.2312C31.4464 27.1471 31.5925 27.018 31.6973 26.8576C31.802 26.6973 31.8615 26.5116 31.8693 26.3202C31.9193 25.132 31.6617 23.951 31.1212 22.8916C30.5808 21.8321 29.7759 20.9302 28.7846 20.2732C27.7933 19.6162 26.6491 19.2263 25.4628 19.1413C24.2766 19.0563 23.0885 19.279 22.0136 19.788C23.5906 21.8968 24.4407 24.4605 24.4361 27.0938V27.098H24.4375Z"
                  fill="white"
                />
              </svg>
              <p className="font-semibold text-[16px]">Дуо</p>
            </label>
            <label
              htmlFor="squad"
              className="w-full col-span-2 h-[110px] bg-darkgrey rounded-xl flex flex-col items-center justify-center relative gap-[10px] cursor-pointer"
            >
              {/*  */}
              <input
                type="checkbox"
                name="squad"
                id="squad"
                value="squad"
                checked={filter.mode === "squad"}
                onChange={(e) => {
                  if (filter.mode === "squad") {
                    setFilter({ ...filter, mode: "" });
                  } else {
                    setFilter({ ...filter, mode: e.target.value });
                  }
                }}
                className="w-4 h-4 rounded-full checked:bg-yellow absolute top-4 right-4 bg-grey appearance-none checked:border-transparent focus:outline-none peer"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-2 h-2 opacity-0 peer-checked:opacity-100 absolute top-5 right-5 fill-black stroke-[3px] stroke-darkgrey transition-all duration-300"
              >
                <path
                  fillRule="evenodd"
                  d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                  clipRule="evenodd"
                />
              </svg>
              {/*  */}
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.6875 9.5625C11.6875 8.15354 12.2472 6.80228 13.2435 5.806C14.2398 4.80971 15.591 4.25 17 4.25C18.409 4.25 19.7602 4.80971 20.7565 5.806C21.7528 6.80228 22.3125 8.15354 22.3125 9.5625C22.3125 10.9715 21.7528 12.3227 20.7565 13.319C19.7602 14.3153 18.409 14.875 17 14.875C15.591 14.875 14.2398 14.3153 13.2435 13.319C12.2472 12.3227 11.6875 10.9715 11.6875 9.5625ZM22.3125 13.8125C22.3125 12.6853 22.7603 11.6043 23.5573 10.8073C24.3543 10.0103 25.4353 9.5625 26.5625 9.5625C27.6897 9.5625 28.7707 10.0103 29.5677 10.8073C30.3647 11.6043 30.8125 12.6853 30.8125 13.8125C30.8125 14.9397 30.3647 16.0207 29.5677 16.8177C28.7707 17.6147 27.6897 18.0625 26.5625 18.0625C25.4353 18.0625 24.3543 17.6147 23.5573 16.8177C22.7603 16.0207 22.3125 14.9397 22.3125 13.8125ZM3.1875 13.8125C3.1875 12.6853 3.63527 11.6043 4.4323 10.8073C5.22933 10.0103 6.31033 9.5625 7.4375 9.5625C8.56467 9.5625 9.64567 10.0103 10.4427 10.8073C11.2397 11.6043 11.6875 12.6853 11.6875 13.8125C11.6875 14.9397 11.2397 16.0207 10.4427 16.8177C9.64567 17.6147 8.56467 18.0625 7.4375 18.0625C6.31033 18.0625 5.22933 17.6147 4.4323 16.8177C3.63527 16.0207 3.1875 14.9397 3.1875 13.8125ZM8.93917 21.4157C9.80326 20.0614 10.9949 18.9469 12.4038 18.175C13.8127 17.4032 15.3935 16.9991 17 17C18.3456 16.9988 19.6762 17.2817 20.9049 17.8304C22.1335 18.379 23.2325 19.181 24.1297 20.1838C25.0269 21.1865 25.7023 22.3675 26.1115 23.6493C26.5207 24.9312 26.6546 26.285 26.5044 27.6222C26.4861 27.7883 26.4288 27.9477 26.3372 28.0876C26.2456 28.2274 26.1224 28.3436 25.9774 28.4268C23.2455 29.9944 20.1497 30.8171 17 30.8125C13.7346 30.8125 10.6675 29.9455 8.02258 28.4268C7.87764 28.3436 7.75438 28.2274 7.66281 28.0876C7.57124 27.9477 7.51395 27.7883 7.49558 27.6222C7.25766 25.4499 7.76682 23.2614 8.93917 21.4172V21.4157Z"
                  fill="white"
                />
                <path
                  d="M7.19949 20.1932C5.80231 22.3499 5.15135 24.9055 5.34649 27.4678C4.49579 27.3388 3.65911 27.1301 2.84749 26.8444L2.68458 26.7878C2.53922 26.7362 2.41194 26.6435 2.31815 26.5211C2.22437 26.3986 2.1681 26.2516 2.15616 26.0978L2.14199 25.9264C2.08477 25.2152 2.1714 24.4997 2.39671 23.8227C2.62203 23.1457 2.98142 22.5211 3.45343 21.986C3.92545 21.4509 4.50041 21.0164 5.14402 20.7084C5.78763 20.4003 6.48669 20.2251 7.19949 20.1932ZM28.6535 27.4678C28.8486 24.9055 28.1977 22.3499 26.8005 20.1932C27.5133 20.2251 28.2124 20.4003 28.856 20.7084C29.4996 21.0164 30.0745 21.4509 30.5465 21.986C31.0186 22.5211 31.3779 23.1457 31.6033 23.8227C31.8286 24.4997 31.9152 25.2152 31.858 25.9264L31.8438 26.0978C31.8316 26.2514 31.7752 26.3981 31.6815 26.5203C31.5877 26.6424 31.4606 26.7349 31.3154 26.7863L31.1525 26.843C30.3492 27.1263 29.5148 27.3374 28.6535 27.4678Z"
                  fill="white"
                />
              </svg>
              <p className="font-semibold text-[16px]">Сквад</p>
            </label>
          </ul>
        </div>
        <div className="space-y-5">
          <h3 className="h3">Вид</h3>
          <ul className="grid grid-cols-2 gap-3">
            <label
              htmlFor="firstPerson"
              className="w-full h-[110px] bg-darkgrey rounded-xl flex flex-col items-center justify-center relative gap-[10px] cursor-pointer"
            >
              {/*  */}
              <input
                type="checkbox"
                name="firstPerson"
                id="firstPerson"
                value="firstPerson"
                checked={filter.view === "firstPerson"}
                onChange={(e) => {
                  if (filter.view === "firstPerson") {
                    setFilter({ ...filter, view: "" });
                  } else {
                    setFilter({ ...filter, view: e.target.value });
                  }
                }}
                className="w-4 h-4 rounded-full checked:bg-yellow absolute top-4 right-4 bg-grey appearance-none checked:border-transparent focus:outline-none peer"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-2 h-2 opacity-0 peer-checked:opacity-100 absolute top-5 right-5 fill-black stroke-[3px] stroke-darkgrey transition-all duration-300"
              >
                <path
                  fillRule="evenodd"
                  d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                  clipRule="evenodd"
                />
              </svg>
              {/*  */}
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[34px] h-[34px]"
              >
                <path
                  d="M16.84 21.05C17.9566 21.05 19.0274 20.6065 19.8169 19.8169C20.6065 19.0274 21.05 17.9566 21.05 16.84C21.05 15.7234 20.6065 14.6526 19.8169 13.8631C19.0274 13.0736 17.9566 12.63 16.84 12.63C15.7234 12.63 14.6526 13.0736 13.8631 13.8631C13.0736 14.6526 12.63 15.7234 12.63 16.84C12.63 17.9566 13.0736 19.0274 13.8631 19.8169C14.6526 20.6065 15.7234 21.05 16.84 21.05Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.85661 16.064C3.94477 9.78965 9.86262 5.2625 16.8414 5.2625C23.816 5.2625 29.731 9.78544 31.822 16.0541C31.9904 16.5621 31.9904 17.1094 31.822 17.616C29.7352 23.8903 23.816 28.4175 16.8386 28.4175C9.86403 28.4175 3.94757 23.8946 1.85801 17.6259C1.68926 17.1189 1.68926 16.5709 1.85801 16.064H1.85661ZM24.2075 16.84C24.2075 18.794 23.4313 20.6679 22.0496 22.0496C20.6679 23.4313 18.794 24.2075 16.84 24.2075C14.886 24.2075 13.0121 23.4313 11.6304 22.0496C10.2487 20.6679 9.4725 18.794 9.4725 16.84C9.4725 14.886 10.2487 13.0121 11.6304 11.6304C13.0121 10.2487 14.886 9.4725 16.84 9.4725C18.794 9.4725 20.6679 10.2487 22.0496 11.6304C23.4313 13.0121 24.2075 14.886 24.2075 16.84Z"
                  fill="white"
                />
              </svg>
              <p className="font-semibold text-[16px]">От 1 лица</p>
            </label>
            <label
              htmlFor="thirdPerson"
              className="w-full h-[110px] bg-darkgrey rounded-xl flex flex-col items-center justify-center relative gap-[10px] cursor-pointer"
            >
              {/*  */}
              <input
                type="checkbox"
                name="thirdPerson"
                id="thirdPerson"
                value="thirdPerson"
                checked={filter.view === "thirdPerson"}
                onChange={(e) => {
                  if (filter.view === "thirdPerson") {
                    setFilter({ ...filter, view: "" });
                  } else {
                    setFilter({ ...filter, view: e.target.value });
                  }
                }}
                className="w-4 h-4 rounded-full checked:bg-yellow absolute top-4 right-4 bg-grey appearance-none checked:border-transparent focus:outline-none peer"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-2 h-2 opacity-0 peer-checked:opacity-100 absolute top-5 right-5 fill-black stroke-[3px] stroke-darkgrey transition-all duration-300"
              >
                <path
                  fillRule="evenodd"
                  d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                  clipRule="evenodd"
                />
              </svg>
              {/*  */}
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[34px] h-[34px]"
              >
                <path
                  d="M16.84 8.42C18.3901 8.42 19.6467 7.16342 19.6467 5.61334C19.6467 4.06326 18.3901 2.80667 16.84 2.80667C15.2899 2.80667 14.0333 4.06326 14.0333 5.61334C14.0333 7.16342 15.2899 8.42 16.84 8.42Z"
                  fill="white"
                />
                <path
                  d="M16.84 25.26H19.6467V18.2433H22.4534V12.63C22.4534 11.0821 21.1946 9.82333 19.6467 9.82333H14.0334C12.4855 9.82333 11.2267 11.0821 11.2267 12.63V18.2433H14.0334V25.26H16.84Z"
                  fill="white"
                />
                <path
                  d="M25.8859 15.9784L24.6327 18.4889C26.8149 19.5765 28.0666 21.0219 28.0666 22.4533C28.0666 25.1084 23.4567 28.0667 16.84 28.0667C10.2233 28.0667 5.61331 25.1084 5.61331 22.4533C5.61331 21.0219 6.86508 19.5765 9.04586 18.4889L7.79268 15.9784C4.62396 17.5585 2.80664 19.9175 2.80664 22.4533C2.80664 27.1741 8.97148 30.8733 16.84 30.8733C24.7085 30.8733 30.8733 27.1741 30.8733 22.4533C30.8733 19.9175 29.056 17.5585 25.8859 15.9784Z"
                  fill="white"
                />
              </svg>
              <p className="font-semibold text-[16px]">От 3 лица</p>
            </label>
          </ul>
        </div>
        {/* <Button text="Применить" className="w-full bg-red-500"></Button> */}
        <button
          className="bg-yellow text-darkgrey font-semibold text-[16px] w-full py-[13px] rounded-full"
          onClick={() => {
            console.log(filter);
          }}
          type="button"
        >
          Применить
        </button>
      </form>
    </div>
  );
};
