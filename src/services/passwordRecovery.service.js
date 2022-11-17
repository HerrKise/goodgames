import { useParams } from "react-router";
import http from "../http";

const passwordRecoveryService = {
    reset: async (password) => {
        const { code } = useParams();
        const { data } = await http.post("reset", { password, code });
        return data;
    }
};

export default passwordRecoveryService;
