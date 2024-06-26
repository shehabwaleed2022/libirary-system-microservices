import { apiCalling } from "@/utils/helpers";

export async function getBooks(query) {
    try {
        const res = await apiCalling(
            `books?${query}`,
            "GET",
            {},
            {},
            false,
            "bookService"
        );
        const data = await res.json();
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}
export async function getBook(id) {
    try {
        const res = await apiCalling(
            `books/${id}`,
            "GET",
            {},
            {},
            false,
            "bookService"
        );
        const data = await res.json();
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}
export async function getCategories() {
    try {
        const res = await apiCalling(
            `books/category`,
            "GET",
            {},
            {},
            false,
            "bookService"
        );
        const data = await res.json();
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}
export async function borrowBook(id) {
    try {
        const res = await apiCalling(
            `borrow/${id}/request`,
            "POST",
            {},
            {},
            false,
            "bookService"
        );
        const data = await res.json();
        if (!res.ok) {
            throw new Error(data.message);
        }
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}
