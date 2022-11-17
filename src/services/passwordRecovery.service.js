import { useParams } from "react-router";
import http from "../http";

const passwordRecoveryService = {
    reset: async (password) => {
        const { userId } = useParams();
        const { data } = await http.post("reset", { userId, password });
        return data;
    }
};

export default passwordRecoveryService;
