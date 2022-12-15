const CreateProductForm = () => {
    const [productSettings, setProductSettings] = useState({
        title: "",
        description: "",
        amount: "",
        price: "",
        specifications: ""
    });

    const handleProductSettingsChange = (e) => {
        setProductSettings((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    useEffect(() => {
        console.log(productSettings);
    }, [productSettings]);

    return (
        <section>
            <h1>Наименование товара:</h1>
            <input
                name="title"
                value={productSettings.title}
                onChange={handleProductSettingsChange}
            />
            <p>Описание товара</p>
            <input
                name="description"
                value={productSettings.description}
                onChange={handleProductSettingsChange}
            />
            <p>Количество товара</p>
            <input
                name="amount"
                type="number"
                value={productSettings.quanity}
                onChange={handleProductSettingsChange}
            />
            <p>Цена товара</p>
            <input
                name="price"
                type="number"
                value={productSettings.price}
                onChange={handleProductSettingsChange}
            />
        </section>
    );
};

export default CreateProductForm;
