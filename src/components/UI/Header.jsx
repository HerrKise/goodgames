import { Link } from "react-router-dom";
import logo from "../../assets/Main/logo.png";

export const Header = () => {

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 400 ||
      document.documentElement.scrollTop > 400
    ) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-200px";
    }
  }
  return (
    <>
      <header className="absolute -0 w-full h-[84px] z-[100]">
        <div className="wrap flex justify-between items-center py-7">
          <Link className="w-[132px] h-auto" to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className="flex space-x-6">
            <button className="hidden">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.04224 2.96324C6.73228 2.67741 7.47187 2.5303 8.21876 2.5303C9.72718 2.5303 11.1738 3.12952 12.2404 4.19613C13.307 5.26275 13.9063 6.70939 13.9063 8.21781C13.9063 9.72623 13.307 11.1729 12.2404 12.2395C11.1738 13.3061 9.72718 13.9053 8.21876 13.9053C7.47187 13.9053 6.73228 13.7582 6.04224 13.4724C5.3522 13.1866 4.72522 12.7676 4.19708 12.2395C3.66895 11.7113 3.25001 11.0844 2.96419 10.3943C2.67836 9.70428 2.53125 8.9647 2.53125 8.21781C2.53125 7.47091 2.67836 6.73133 2.96419 6.04129C3.25001 5.35125 3.66895 4.72427 4.19708 4.19613C4.72522 3.668 5.3522 3.24906 6.04224 2.96324ZM1.62037 4.78688C1.06923 5.84654 0.781407 7.02336 0.78125 8.21778C0.781094 9.63132 1.18376 11.0156 1.94207 12.2086C2.70038 13.4015 3.78294 14.3536 5.06292 14.9534C6.3429 15.5532 7.7673 15.7758 9.16925 15.5951C10.505 15.423 11.7677 14.8916 12.8234 14.0593L16.7853 18.0212C16.8649 18.1058 16.9605 18.1737 17.0665 18.2209C17.1739 18.2688 17.2897 18.2945 17.4072 18.2966C17.5247 18.2986 17.6414 18.277 17.7503 18.233C17.8593 18.189 17.9583 18.1235 18.0414 18.0404C18.1244 17.9573 18.19 17.8583 18.234 17.7494C18.278 17.6404 18.2996 17.5237 18.2975 17.4063C18.2954 17.2888 18.2697 17.1729 18.2219 17.0656C18.1746 16.9595 18.1067 16.8639 18.0222 16.7844L14.0602 12.8224C14.7572 11.9381 15.2448 10.9063 15.4853 9.80447C15.7399 8.63751 15.7098 7.42638 15.3974 6.27353C15.085 5.12069 14.4995 4.06003 13.6906 3.1813C12.8816 2.30256 11.8728 1.63158 10.7497 1.22513C9.62656 0.818673 8.42205 0.688696 7.23806 0.846192C6.05406 1.00369 4.92542 1.44402 3.94759 2.12995C2.96976 2.81587 2.17151 3.72721 1.62037 4.78688Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="0.437501"
                />
              </svg>
            </button>
            <button>
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 fill-white/50"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.02235 5.90626C2.02235 4.33982 2.64461 2.83754 3.75225 1.7299C4.85989 0.622265 6.36217 0 7.92861 0C9.49504 0 10.9973 0.622265 12.105 1.7299C13.2126 2.83754 13.8349 4.33982 13.8349 5.90626V6.56251C13.8349 8.42014 14.5349 10.1124 15.6881 11.3925C15.76 11.4721 15.8112 11.5681 15.8373 11.6721C15.8635 11.7761 15.8638 11.885 15.8381 11.9891C15.8125 12.0932 15.7617 12.1895 15.6902 12.2694C15.6188 12.3494 15.5288 12.4106 15.4282 12.4478C14.0772 12.9465 12.6632 13.314 11.2011 13.5354C11.234 13.9853 11.1738 14.4371 11.0243 14.8627C10.8748 15.2882 10.6391 15.6784 10.332 16.0088C10.0249 16.3392 9.65296 16.6027 9.23944 16.7829C8.82592 16.9631 8.37968 17.0561 7.92861 17.0561C7.47753 17.0561 7.0313 16.9631 6.61778 16.7829C6.20426 16.6027 5.83233 16.3392 5.52523 16.0088C5.21813 15.6784 4.98245 15.2882 4.83291 14.8627C4.68337 14.4371 4.62318 13.9853 4.6561 13.5354C3.2138 13.3168 1.79746 12.9521 0.428971 12.4469C0.328463 12.4098 0.238568 12.3486 0.167137 12.2688C0.0957065 12.1889 0.0449127 12.0928 0.0191918 11.9888C-0.00652906 11.8848 -0.00639466 11.7761 0.0195834 11.6721C0.0455614 11.5682 0.096593 11.4722 0.168221 11.3925C1.36418 10.0684 2.02504 8.3468 2.02235 6.56251V5.90626ZM5.9616 13.6938C5.95041 13.9591 5.993 14.2239 6.0868 14.4723C6.18061 14.7207 6.32369 14.9475 6.50745 15.1392C6.69121 15.3309 6.91184 15.4834 7.15607 15.5876C7.4003 15.6918 7.66308 15.7455 7.92861 15.7455C8.19413 15.7455 8.45692 15.6918 8.70115 15.5876C8.94538 15.4834 9.16601 15.3309 9.34976 15.1392C9.53352 14.9475 9.67661 14.7207 9.77041 14.4723C9.86422 14.2239 9.9068 13.9591 9.89561 13.6938C8.58692 13.8117 7.27029 13.8117 5.9616 13.6938Z"
                />
              </svg>
            </button>
            <Link to="/profilepage">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7 fill-white"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </header>
      <header
        className="fixed -0 w-full z-[100] transition-all duration-1000 transform-gpu pt-3 pb-5 bg-gradient-to-b from-darkgrey via-darkgrey"
        id="navbar"
        style={{ top: "-200px" }}
      >
        <div className="wrap flex justify-between items-center">
          <Link className="w-[132px] h-auto" to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className="flex items-center justify-end gap-[25px]">
            <button className="hidden">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 fill-white/50"
              >
                <path
                  d="M6.04224 2.96324C6.73228 2.67741 7.47187 2.5303 8.21876 2.5303C9.72718 2.5303 11.1738 3.12952 12.2404 4.19613C13.307 5.26275 13.9063 6.70939 13.9063 8.21781C13.9063 9.72623 13.307 11.1729 12.2404 12.2395C11.1738 13.3061 9.72718 13.9053 8.21876 13.9053C7.47187 13.9053 6.73228 13.7582 6.04224 13.4724C5.3522 13.1866 4.72522 12.7676 4.19708 12.2395C3.66895 11.7113 3.25001 11.0844 2.96419 10.3943C2.67836 9.70428 2.53125 8.9647 2.53125 8.21781C2.53125 7.47091 2.67836 6.73133 2.96419 6.04129C3.25001 5.35125 3.66895 4.72427 4.19708 4.19613C4.72522 3.668 5.3522 3.24906 6.04224 2.96324ZM1.62037 4.78688C1.06923 5.84654 0.781407 7.02336 0.78125 8.21778C0.781094 9.63132 1.18376 11.0156 1.94207 12.2086C2.70038 13.4015 3.78294 14.3536 5.06292 14.9534C6.3429 15.5532 7.7673 15.7758 9.16925 15.5951C10.505 15.423 11.7677 14.8916 12.8234 14.0593L16.7853 18.0212C16.8649 18.1058 16.9605 18.1737 17.0665 18.2209C17.1739 18.2688 17.2897 18.2945 17.4072 18.2966C17.5247 18.2986 17.6414 18.277 17.7503 18.233C17.8593 18.189 17.9583 18.1235 18.0414 18.0404C18.1244 17.9573 18.19 17.8583 18.234 17.7494C18.278 17.6404 18.2996 17.5237 18.2975 17.4063C18.2954 17.2888 18.2697 17.1729 18.2219 17.0656C18.1746 16.9595 18.1067 16.8639 18.0222 16.7844L14.0602 12.8224C14.7572 11.9381 15.2448 10.9063 15.4853 9.80447C15.7399 8.63751 15.7098 7.42638 15.3974 6.27353C15.085 5.12069 14.4995 4.06003 13.6906 3.1813C12.8816 2.30256 11.8728 1.63158 10.7497 1.22513C9.62656 0.818673 8.42205 0.688696 7.23806 0.846192C6.05406 1.00369 4.92542 1.44402 3.94759 2.12995C2.96976 2.81587 2.17151 3.72721 1.62037 4.78688Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="0.437501"
                />
              </svg>
            </button>
            <button>
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 fill-white/50"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.02235 5.90626C2.02235 4.33982 2.64461 2.83754 3.75225 1.7299C4.85989 0.622265 6.36217 0 7.92861 0C9.49504 0 10.9973 0.622265 12.105 1.7299C13.2126 2.83754 13.8349 4.33982 13.8349 5.90626V6.56251C13.8349 8.42014 14.5349 10.1124 15.6881 11.3925C15.76 11.4721 15.8112 11.5681 15.8373 11.6721C15.8635 11.7761 15.8638 11.885 15.8381 11.9891C15.8125 12.0932 15.7617 12.1895 15.6902 12.2694C15.6188 12.3494 15.5288 12.4106 15.4282 12.4478C14.0772 12.9465 12.6632 13.314 11.2011 13.5354C11.234 13.9853 11.1738 14.4371 11.0243 14.8627C10.8748 15.2882 10.6391 15.6784 10.332 16.0088C10.0249 16.3392 9.65296 16.6027 9.23944 16.7829C8.82592 16.9631 8.37968 17.0561 7.92861 17.0561C7.47753 17.0561 7.0313 16.9631 6.61778 16.7829C6.20426 16.6027 5.83233 16.3392 5.52523 16.0088C5.21813 15.6784 4.98245 15.2882 4.83291 14.8627C4.68337 14.4371 4.62318 13.9853 4.6561 13.5354C3.2138 13.3168 1.79746 12.9521 0.428971 12.4469C0.328463 12.4098 0.238568 12.3486 0.167137 12.2688C0.0957065 12.1889 0.0449127 12.0928 0.0191918 11.9888C-0.00652906 11.8848 -0.00639466 11.7761 0.0195834 11.6721C0.0455614 11.5682 0.096593 11.4722 0.168221 11.3925C1.36418 10.0684 2.02504 8.3468 2.02235 6.56251V5.90626ZM5.9616 13.6938C5.95041 13.9591 5.993 14.2239 6.0868 14.4723C6.18061 14.7207 6.32369 14.9475 6.50745 15.1392C6.69121 15.3309 6.91184 15.4834 7.15607 15.5876C7.4003 15.6918 7.66308 15.7455 7.92861 15.7455C8.19413 15.7455 8.45692 15.6918 8.70115 15.5876C8.94538 15.4834 9.16601 15.3309 9.34976 15.1392C9.53352 14.9475 9.67661 14.7207 9.77041 14.4723C9.86422 14.2239 9.9068 13.9591 9.89561 13.6938C8.58692 13.8117 7.27029 13.8117 5.9616 13.6938Z"
                />
              </svg>
            </button>
            <Link to="/profilepage">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 fill-white"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};