// import axios from "axios";
import { UserType } from "types/user";
import { apiClient } from "./axiosConfig";

class UserService {
    private url: string = 'https://jsonplaceholder.typicode.com';

    async getUsers() {
        return apiClient.get<UserType[]>(`/users`).then((res) => res.data)
    }

    async getUserById(id: number) {
        return apiClient.get<UserType>(`/users/${id}`).then((res) => res.data)
    }
}

export default new UserService();