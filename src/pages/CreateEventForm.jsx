import { useState } from "react";

const CreateEventForm = () => {
    const [mods, setMods] = useState([]);
    return (
        <section className="bg-grey-300 w-[100%] min-h-[100vh]">
            <div className="w-[1024px] mx-auto flex flex-col items-center">
                <h2>Создание ивента</h2>
                <form>
                    <div className="flex flex-col items-center">
                        <p>Тип ивента</p>
                        <select>
                            <option value="tour">Турнир</option>
                            <option value="mtour">Мини-турнир</option>
                            <option value="practice">Практис</option>
                        </select>
                        <p>Дата</p>
                        <input type="date"></input>
                        <p>Время</p>
                        <input type="time"></input>
                        <p>Модератор</p>
                        <select>
                            <option>mod1</option>
                            <option>mod2</option>
                            <option>mod3</option>
                            <option>mod4</option>
                            <option>mod5</option>
                        </select>
                        <p>Тип матча</p>
                        <select>
                            <option>Free</option>
                            <option>Paid</option>
                        </select>
                        <p>Карта</p>
                        <select>
                            <option>Erangel</option>
                            <option>Мирамар</option>
                            <option>Санук</option>
                            <option>Викенди</option>
                            <option>Ливик</option>
                            <option>Arcade Эрангель</option>
                            <option>TDM Склад</option>
                        </select>
                        <p>Режим</p>
                        <select>
                            <option>Solo</option>
                            <option>Duo</option>
                            <option>Squad</option>
                        </select>
                        <p>Вид</p>
                        <select>
                            <option>1pw</option>
                            <option>3pw</option>
                        </select>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default CreateEventForm;
