

export const TabNavComponent = ({ id, title, activeTab, setActiveTab }) => {

    const handleClick = () => {
        setActiveTab(id);
    };

    return (
        <li onClick={handleClick} className={activeTab === id ? "bg-yellow text-darkgrey w-[123px] py-3" : "w-[123px] py-3 bg-grey"}>
            { title }
        </li>
    )
}