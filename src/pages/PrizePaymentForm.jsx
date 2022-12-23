import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import {
    getEventsLoadingStatus,
    getSelectedEvent,
    getSelectedEventData
} from "../store/reducers/eventsSlice";
import teamService from "../services/team.service";
import staffService from "../services/staff.service";

const PrizePaymentForm = () => {
    const [, set] = useState();
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

    const teamsIds = [];

    useEffect(() => {
        if (event && lastStage && event.regime !== "Solo") {
            lastStage.winners.map((winner) => {
                const data = teamService.getTeammates(winner.id);
                teamsIds.push({
                    teamId: winner.id,
                    team: [
                        ...data.map((person) => {
                            if (person.teammateType === "Teammate") {
                                return person.user.id;
                            }
                        })
                    ]
                });
            });
        }
    }, [event]);

    let prizeListResults = [];
    if (lastStage) {
        lastStage.groups[0].results.map((result) => {
            lastStage.winners.map((winner) => {
                if (winner.id === result.userId) {
                    prizeListResults.push(result);
                }
            });
        });
    }
    if (prizeListResults.length > 0) {
        prizeListResults.map((result) => ({
            userId: result.userId,
            prize:
                result.kills * event.prize.prizePerKill +
                event.prize.placementPrizes.find(
                    (placement) => placement.number === Number(result.place)
                ).prize
        }));
    }

    const handlePayThePrize = () => {
        if (event.regime === "Solo") {
            prizeListResults.map((result) =>
                staffService.giveCoins({
                    userId: result.userId,
                    coins: result.prize
                })
            );
        } else {
            prizeListResults.map((result) => {
                teamsIds
                    .find((team) => team.teamId === result.userId)
                    .team.map((user) =>
                        staffService.giveCoins({
                            userId: user,
                            coins: result.prize / Number(team.length)
                        })
                    );
            });
        }
    };
    return (
        <>
            {event &&
                event.regime === "Solo" &&
                prizeListResults.length > 0 && (
                    <ul>
                        {prizeListResults.map((prize) => (
                            <li key={prize.userId}>
                                айди участника: {prize.userId}, сумма к выплате:{" "}
                                {prize.prize}
                            </li>
                        ))}
                    </ul>
                )}

            {event &&
                event.regime !== "Solo" &&
                prizeListResults.length > 0 && (
                    <ul>
                        {prizeListResults.map((prize) => (
                            <li key={prize.userId}>
                                айди команды: {prize.userId}, сумма к выплате:{" "}
                                {prize.prize}
                            </li>
                        ))}
                    </ul>
                )}
            <button onClick={handlePayThePrize}>Выплатить приз</button>
        </>
    );
};

export default PrizePaymentForm;
