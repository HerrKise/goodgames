import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import {
    getEventsLoadingStatus,
    getSelectedEvent,
    getSelectedEventData
} from "../store/reducers/eventsSlice";

const PrizePaymentForm = () => {
    const { eventId } = useParams();
    const dispatch = useDispatch();
    const event = useSelector(getSelectedEventData(eventId));
    const isLoading = useSelector(getEventsLoadingStatus());
    useEffect(() => {
        dispatch(getSelectedEvent({ id: eventId }));
    }, []);
    useEffect(() => {
        console.log(event);
    }, [event]);

    const lastStage =
        event &&
        event.stages.find(
            (stage) => Number(stage.id.slice(-7, -6)) === event.stages.length
        );
    console.log(lastStage);
    return null;
};

export default PrizePaymentForm;
