import { GamesFilter } from "../components/GamesPage/GamesFilter";
import { GamesPromo } from "../components/GamesPage/GamesPromo";
import { GamesTabs } from "../components/GamesPage/GamesTabs";
import { Header } from "../components/UI/Header";
import { NavBar } from "../components/UI/NavBar";
//
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  getEventsListData,
  getEventsLoadingStatus,
  getEventsList,
  getSelectedEvent,
} from "../store/reducers/eventsSlice";
//
export const GamesPage = () => {
  //
  const dispatch = useDispatch();
  const isLoading = useSelector(getEventsLoadingStatus());
  const events = useSelector(getEventsListData());
  const navigate = useNavigate();
  //
  useEffect(() => {
    dispatch(getEventsList());
  }, []);
  
  useEffect(() => {
    dispatch(getEventsList());
  }, []);
//
  useEffect(() => {
    if (!isLoading) {
      console.log(events);
    }
  }, [isLoading]);

  //
  const [popupVisible, setPopupVisible] = useState(false);
  //
  return (
    <div>
      {!isLoading && events && (
        <div className="bg-darkgrey min-h-[100vh]">
          <Header />
          <GamesPromo />
          <main className="wrap text-white pb-20">
            <GamesTabs setPopupVisible={setPopupVisible} events={events} />
            <GamesFilter
              popupVisible={popupVisible}
              setPopupVisible={setPopupVisible}
              changeFilter={() => {
                console.log("you clicked on filter");
              }}
            />
          </main>
          <footer className="p-4 bg-darkgrey rounded-lg shadow  md:p-6 dark:bg-gray-800 pb-24">
                <div className=" md:flex md:items-center md:justify-between">
                    <span className="text-sm text-white/50 sm:text-center dark:text-gray-400">© 2022 GoodGames™ </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm text-white/50 dark:text-white/40 sm:mt-0">
                        <li>
                            <a href="/policy" className="mr-4 hover:underline md:mr-6 ">Политика конфиденциальности</a>
                        </li>
                        <li>
                            <a href="/personal-data" className="mr-4 hover:underline md:mr-6">Политика обработки персональных данных</a>
                        </li>
                        <li>
                            <a href="/terms-of-use" className="mr-4 hover:underline md:mr-6">Пользовательское соглашение</a>
                        </li>
                    </ul>
                </div>
            </footer>
          <NavBar />
        </div>
      )}
    </div>
  );
};
