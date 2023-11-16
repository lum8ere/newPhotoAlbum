export type Album = {
    userId: number
    id: string
    title: string
}

export type PaginationOptions = {
    page: number;
    limit?: number;
}