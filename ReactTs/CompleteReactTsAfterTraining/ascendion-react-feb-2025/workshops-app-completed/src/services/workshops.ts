import axios from "axios";
import IWorkshop from "../models/IWorkshop";

const getWorkshops = async (page: number = 1, category: string = "") => {
    const params: {
        _page: number;
        category?: string;
    } = {
        _page: page,
    };

    if (category !== "") {
        params.category = category;
    }

    const response = await axios.get<IWorkshop[]>(
        `https://workshops-server.onrender.com/workshops`,
        {
            // params: params,
            params,
        }
    );

    return response.data;
};

const getWorkshopById = async (id: number) => {
    // we get a "Promise" object from axios.get()
    // initially "pending" state of Promise
    // then the Promise goes to "resolved" / "rejected"
    // NOTE: Explore then(), catch() methods
    const response = await axios.get(
        `https://workshops-server.onrender.com/workshops/${id}`
    );
    return response.data as IWorkshop;
};

export { getWorkshops, getWorkshopById };
