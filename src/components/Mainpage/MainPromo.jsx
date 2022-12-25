import { Button } from "../UI/Button"

export const MainPromo = () => {
    return(
        <section className="w-full h-[600px] relative">
            <img src={'https://c4.wallpaperflare.com/wallpaper/891/529/106/pubg-poster-hearthstone-battlegrounds-steam-software-comic-art-hd-wallpaper-preview.jpg'} alt="promopic" className="absolute top-0 h-full w-full object-left object-cover"/>
            <div className="wrap relative z-20 h-full flex flex-col items-center justify-end pb-8 md:pb-14">
                <p className="bg-[#FFFFFF33] text-white text-[10px] leading-3 px-4 py-2 font-bold rounded-full mb-1 md:mb-4 md:text-sm">ГЛАВНОЕ СОБЫТИЕ</p>
                <h1 className="text-4xl font-bold text-center mb-6 md:mb-9">Сезонный турнир <br /> Призовой фонд 50.000 ₽</h1>
                <Button text="ПОДРОБНЕЕ" info="true"></Button>
            </div>
            <div className="absolute z-10 w-full h-full top-0" style={{background: "radial-gradient(#00000000, #19191980)"}}></div>
            <div className="bg-gradient-to-t from-[#191919] to-0 absolute z-10 w-full h-full top-0"></div>
        </section>
    )
}