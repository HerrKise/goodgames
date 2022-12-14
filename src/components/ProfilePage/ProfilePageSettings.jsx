import { Link } from "react-router-dom"
import { Header } from "../UI/Header"
import { NavBar } from "../UI/NavBar"

export const ProfilePageSettings = () => {
    return (
        <div className="bg-darkgrey min-h-[100vh]">
            <Header/>
            <main className="wrap pt-28 text-white pb-20">
                <h1 className="h1">Настройки</h1>
                <form className="pt-5 space-y-[10px]">
                    <h3 className="text-base">Основное</h3>
                    <div className="bg-grey w-full py-4 px-7 rounded-lg text-center text-sm font-bold">
                        <input type="file" name="avatar" id="avatar" className="hidden" />
                        <label htmlFor="avatar" >Изменить аватар профиля</label>
                    </div>
                    <input type="text" placeholder="Имя пользователя" 
                        className="bg-[#26262633] w-full py-4 px-7 rounded-lg"
                    />
                    <h3 className="text-base">PUBG</h3>
                    <input type="text" placeholder="Ник в PUBG" 
                        className="bg-[#26262633] w-full py-4 px-7 rounded-lg"
                    />
                    <button className='w-full rounded-lg bg-yellow py-4 text-darkgrey text-sm font-bold'>
                        <span>Изменить настройки профиля</span>
                    </button>
                </form>
                <form className="pt-5 space-y-[10px]">
                    <h3 className="text-base">Сменить пароль</h3>
                    <input type="password" placeholder="Старый пароль" 
                        className="bg-[#26262633] w-full py-4 px-7 rounded-lg"
                    />
                    <input type="password" placeholder="Новый пароль" 
                        className="bg-[#26262633] w-full py-4 px-7 rounded-lg"
                    />
                    <button className='w-full rounded-lg bg-grey py-4 text-sm font-bold'>
                        <span>Изменить пароль</span>
                    </button>
                </form>
                <h3 className="pt-5 text-base">Верификация аккаунта</h3>
                <p className="p py-3">
                    Верификация аккаунта на нашем сервисе нужна для того, чтобы наши пользователи могли пользоваться всеми услугами, которые мы предоставляем. Мы не требуем никаких дополнительных документов от пользователей, но рекомендуем пройти верификацию. Это делается для того, чтобы у нас была возможность работать с вашим аккаунтом, и для вас было безопаснее. Итак, вы прошли верификацию (в случае если вы ее не проходили). Теперь вам нужно будет ввести: 1. Логин, который вы использовали при регистрации на сайте.
                </p>
                <Link>
                    <button className='w-full rounded-lg bg-grey py-4 text-sm font-bold'>
                        <span>Подтвердить аккаунт</span>
                    </button>
                </Link>
            </main>
            <NavBar/>
        </div>
    )
}