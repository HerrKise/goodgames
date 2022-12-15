

export const ProFileTeamsItem = () => {
    return (
        <li>
            {
                myTeams.map((team) => {
                    return (
                        <li
                            key={team.id}
                            className="bg-grey rounded-xl p-5 relative w-full"
                        >
                            <div onClick={openInfo} className="flex items-center justify-between">
                                <div className='flex items-center space-x-3'>
                                    <div className="w-8 h-8 rounded-full bg-yellow">
                                        {team.logo ? <img
                                                        src={team.logo}
                                                        alt="tl"
                                                        className="w-full h-full"
                                                    />
                                                    : <div className="w-full h-full"></div>
                                        }
                                    </div>
                                    <h3 className="h3">{team.title}</h3>
                                    <p className="p">#{team.tag}</p>
                                </div> 
                            </div>

                                <button
                                    onClick={() => {
                                        setId(team.id);
                                        setEditVisible(true);
                                    }}
                                >
                                    Редактировать
                                </button>
                                <button
                                    onClick={() => {
                                        deleteTeam(team.id);
                                    }}
                                >
                                    Удалить
                                </button>
                                <button
                                    onClick={() => {
                                        getCode(team.id);
                                    }}
                                >
                                    Получить код для вступления
                                </button>
                                <p>
                                    Код для вступления {codeSelector}
                                </p>
                                <button
                                    onClick={() => {
                                        getManagerCode(team.id);
                                    }}
                                >
                                    Получить код для менеджера
                                </button>
                                <p>Код для менеджера {managerCode}</p>
                                <button
                                    onClick={() => {
                                        leaveTeam(team.id);
                                    }}
                                >
                                    Покинуть команду
                                </button>
                        </li>
                    );
                })
            }
        </li>
    )
}