import { useDispatch, useSelector } from "react-redux";
import {
    getEventsLoadingStatus,
    getSelectedEventData
} from "../store/reducers/eventsSlice";
import { useEffect, useState } from "react";
import eventService from "../services/event.service";

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
        <div>
            <h3>Список поданных заявок на участие</h3>
            <ul>
                {eventSettings.participants.map((participant) => (
                    <li key={participant.id}>
                        <p>
                            {participant.id}, status: {participant.isApproved}
                        </p>
                        <button
                            onClick={(e) =>
                                handleParticipantStatusChange(
                                    e,
                                    participant.id,
                                    "True"
                                )
                            }
                        >
                            Одобрить заявку
                        </button>
                        <button
                            onClick={(e) =>
                                handleParticipantStatusChange(
                                    e,
                                    participant.id,
                                    "False"
                                )
                            }
                        >
                            Отклонить заявку
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventApplicationsList;
