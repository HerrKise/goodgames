import { Collapse } from "react-collapse";
import { useCallback } from "react";
import { useState } from "react";
import groupService from "../services/group.service";
import { useDispatch } from "react-redux";
import { getSelectedEvent } from "../store/reducers/eventsSlice";

export const ChooseGroupSlotsParticipation = ({
    group,
    eventId,
    participantId
}) => {
    const dispatch = useDispatch();

    const [isSlotsOpen, setIsSlotsOpen] = useState(false);
    const [slotBusy, setSlotBusy] = useState(null);
    console.log(group);

    const openSlots = useCallback(
        () => setIsSlotsOpen(!isSlotsOpen),
        [isSlotsOpen]
    );

    const handlePickSlot = (slotId) => {
        groupService
            .join({
                groupId: group.id,
                eventId: eventId,
                participantId: participantId,
                slotId: Number(slotId)
            })
            .then(() =>
                setSlotBusy({ slotId: slotId, message: "Вы заняли слот" })
            );
    };
    /* slot.type === "Paid"
                                        ? "bg-[#00F087] text-darkgrey font-bold rounded-lg"
                                        : "") +
                                    (slot.type === "Free"
                                        ? "bg-yellow text-darkgrey font-bold rounded-lg"
                                        : "") +
                                    (slot.type === "Reserved"
                                        ? "border-2 font-bold opacity-50 rounded-lg"
                                        : "") +
                                    (slot.type === "Occupied"
                                        ? "bg-darkgrey font-bold rounded-lg"
                                        : "") +
                                    " p-2 flex flex-col items-center w-[64px]" */

    return (
        <li key={group.id} className="bg-grey p-3 rounded-lg">
            <div
                className="flex justify-between items-center"
                onClick={openSlots}
            >
                <h3 className="h3">{group.name}</h3>
                <p className="p">Доступно ???</p>
            </div>
            <Collapse isOpened={isSlotsOpen}>
                <ul className="flex flex-wrap gap-5 py-3 text-sm font-bold">
                    {group.reserveParticipants.length !== 0 &&
                        group.reserveParticipants.map((slot) => {
                            return (
                                <li
                                    key={slot.slotId}
                                    className="border-2 font-bold opacity-50 rounded-lg"
                                >
                                    <p>{slot.slotId}</p>
                                    <p>
                                        {slot.participantId === null
                                            ? "Свободный слот"
                                            : slot.participantName}
                                        {/* 
                                        {slot.participantId === "" &&
                                            slotBusy === null &&
                                            "Свободный слот"}
                                        {slot.participantId === "" &&
                                            slotBusy !== null && slot.slotId === slotBusy.slotId &&
                                            slotBusy.message}
                                        {slot.participantId !== "" &&
                                            slot.participantId} */}
                                    </p>
                                    {slot.participantId === null && (
                                        <button
                                            onClick={() =>
                                                handlePickSlot(slot.slotId)
                                            }
                                        >
                                            Занять слот
                                        </button>
                                    )}
                                </li>
                            );
                        })}
                    {group.paidParticipants.length !== 0 &&
                        group.paidParticipants.map((slot) => {
                            return (
                                <li
                                    key={slot.slotId}
                                    className="bg-[#00F087] text-darkgrey font-bold rounded-lg"
                                >
                                    <p>{slot.slotId}</p>
                                    <p>
                                        {slot.participantId === null
                                            ? "Свободный слот"
                                            : slot.participantName}
                                    </p>
                                    {slot.participantId === null && (
                                        <button
                                            onClick={() =>
                                                handlePickSlot(slot.slotId)
                                            }
                                        >
                                            Занять слот
                                        </button>
                                    )}
                                </li>
                            );
                        })}
                    {group.participants.length !== 0 &&
                        group.participants.map((slot) => {
                            return (
                                <li
                                    key={slot.slotId}
                                    className="bg-yellow text-darkgrey font-bold rounded-lg"
                                >
                                    <p>{slot.slotId}</p>
                                    <p>
                                        {slot.participantId !== null &&
                                            slot.participantName}
                                    </p>
                                    {slot.participantId === null && (
                                        <button
                                            onClick={() =>
                                                handlePickSlot(slot.slotId)
                                            }
                                        >
                                            Занять слот
                                        </button>
                                    )}
                                </li>
                            );
                        })}
                </ul>
            </Collapse>
        </li>
    );
};
