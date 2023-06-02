import { writable } from "svelte/store";
import { API_URL } from "../constants/api-url.constant";
import { FOLDER } from "../models/folder.model";

const response = async () => {
   await fetch(API_URL.gridDataApi, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
}).then(response => response.json())
};

//let response : FOLDER[] = [];
export const foldersInStore = writable<FOLDER[]>((response as undefined) as FOLDER[]);
export const totalFolder = writable<number>(response.length);
export const header = writable<string>("FOLDERS AND FILES ORGANIZER");
