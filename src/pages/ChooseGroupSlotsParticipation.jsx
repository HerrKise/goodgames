import { Collapse } from "react-collapse";
import { useCallback } from "react";
import { useState, useEffect } from "react";

export const ChooseGroupSlotsParticipation = ({group, i}) => {

    const [isSlotsOpen, setIsSlotsOpen] = useState(false);

    const openSlots = useCallback(
        () => setIsSlotsOpen(!isSlotsOpen),
        [isSlotsOpen]
    );

    return (
        <li key={i} className="bg-grey p-3 rounded-lg">
            <div className="flex justify-between items-center" onClick={openSlots}>
                <h3 className="h3">{group.name}</h3>
                <p className="p">Доступно 1/{group.slots.length}</p>
            </div>
            <Collapse isOpened={isSlotsOpen}>
                <ul className="flex flex-wrap gap-5 py-3 text-sm font-bold">
                    {group.slots.map((slot, i) => {
                        return (
                            <li key={i} className={
                                (slot.type === "Paid" ? "bg-[#00F087] text-darkgrey font-bold rounded-lg" : "") +
                                (slot.type === "Free" ? "bg-yellow text-darkgrey font-bold rounded-lg" : "") +
                                (slot.type === "Reserved" ? "border-2 font-bold opacity-50 rounded-lg" : "") +
                                (slot.type === "Occupied" ? "bg-darkgrey font-bold rounded-lg" : "") +
                                " p-2 flex flex-col items-center w-[64px]"
                            }>
                                <p>{slot.num}</p>
                                <p>Слот</p>
                            </li>
                        )
                    })}
                </ul>
            </Collapse>
        </li>
    )
}