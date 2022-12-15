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
        <section className="bg-gray-300 w-[100%] min-h-[100vh]">
            <div className="w-[1024px] mx-auto flex flex-col items-center">
                <h2>Создание этапа</h2>
                <form className="flex items-center gap-10">
                    <div className="flex flex-col">
                        <p>Время начала этапа</p>
                        <input
                            type="datetime-local"
                            name="stageStart"
                            onChange={handleTimeStageChange}
                            value={moment(state.stageStart).format(
                                "YYYY-MM-DDTHH:mm"
                            )}
                        />
                    </div>
                    <div className="flex flex-col">
                        <p>Название этапа</p>
                        <input
                            value={state.name}
                            onChange={handleStageSettingsChange}
                            name="name"
                        />
                    </div>
                    <button type="button" onClick={handleDelete}>
                        Удалить этап
                    </button>
                </form>
            </div>
            <button onClick={handleAddGroup}>Добавить группу</button>
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
                    pickModerator={pickModerator}
                    removeModerator={removeModerator}
                    onChangeParticipants={onChangeParticipants}
                    onChangeReserveParticipants={onChangeReserveParticipants}
                    onChangePaidParticipants={onChangePaidParticipants}
                    deleteGroup={deleteGroup}
                    /* deleteGroup={() =>
                        handleDeleteGroup(
                            group,
                            stage.id + "-" + group + "-group"
                        )
                    } */
                />
            ))}
        </section>
    );
};

export default CreateStageForm;
