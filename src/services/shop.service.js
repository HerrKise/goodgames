import http from "../http";

const shopEndpoint = "/Shop";

const shopService = {
    create: async (payload) => {
        const { data } = await http.post(
            shopEndpoint + "/CreateShopItem",
            payload
        );
        return data;
    },
    buy: async (payload) => {
        const { data } = await http.post(
            shopEndpoint + "/BuyShopItem",
            payload
        );
        return data;
    },
    update: async (payload) => {
        const { data } = await http.put(
            shopEndpoint + "/UpdateShopItem",
            payload
        );
        return data;
    },
    getShopItemsList: async (payload) => {
        const { data } = await http.get(
            shopEndpoint + "/GetShopItems",
            payload
        );
        return data;
    },
    getShopItem: async (payload) => {
        const { data } = await http.get(shopEndpoint + "/GetShopItem", payload);
        return data;
    },
    getExtendedShopItems: async (payload) => {
        const { data } = await http.get(
            eventEndpoint + "/GetExtendedShopItems",
            payload
        );
        return data;
    }
};

export default shopService;
