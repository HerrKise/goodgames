import { useDispatch } from "react-redux";
import { register } from "../store/reducers/userSlice";

export default function () {
    return (
        <section className="w-[100%] bg-black">
            <div className="w-[1024px] mx-auto h-[900px] flex flex-col justify-center items-center">
                <form className="bg-[#161823] w-[500px] h-[600px] py-[30px] px-[20px] rounded-[20px]">
                    <div className="flex flex-col justify-center items-center border-b-[1px] border-gray-400 pb-[10px]">
                        <h2 className="text-white">
                            Добро пожаловать на Good Games!
                        </h2>
                        <p className="text-gray-500">
                            Пожалуйста указывайте только достоверные данные!
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-between h-[70%] py-[20px] border-b-[1px] border-gray-400">
                        <div className="flex justify-between w-[80%] items-center">
                            <label className="text-gray-500">Логин</label>
                            <input
                                type="text"
                                id="login"
                                name="login"
                                placeholder=""
                                required
                                className="border-[1px] w-[200px] border-[#9e9e9e] rounded-[5px] text-[16px] h-[40px] px-[20px] bg-gray-600"
                            />
                        </div>
                        <div className="flex justify-between w-[80%] items-center">
                            <label className="text-gray-500">ID в PUBG</label>
                            <input
                                type="text"
                                id="pubgID"
                                name="pubgID"
                                placeholder=""
                                required
                                className="border-[1px] w-[200px] border-[#9e9e9e] rounded-[5px] text-[16px] h-[40px] px-[20px] bg-gray-600"
                            />
                        </div>
                        <div className="flex justify-between w-[80%] items-center">
                            <label className="text-gray-500">Пароль</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder=""
                                required
                                className="border-[1px] w-[200px] border-[#9e9e9e] rounded-[5px] text-[16px] h-[40px] px-[20px] bg-gray-600"
                            />
                        </div>
                        <div className="flex justify-between w-[80%] items-center">
                            <label className="text-gray-500">
                                Повторите пароль
                            </label>
                            <input
                                type="password-rep"
                                id="password-rep"
                                name="password-rep"
                                placeholder=""
                                required
                                className="border-[1px] w-[200px] border-[#9e9e9e] rounded-[5px] text-[16px] h-[40px] px-[20px] bg-gray-600"
                            />
                        </div>
                        <div className="flex justify-between w-[80%] items-center">
                            <label className="text-gray-500">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                placeholder=""
                                required
                                className="border-[1px] w-[200px] border-[#9e9e9e] rounded-[5px] text-[16px] h-[40px] px-[20px] bg-gray-600"
                            />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex w-[250px] items-center justify-between">
                            <input type="checkbox" required />
                            <label className="text-gray-500 ml-[20px]">
                                Я подтверждаю, что согласен с пользовательским
                                соглашением и политикой конфиденциальности
                            </label>
                        </div>
                        <button className="bg-amber-500 w-[150px] h-[50px] rounded-[10px]">
                            Готово!
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
