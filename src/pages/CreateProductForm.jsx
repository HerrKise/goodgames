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
        <section className="bg-darkgrey min-h-[100vh]">
            <main className="wrap pt-28 text-white pb-20">
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
            </main>
        </section>
    );
};

export default CreateProductForm;
