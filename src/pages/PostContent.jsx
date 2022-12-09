import Actions from "../components/Actions";
import News from "../components/News";
import Offers from "../components/Offers";

const PostContent = () => {
    return (
        <section className="bg-gray-400 w-[100%] min-h-[100vh]">
            <div className="w-[1240px] flex flex-col items-center justify-center">
                <h2>Посты</h2>
                <News />
                <Offers />
                <Actions />
            </div>
        </section>
    );
};

export default PostContent;
