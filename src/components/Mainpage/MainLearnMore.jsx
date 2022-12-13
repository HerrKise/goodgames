import { Link } from "react-router-dom"
import { Button } from "../UI/Button"


export const MainLearnMore = () => {
    return (
        <section className="wrap flex flex-col items-center py-10 space-y-5 relative">
            <div className="absolute z-0 blur-lg">
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="200" height="200" rx="100" fill="#262626"/>
                </svg>
            </div>
                <h1 className="h1 text-center z-10">Играй, развивайся&nbsp;и зарабатывай вместе&nbsp;с&nbsp;GoodGames!</h1>
                <p className="p mx-auto max-w-[284px] text-center">
                    Поcоревнуйся с&nbsp;лучшими игроками в&nbsp;широкоформатных турнирах, мини-турнирах и&nbsp;практических играх. Врывайся в&nbsp;топ рейтинга и получай крупные призы.
                </p>
                <Link className="block">
                    <Button white={true} text="Зарегистрироваться"></Button>
                </Link>
                <Link className="block">
                    <Button text="Обучение"></Button>
                </Link>
        </section>
    )
}