import { useState, useEffect } from "react";
import CreateGroupForm from "./createGroupForm";
import moment from "moment";

const CreateStageForm = ({
    eventType,
    regime,
    onChangeStage,
    index,
    state,
    onChangeTime,
    addGroup,
    deleteGroup,
    onChangeGroupTime,
    onChangeGroup,
    onGroupChangeToNumber,
    removeModerator,
    pickModerator,
    onChangeParticipants,
    onChangeReserveParticipants,
    onChangePaidParticipants,
    deleteStage
}) => {
    /* useEffect(() => {
        if (eventType === "practice") {
            setGroupsQuantity((prevState) => [
                ...prevState,
                prevState.length + 1
            ]);
        }
    }, []); */

    const handleAddGroup = (e) => {
        e.preventDefault();
        addGroup(index);
    };

    const handleStageSettingsChange = (e) => {
        onChangeStage(e, index);
    };
    const handleTimeStageChange = (e) => {
        onChangeTime(e, index);
    };

    const handleDelete = (e) => {
        e.preventDefault();
        deleteStage(index);
    };
    return (
        <section className="bg-darkgrey/50">
            <div className="wrap">
                <form className="pt-5 space-y-[10px] rounded-lg p-2">
                    <div className="flex">
                        <input
                            value={state.name}
                            onChange={handleStageSettingsChange}
                            name="name"
                            className="bg-darkgrey w-full p-3 p rounded-lg"
                        />
                    </div>
                    <div className="flex items-center justify-between space-x-4">
                        <label htmlFor="stageStart" className="p w-28">
                            Начало этапа
                        </label>
                        <input
                            type="datetime-local"
                            name="stageStart"
                            onChange={handleTimeStageChange}
                            value={moment(state.stageStart).format(
                                "YYYY-MM-DDTHH:mm"
                            )}
                            className="bg-darkgrey w-[160px] p-2 p rounded-lg"
                        />
                    </div>

                    <button
                        type="button"
                        onClick={handleDelete}
                        className="w-full rounded-lg bg-darkgrey py-3 p font-bold"
                    >
                        Удалить этап
                    </button>
                    <div className=" bg-white rounded-lg">
                        <button
                            type="button"
                            onClick={handleAddGroup}
                            className="w-full text-black py-3 p font-bold"
                        >
                            Добавить группу
                        </button>
                        {state.groups.map((group) => (
                            <CreateGroupForm
                                regime={regime}
                                eventType={eventType}
                                key={state.groups.indexOf(group)}
                                index={state.groups.indexOf(group)}
                                stageIndex={index}
                                state={group}
                                onChangeTime={onChangeGroupTime}
                                onChangeGroup={onChangeGroup}
                                onGroupChangeToNumber={onGroupChangeToNumber}
                                pickModerator={pickModerator}
                                removeModerator={removeModerator}
                                onChangeParticipants={onChangeParticipants}
                                onChangeReserveParticipants={
                                    onChangeReserveParticipants
                                }
                                onChangePaidParticipants={
                                    onChangePaidParticipants
                                }
                                deleteGroup={deleteGroup}
                            />
                        ))}
                    </div>
                </form>
            </div>
        </section>
    );
};

export default CreateStageForm;
