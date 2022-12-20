import { Collapse } from "react-collapse";
import { useCallback } from "react";
import { useState } from "react";
import groupService from "../services/group.service";

export const ChooseGroupSlotsParticipation = ({
    group,
    eventId,
    participantId
}) => {
    const [isSlotsOpen, setIsSlotsOpen] = useState(false);
    console.log(group);

    const openSlots = useCallback(
        () => setIsSlotsOpen(!isSlotsOpen),
        [isSlotsOpen]
    );

    const handlePickSlot = (slotId) => {
        groupService.join({
            groupId: group.id,
            eventId: eventId,
            participantId: participantId,
            slotId: Number(slotId)
        });
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
                                        {slot.participantId === ""
                                            ? "Свободный слот"
                                            : slot.participantName}
                                    </p>
                                    <button
                                        onClick={() =>
                                            handlePickSlot(slot.slotId)
                                        }
                                    >
                                        Занять слот
                                    </button>
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
                                        {slot.participantId === ""
                                            ? "Свободный слот"
                                            : slot.participantName}
                                    </p>
                                    <button
                                        onClick={() =>
                                            handlePickSlot(slot.slotId)
                                        }
                                    >
                                        Занять слот
                                    </button>
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
                                        {slot.participantId === ""
                                            ? "Свободный слот"
                                            : slot.participantName}
                                    </p>
                                    <button
                                        onClick={() =>
                                            handlePickSlot(slot.slotId)
                                        }
                                    >
                                        Занять слот
                                    </button>
                                </li>
                            );
                        })}
                </ul>
            </Collapse>
        </li>
    );
};
