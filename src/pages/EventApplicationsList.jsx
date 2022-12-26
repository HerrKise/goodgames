import { useDispatch, useSelector } from "react-redux";
import {
    getEventsLoadingStatus,
    getSelectedEventData
} from "../store/reducers/eventsSlice";
import { useEffect, useState } from "react";
import eventService from "../services/event.service";

import logopic from "../assets/Main/logo.png";
import { NavLink, useNavigate } from "react-router-dom";

const EventApplicationsList = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getEventsLoadingStatus());
    const selectedEvent = useSelector(getSelectedEventData());
    const [eventSettings, setEventSettings] = useState(selectedEvent);
    console.log(selectedEvent);

    useEffect(() => {
        if (!isLoading && selectedEvent) {
            console.log(selectedEvent);
            setEventSettings(selectedEvent);
        }
    }, []);

    useEffect(() => {
        console.log(eventSettings);
    }, [eventSettings]);

    const handleParticipantStatusChange = (e, id, status) => {
        e.preventDefault();
        eventService.setApplicationStatus({
            id: id,
            isApproved: status,
            eventId: eventSettings.id
        });
    };
    return (
        <div className="bg-darkgrey min-h-[100vh]">
            <NavLink
                        className="w-full flex items-center justify-center fixed top-0 bg-darkgrey pt-12 pb-3 z-10"
                        to="/"
                    >
                        <img
                            src={logopic}
                            alt="logopic"
                            className="w-[132px]"
                        />
                    </NavLink>
            <main className="wrap pt-28 text-white pb-20 max-w-[400px]">
                <h1 className="h1 text-center">Список заявок на участие</h1>
                <ul className="mt-5 space-y-3">
                    {eventSettings.participants.map((participant) => (
                        <li key={participant.id} className="bg-grey rounded-xl p-3">
                            <div>
                                <p><span className="p">ID участника:</span> {participant.id}</p>
                                <p><span className="p">Статус заявки:</span> {participant.isApproved === true ? "Одобрена" : "На проверке"}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-5 mt-5">
                                <button
                                    className="p-3 bg-yellow rounded-lg text-darkgrey text-sm font-semibold md:text-base"
                                    onClick={(e) =>
                                        handleParticipantStatusChange(
                                            e,
                                            participant.id,
                                            "True"
                                        )
                                    }
                                >
                                    Одобрить
                                </button>
                                <button
                                    className="p-3 bg-darkgrey rounded-lg text-sm font-semibold md:text-base"
                                    onClick={(e) =>
                                        handleParticipantStatusChange(
                                            e,
                                            participant.id,
                                            "False"
                                        )
                                    }
                                >
                                    Отклонить
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </main>
            
        </div>
    );
};

export default EventApplicationsList;
