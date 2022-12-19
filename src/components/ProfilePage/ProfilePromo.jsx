import promobg from "../../assets/Main/gg-bg.png"
import userpic from "../../assets/Profile/userpic.jfif"
import { API_URL } from "../../http/index";

export const ProfilePromo = ({user, isLoading}) => {

    const picture = `${API_URL + user?.profilePicture?.path}` || "";

    return isLoading ? (
        ""
    ) : (
        <section className="w-full h-[420px] relative">
            <img src={promobg} alt="promopic" className="absolute top-0 h-full w-full object-top object-cover"/>
            <div className="wrap relative z-20 h-full flex flex-col items-center justify-end pb-8">
                <div className="w-40 h-40 rounded-full relative overflow-clip">
                    {picture !== "" ? <img src={picture} alt="userpic" className="absolute top-0 h-full w-full object-center object-cover"/>
                        :   <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-full h-auto fill-white animate-pulse"
                    >
                        <path
                        fillRule="evenodd"
                        d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                        clipRule="evenodd"
                        />
                    </svg>
                    }
                </div>
                <div className="mt-5 space-y-2 text-center flex flex-col items-center">
                    {/* {user.confirmed
                        ?   <button className="bg-yellow flex items-center text-darkgrey px-3 py-1 rounded-full text-[8px] font-bold space-x-1">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.126343 4.89886C0.126343 2.22102 2.29695 0.050415 4.97478 0.050415C7.65262 0.050415 9.82323 2.22102 9.82323 4.89886C9.82323 7.57669 7.65262 9.7473 4.97478 9.7473C2.29695 9.7473 0.126343 7.57669 0.126343 4.89886ZM6.76995 3.9968C6.79979 3.95704 6.82138 3.91172 6.83345 3.8635C6.84552 3.81528 6.84783 3.76514 6.84024 3.71601C6.83266 3.66689 6.81533 3.61978 6.78927 3.57744C6.76322 3.53511 6.72897 3.49842 6.68853 3.46951C6.64809 3.44061 6.60228 3.42008 6.55379 3.40913C6.5053 3.39818 6.45512 3.39704 6.40618 3.40577C6.35725 3.41449 6.31055 3.43291 6.26884 3.45994C6.22712 3.48698 6.19123 3.52207 6.16327 3.56317L4.55409 5.81583L3.74651 5.00826C3.67581 4.94238 3.5823 4.90651 3.48568 4.90822C3.38906 4.90992 3.29687 4.94906 3.22854 5.0174C3.16021 5.08573 3.12107 5.17792 3.11936 5.27454C3.11766 5.37116 3.15352 5.46467 3.2194 5.53537L4.33827 6.65424C4.37656 6.6925 4.42271 6.72196 4.47352 6.74059C4.52434 6.75922 4.5786 6.76656 4.63254 6.76212C4.68648 6.75767 4.73881 6.74154 4.78588 6.71484C4.83296 6.68813 4.87366 6.65151 4.90517 6.6075L6.76995 3.9968Z" fill="#191919"/>
                                </svg>
                                <span>ПОДТВЕРЖДЕН</span>
                            </button>
                        : <></>
                    } */}
                    <h1 className="h1">{user.name}</h1>
                    <div className="flex items-center p space-x-1">
                        <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.5" clipPath="url(#clip0_400_1153)">
                            <path d="M1.76747 0.155952C1.58548 0.211003 1.44972 0.286336 1.34861 0.410926C1.20418 0.584772 1.1984 0.610849 1.20996 1.12949C1.21573 1.42792 1.21573 1.95526 1.20996 2.31164C1.20418 2.94908 1.20418 2.94908 1.08574 2.91141C0.848874 2.83028 0.282696 2.86795 0.18737 2.97225C0.106487 3.05918 0.106487 3.05918 0.198925 3.02731C0.268253 3.00702 0.291362 3.01572 0.27403 3.05918C0.262475 3.09684 0.219145 3.12292 0.18737 3.11423C0.149817 3.10843 0.126708 3.20695 0.126708 3.38369C0.126708 3.54015 0.109376 3.75746 0.0949327 3.85887C0.0747121 4.00954 0.0949327 4.07618 0.207591 4.19497C0.337581 4.33405 0.380911 4.34564 0.767992 4.34564C1.12907 4.34564 1.19263 4.36302 1.21573 4.43835C1.24751 4.56294 1.20996 10.7287 1.17818 10.8156C1.16085 10.8649 1.03953 10.8851 0.805544 10.8851C0.571562 10.8851 0.401131 10.917 0.294251 10.9779C0.132485 11.0764 0.126708 11.0851 0.120931 11.5081C0.109376 12.3686 0.132485 12.4005 0.811322 12.4005H1.26484L1.24751 13.4378C1.22729 14.8981 1.26773 14.9618 2.31343 15.0198C3.86464 15.1009 8.40562 15.1328 9.1509 15.069C9.41088 15.0487 9.64197 15.043 9.89329 15.0487C10.2428 15.0545 10.3295 15.0487 10.393 14.9879C10.4479 14.9444 10.4681 14.9444 10.4681 14.9879C10.4681 15.0198 10.4941 15.0487 10.523 15.0487C10.5548 15.0487 10.5779 14.9995 10.5779 14.9357C10.5779 14.8749 10.5577 14.843 10.523 14.8604C10.497 14.8778 10.4681 14.8662 10.4681 14.8343C10.4681 14.7358 10.5981 14.8025 10.6559 14.9328C10.7108 15.0516 10.7252 15.0516 11.9211 15.0516C12.5884 15.0516 13.5041 15.069 13.9576 15.0835C15.1795 15.1328 17.0947 15.0632 17.0947 14.9647C17.0947 14.9213 17.1207 14.8894 17.1554 14.8894C17.1872 14.8894 17.2045 14.9271 17.1814 14.9705C17.1612 15.0401 17.2189 15.0516 17.5685 15.0516C17.7938 15.0574 19.0388 15.0632 20.3387 15.069C21.6328 15.0748 22.6756 15.0632 22.6612 15.0372C22.6496 15.0169 22.6785 14.9995 22.7247 14.9995C22.7796 14.9995 22.7941 15.0256 22.7738 15.0632C22.7103 15.1646 24.12 15.0806 24.3568 14.9618C24.7497 14.7677 24.7728 14.6866 24.7757 13.5131C24.7815 12.9336 24.7959 12.4266 24.819 12.3773C24.8392 12.3136 24.8826 12.302 24.9692 12.3281C25.1252 12.3831 25.7116 12.3541 25.8214 12.2962C25.8907 12.2527 25.8849 12.2469 25.8041 12.2411C25.7434 12.2411 25.7116 12.2151 25.7289 12.1716C25.7405 12.1397 25.7781 12.1108 25.8041 12.1165C25.8734 12.1339 25.9283 11.2676 25.8676 11.1604C25.7376 10.9286 25.7174 10.917 25.2263 10.8909L24.7352 10.8649L24.7237 7.60525L24.7064 4.35143H25.1859C25.6278 4.35143 25.6654 4.33984 25.7954 4.20077C25.908 4.08197 25.9312 4.01823 25.908 3.86466C25.8907 3.76325 25.8763 3.54595 25.8763 3.39528C25.8763 3.21274 25.856 3.11423 25.8156 3.12582C25.7838 3.13161 25.7405 3.10554 25.7289 3.06497C25.7116 3.02151 25.7347 3.00992 25.8041 3.0331C25.8907 3.06497 25.8907 3.05918 25.8214 2.98384C25.7347 2.89113 25.2032 2.84767 24.9606 2.91431C24.7179 2.97805 24.6977 2.9201 24.663 1.94656C24.6024 0.442798 24.4897 0.228388 23.7531 0.24867C23.5365 0.254465 23.3342 0.242875 23.2996 0.228388C23.2418 0.176234 22.3261 0.112491 21.8639 0.112491C21.6848 0.118286 21.3728 0.118286 21.1649 0.118286C20.9598 0.118286 19.8938 0.129875 18.7933 0.13567C17.6985 0.141465 16.595 0.153055 16.3408 0.161747C16.0866 0.170439 15.7746 0.182029 15.6417 0.179132C13.5503 0.14726 11.8171 0.13567 11.7247 0.15885C11.6554 0.176234 11.6063 0.208106 11.6178 0.228388C11.6236 0.24867 11.6063 0.271849 11.5745 0.277644C11.5485 0.289234 11.5196 0.26026 11.5196 0.222593C11.5196 0.173337 11.2596 0.15885 10.4161 0.15885C9.5582 0.15885 9.31844 0.176234 9.32133 0.222593C9.33288 0.26026 9.30111 0.292131 9.252 0.292131C9.20867 0.292131 9.18267 0.271849 9.19712 0.242875C9.26067 0.144362 8.91114 0.129875 6.45577 0.129875C5.09232 0.129875 3.54111 0.118286 3.00671 0.109593C2.29898 0.0922086 1.96101 0.106696 1.76747 0.155952ZM12.7184 1.61915C20.0932 1.63074 22.5341 1.61336 22.5341 1.5699C22.5341 1.52064 22.5514 1.52644 22.5774 1.5699C22.5976 1.60757 22.7392 1.64523 22.8836 1.65103L23.1523 1.66841L23.158 1.93787C23.1696 2.36959 23.2389 6.73602 23.2331 6.82874C23.2158 7.28943 23.2331 10.7634 23.2591 11.9746C23.2851 13.1857 23.2794 13.5305 23.2274 13.5624C23.1898 13.5826 22.9847 13.5942 22.7796 13.5884C22.381 13.5711 20.9251 13.5711 15.3442 13.5769C12.4498 13.5826 12.0742 13.5942 12.1002 13.6638C12.1204 13.7188 12.0944 13.7449 12.0251 13.7449C11.9558 13.7449 11.9269 13.7188 11.95 13.6638C11.976 13.5942 11.638 13.5884 9.24045 13.5884C7.73834 13.5942 6.06292 13.6087 5.51696 13.6261C4.97678 13.6464 4.5377 13.6464 4.5377 13.6203C4.5377 13.5566 4.34994 13.5769 4.27772 13.6464C4.22861 13.6956 4.19684 13.7014 4.17084 13.658C4.15062 13.6145 3.89064 13.5942 3.46601 13.5884C3.09914 13.5826 2.77561 13.5682 2.75539 13.5508C2.7294 13.5334 2.70629 13.3306 2.70629 13.0872C2.70629 12.725 2.69473 12.6613 2.6254 12.6873C2.57052 12.7076 2.54452 12.6815 2.54452 12.612C2.54452 12.5425 2.57052 12.5135 2.6254 12.5367C2.69473 12.5628 2.70629 12.3252 2.71206 10.607C2.73228 4.14282 2.73228 4.21815 2.65718 4.19207C2.61385 4.17469 2.60229 4.15441 2.63985 4.13123C2.72073 4.08197 2.73228 3.43005 2.65718 3.18956C2.61963 3.08236 2.60807 2.96356 2.63696 2.9259C2.65718 2.88823 2.68029 2.584 2.69184 2.26238C2.69762 1.93208 2.7034 1.63654 2.7034 1.59308C2.70917 1.54382 2.74095 1.53223 2.8045 1.567C2.85361 1.58728 7.3166 1.61336 12.7184 1.61915Z" fill="white"/>
                            <path d="M19.8043 2.98105L18.6575 2.99264L18.4466 3.19836C18.2675 3.3722 18.23 3.44174 18.204 3.69671C18.1433 4.20956 18.1433 4.92812 18.1924 6.07551C18.2184 6.68686 18.2357 7.28084 18.2242 7.39963C18.2126 7.51843 18.204 8.51225 18.204 9.61617L18.1982 11.6154L18.3282 11.8269C18.3975 11.9399 18.5333 12.0645 18.6286 12.108C18.8452 12.2007 21.0088 12.221 21.2948 12.134C21.5577 12.0529 21.7686 11.7834 21.8003 11.485C21.8552 10.9606 21.8321 6.96791 21.7743 6.81725L21.7137 6.67238H20.9742C20.4744 6.67238 20.2145 6.69266 20.1711 6.73612C20.1278 6.77958 20.1076 6.99109 20.1076 7.3185V7.83714L20.2693 7.92986L20.4311 8.02837L20.4369 8.63394C20.4369 8.97004 20.4369 9.50896 20.4311 9.84506C20.4253 10.2072 20.4484 10.4883 20.486 10.5462C20.5293 10.6158 20.5351 10.6853 20.4918 10.7896C20.4369 10.9345 20.4311 10.9345 20.0296 10.9142C19.5703 10.8939 19.4865 10.8592 19.5703 10.752C19.631 10.6766 19.657 6.89838 19.6078 5.12225L19.5818 4.25302L19.9689 4.23274C20.5467 4.20666 20.5409 4.20087 20.5409 4.58912C20.5409 4.77746 20.5669 4.9513 20.6044 4.98897C20.6535 5.03823 20.6535 5.05271 20.6044 5.05271C20.486 5.05271 20.5351 5.20338 20.6651 5.23235C20.8586 5.27002 21.6184 5.23815 21.6732 5.1831C21.6935 5.15702 21.7281 4.73979 21.7426 4.25302L21.7628 3.36641L21.6126 3.21574C21.4826 3.08536 21.3699 3.0419 21.0088 2.98395C20.9742 2.97236 20.4282 2.97236 19.8043 2.98105ZM4.40769 3.08536C4.35858 3.13461 4.34414 3.44174 4.35858 4.19218C4.37591 5.4033 4.37013 5.31058 4.43369 5.20917C4.47702 5.14543 4.48857 5.15992 4.48857 5.27292C4.48857 5.34825 4.46257 5.42358 4.42502 5.43517C4.37591 5.45256 4.36147 5.68435 4.36147 6.24066C4.35569 6.91576 4.34414 7.04035 4.26325 7.12148C4.18237 7.19681 4.16504 7.31561 4.16504 7.81396C4.16504 8.14427 4.18237 8.39635 4.20259 8.38186C4.2517 8.3326 4.43369 8.50066 4.43369 8.59917C4.43369 8.63683 4.41635 8.66871 4.39613 8.66871C4.37013 8.66871 4.34702 9.41045 4.33547 10.3173C4.32969 11.2242 4.34702 11.966 4.36725 11.966C4.39324 11.966 4.44235 12.0268 4.47413 12.1022C4.53479 12.2325 4.55501 12.2383 5.07208 12.2383C5.86935 12.2383 5.82602 12.3369 5.81158 10.3695C5.80002 9.50896 5.79136 8.78171 5.7798 8.75273C5.71914 8.52094 5.74803 8.50935 6.51352 8.50935C7.34257 8.50935 7.65455 8.4485 7.83942 8.25437L7.96363 8.1182L7.98097 5.77417C7.99252 4.19507 7.97519 3.38959 7.93764 3.32005C7.80187 3.07087 7.65744 3.05059 6.01378 3.0332C4.87565 3.02451 4.44813 3.0361 4.40769 3.08536ZM6.53374 4.38051C6.53952 4.43556 6.53952 5.01215 6.5453 5.66697C6.5453 6.32179 6.56263 6.81145 6.5713 6.7593C6.61463 6.59704 6.69551 6.66079 6.69551 6.86071C6.69551 7.01717 6.67818 7.04904 6.60885 7.02297C6.54819 7.00268 6.53374 7.01717 6.55397 7.08671C6.57996 7.16784 6.54819 7.17943 6.22466 7.16204C6.01956 7.15045 5.83758 7.10699 5.79425 7.06932C5.70759 6.9824 5.70181 6.82594 5.78269 6.82594C5.82024 6.82594 5.8318 6.44638 5.80869 5.58874C5.79713 4.90784 5.79713 4.33415 5.81447 4.31966C5.83469 4.30228 6.00223 4.28779 6.19288 4.28779C6.48175 4.29069 6.53374 4.30518 6.53374 4.38051ZM9.018 3.06797C8.92556 3.17518 8.95733 4.37471 9.05555 4.35443C9.08733 4.34864 9.1191 4.38051 9.1191 4.42397C9.1191 4.46743 9.08733 4.4993 9.05555 4.48771C9.00644 4.48192 8.98044 4.56884 8.96889 4.76297C8.95733 4.98897 8.96889 5.04402 9.02377 5.01215C9.07866 4.98028 9.07866 4.98607 9.03533 5.04982C8.94867 5.16282 8.8909 11.2851 8.97178 11.6473C9.02089 11.8414 9.07866 11.9457 9.21443 12.0413L9.39352 12.1804L10.8061 12.1601C12.3804 12.1398 12.4931 12.1109 12.6635 11.7805C12.7819 11.5488 12.831 9.72627 12.8021 6.55358C12.7906 5.26133 12.7819 3.97487 12.7819 3.70541C12.7819 3.39248 12.7617 3.19256 12.7213 3.16359C12.6837 3.1462 12.6462 3.15779 12.6346 3.18966C12.6086 3.28238 12.5162 3.27079 12.5162 3.17228C12.5162 3.10854 12.4295 3.09115 12.0569 3.09115C11.3174 3.09115 11.3723 2.91151 11.378 5.4033C11.3838 6.55358 11.3983 7.81976 11.4156 8.20801C11.4416 8.72086 11.4329 8.92658 11.3896 8.92658C11.2914 8.92658 11.3203 9.1323 11.4271 9.19024C11.4907 9.23371 11.5022 9.25978 11.4531 9.28876C11.4156 9.32063 11.3838 9.58719 11.3723 10.0711C11.3549 10.6969 11.3405 10.8273 11.2596 10.9084C11.1672 11.0011 11.1585 11.0011 11.0921 10.9084C11.0112 10.807 10.7859 10.7896 10.6241 10.8765C10.4623 10.9577 10.2948 10.8012 10.3381 10.6071C10.3757 10.4448 10.4017 5.95961 10.3757 4.33415L10.3554 3.22154L10.1244 3.09695C9.96837 3.01002 9.85571 2.97815 9.78927 3.01002C9.68817 3.05349 9.32708 3.05349 9.1711 3.00423C9.12199 3.00423 9.05555 3.02451 9.018 3.06797ZM13.819 3.06218C13.7583 3.14331 13.7381 5.10487 13.7987 5.36853C13.8247 5.46994 13.8247 5.72492 13.8103 5.93643C13.7901 6.14794 13.793 6.34207 13.8218 6.37974C13.8912 6.46666 13.8218 6.66658 13.7236 6.66658C13.6803 6.66658 13.6601 6.69266 13.6745 6.72163C13.6919 6.7535 13.6687 6.81435 13.6254 6.86071C13.5272 6.95922 13.5012 7.71545 13.5936 7.7734C13.6254 7.79078 13.6485 7.85453 13.6485 7.90958C13.6485 7.96463 13.6745 8.01679 13.7092 8.02837C13.7583 8.04576 13.7727 8.52963 13.7727 9.8016C13.767 10.8186 13.7901 11.5835 13.8218 11.6241C13.8478 11.656 13.8478 11.6994 13.8276 11.711C13.8016 11.7284 13.7901 11.8414 13.8016 11.9602L13.8218 12.1804L15.2604 12.163C17.4038 12.1456 17.2796 12.2992 17.2854 9.63935C17.2854 7.85163 17.2796 7.7705 17.1785 7.6604C16.8549 7.30981 16.8174 7.24317 16.9041 7.19681C17.1207 7.07802 17.1727 6.82884 17.1843 6.01756C17.19 5.58584 17.2016 4.80064 17.2103 4.2733C17.2276 3.36641 17.2218 3.30556 17.112 3.20415C16.9445 3.0361 16.6932 3.00423 15.2315 2.99843C14.2118 2.99843 13.8623 3.01002 13.819 3.06218ZM15.8352 4.29648C15.867 4.35153 15.867 4.76007 15.8352 6.34497C15.8295 6.73902 15.8035 6.7622 15.3991 6.69556L15.168 6.66368L15.1362 6.1943C15.1189 5.93353 15.1044 5.68725 15.0986 5.64379C15.0986 5.60033 15.116 5.26423 15.1362 4.89915L15.1737 4.23853H15.4857C15.6562 4.23564 15.8121 4.26171 15.8352 4.29648ZM15.8121 8.09502C15.8324 8.12689 15.8555 8.54412 15.8555 9.0193C15.8555 9.49447 15.8612 10.1058 15.8612 10.3811C15.867 10.6505 15.8555 10.8997 15.8352 10.9258C15.7919 10.9953 15.2315 10.9693 15.1391 10.8881C15.0784 10.8389 15.0698 10.7751 15.1015 10.6274C15.1275 10.5202 15.1506 9.90881 15.1506 9.26558C15.1506 8.26017 15.1622 8.09212 15.2373 8.03996C15.3384 7.96463 15.7544 8.0023 15.8121 8.09502Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_400_1153">
                            <rect width="25.8333" height="15" fill="white" transform="translate(0.083374 0.100952)"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <span>{user.nickname}</span>
                    </div>
                </div>
            </div>
            <div className="absolute z-10 w-full h-full top-0" style={{background: "radial-gradient(#00000000, #19191980)"}}></div>
            <div className="bg-gradient-to-t from-[#191919] to-[#1919198F] absolute z-10 w-full h-full top-0"></div>
        </section>
    )
}