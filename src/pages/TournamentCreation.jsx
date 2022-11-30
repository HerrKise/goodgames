const TournamentCreation = () => {
    return (
        <section className="bg-grey-300 w-[100%] min-h-[100vh]">
            <div className="w-[1024px] mx-auto flex flex-col items-center">
                <h2>Создание ивента</h2>
                <form>
                    <div>
                        <p>Тип ивента</p>
                        <select>
                            <option value="tour">Турнир</option>
                            <option value="tour">Мини-турнир</option>
                            <option value="tour">Практис</option>
                        </select>
                        <p>Дата</p>
                        <input type="date"></input>
                        <p>Время</p>
                        <input type="time"></input>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default TournamentCreation;
