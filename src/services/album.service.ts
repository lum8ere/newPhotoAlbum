import { Album, PaginationOptions } from "types/album";
import { apiClient } from "./axiosConfig";

class AlbumService {
    private url: string = 'https://jsonplaceholder.typicode.com';

    async getAlbums() {
        return apiClient.get<Album[]>(`/albums`).then((res) => res.data || [])
    }

    async getAlbumsWithPagination(paginationOprions: PaginationOptions) {
        return apiClient.get<Album[]>(`/albums?_page=${paginationOprions.page}&_limit=${paginationOprions.limit}`).then((res) => res.data || [])
    }

    async getAlbumById(id: number) {
        return apiClient.get<Album>(`/albums/${id}`).then((res) => res.data || {})
    }
}

export default new AlbumService();