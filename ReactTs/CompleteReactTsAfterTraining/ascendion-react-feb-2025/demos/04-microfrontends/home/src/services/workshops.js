import axios from "axios";

const getWorkshops = async (page = 1) => {
    const params = {
        _page: page,
    };

    const response = await axios.get(
        `https://workshops-server.onrender.com/workshops`,
        {
            params,
        }
    );

    return response.data;
};

const getWorkshopById = async (id) => {
    const response = await axios.get(
        `https://workshops-server.onrender.com/workshops/${id}`
    );

    return response.data;
};

export { getWorkshops, getWorkshopById };
