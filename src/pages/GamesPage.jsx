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
          <NavBar />
        </div>
      )}
    </div>
  );
};
