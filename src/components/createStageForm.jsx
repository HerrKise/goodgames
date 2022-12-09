import { useState, useEffect } from "react";
import CreateGroupForm from "./createGroupForm";

const CreateStageForm = ({
    eventType,
    saveStage,
    stageId,
    deleteStage,
    regime
}) => {
    const [stage, setStage] = useState({
        id: stageId,
        name: "Название этапа",
        stageStart: "",
        winners: [],
        participants: []
    });

    console.log(stageId);

    const [datePicker, setDatePicker] = useState({
        startDate: "",
        startTime: ""
    });
    const [groups, setGroups] = useState([]);
    const [groupsQuantity, setGroupsQuantity] = useState([]);

    useEffect(() => {
        console.log(groupsQuantity);
    }, [groupsQuantity]);

    useEffect(() => {
        console.log(groups);
    }, [groups]);

    useEffect(() => {
        console.log(stage);
    }, [stage]);

    useEffect(() => {
        if (eventType === "practice") {
            setGroupsQuantity((prevState) => [
                ...prevState,
                prevState.length + 1
            ]);
        }
    }, []);

    useEffect(() => {
        const startTimeArr = datePicker.startTime.split(":");
        const startHour = Number(startTimeArr[0]) * 1000 * 3600;
        const startMinute = Number(startTimeArr[1]) * 1000 * 60;
        const newStartDate =
            new Date(datePicker.startDate).getTime() + startHour + startMinute;
        console.log(startHour, startMinute, newStartDate);
        setStage((prevState) => ({
            ...prevState,
            stageStart: newStartDate
        }));
    }, [datePicker.startDate, datePicker.startTime]);

    const handleAddGroup = (e) => {
        e.preventDefault();
        setGroupsQuantity((prevState) => [...prevState, prevState.length + 1]);
    };

    const handleDeleteGroup = (quantityId, groupId, deleteStage) => {
        setGroupsQuantity((prevState) =>
            prevState.filter((group) => group !== quantityId)
        );
        setGroups((prevState) =>
            prevState.filter((group) => group.id !== groupId)
        );
    };

    const handleDatePickerChange = (e) => {
        setDatePicker((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const handleStageSettingsChange = (e) => {
        setStage((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmitGroup = (data) => {
        setGroups((prevState) => [...prevState, data]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        saveStage({ ...stage, groups: groups });
    };

    const handleDelete = () => {
        deleteStage();
    };
    return (
        <section className="bg-gray-300 w-[100%] min-h-[100vh]">
            <div className="w-[1024px] mx-auto flex flex-col items-center">
                <h2>Создание этапа</h2>
                <form
                    className="flex items-center gap-10"
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-col">
                        <p>Дата начала этапа</p>
                        <input
                            type="date"
                            name="startDate"
                            onChange={handleDatePickerChange}
                            value={datePicker.startDate}
                        ></input>
                        <p>Время начала этапа</p>
                        <input
                            name="startTime"
                            type="time"
                            value={datePicker.startTime}
                            onChange={handleDatePickerChange}
                        />
                    </div>
                    <div className="flex flex-col">
                        <p>Название этапа</p>
                        <input
                            value={stage.name}
                            onChange={handleStageSettingsChange}
                            name="name"
                        />
                    </div>
                    <button type="submit">
                        Закончить настройку этапа и сохранить данные
                    </button>
                </form>
            </div>
            <button
                onClick={handleAddGroup}
                disabled={eventType === "practice"}
            >
                Добавить группу
            </button>
            <button type="button" onClick={handleDelete}>
                Удалить этап и его сохранённые данные
            </button>
            {groupsQuantity.map((group) => (
                <CreateGroupForm
                    regime={regime}
                    eventType={eventType}
                    key={group}
                    groupId={stage.id + "-" + group + "-group"}
                    saveGroup={handleSubmitGroup}
                    deleteGroup={() =>
                        handleDeleteGroup(
                            group,
                            stage.id + "-" + group + "-group"
                        )
                    }
                />
            ))}
        </section>
    );
};

export default CreateStageForm;
