import { useState, useEffect } from "react";
import CreateGroupForm from "./createGroupForm";

const CreateStageForm = ({ eventType }) => {
    const [stage, setStage] = useState({
        name: "Название этапа",
        stageStart: "",
        winners: [],
        groups: [],
        participants: []
    });

    const [datePicker, setDatePicker] = useState({
        startDate: "",
        startTime: ""
    });

    useEffect(() => {
        console.log(stage);
    }, [stage]);

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
    return (
        <section className="bg-gray-300 w-[100%] min-h-[100vh]">
            <div className="w-[1024px] mx-auto flex flex-col items-center">
                <h2>Создание этапа</h2>
                <form className="flex items-center gap-10">
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
                </form>
            </div>
            <CreateGroupForm eventType={eventType} />
        </section>
    );
};

export default CreateStageForm;
