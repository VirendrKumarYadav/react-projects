import axios from "axios";

export const fetchApi = async (url, param) => {
    try {
        const response = await axios.get(url, {
            param,
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzUwZjIxNDZlM2EzMzE1NTM2ZWQ2M2Q3ZjA3NjIyYyIsInN1YiI6IjY1ODUzYWQ2NzFmMDk1NTc3YzIzZWRjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e8piv7M9p7yHqo20p3C-WTZAdoQ06YUw7Hx3JYxWXk0",
            },
        });
        return response;
    } catch (err){
        console.error(err); 
        return false;
    }
};
