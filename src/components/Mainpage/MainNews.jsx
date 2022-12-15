import placeholder from "../../assets/Main/placeholder.jfif";
// 
export const MainNews = () => {
  const news = [
    {
      title: "Бeсплатные мини-турниры",
      date: "30.07.2022",
      description:
        "Каждый день GoodGames проводит бесплатные мини-турниры с призовым фондом!",
    },
    {
      title: "Бeсплатные мини-турниры",
      date: "30.07.2022",
      description:
        "Каждый день GoodGames проводит бесплатные мини-турниры с призовым фондом!",
    },
    {
      title: "Бeсплатные мини-турниры",
      date: "30.07.2022",
      description:
        "Каждый день GoodGames проводит бесплатные мини-турниры с призовым фондом!",
    },
  ];
  return (
    <section className="py-5 wrap">
      <h1 className="h1 pb-5">Новости</h1>
      <ul className="grid grid-cols-2 gap-4">
        {news.map((newsitem, i) => {
          return (
            <li
              key={i}
              className="h-[220px] bg-gray-800 rounded-2xl px-2 py-3 relative overflow-clip group first:col-span-2 first:h-[360px]"
            >
              <img
                src={placeholder}
                alt="placeholder"
                className="absolute top-0 left-0 h-full w-full object-top object-cover"
              />
              <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-[#191919] to-0 group-first:bg-gradient-to-br"></div>
              <div className="w-full h-full flex flex-col justify-between items-start relative z-10 group-first:justify-start group-first:space-y-2">
                <div className="space-y-2">
                  <p className="text-[10px] leading-2">{newsitem.date}</p>
                  <h3 className="h3">{newsitem.title}</h3>
                </div>
                <p className="p">{newsitem.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
