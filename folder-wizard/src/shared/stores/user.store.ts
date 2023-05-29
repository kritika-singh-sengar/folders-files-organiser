import { writable } from "svelte/store";

const token = localStorage.token;

export const loggedInUser = writable<string>(token || '');

loggedInUser.subscribe((value)=>{
    localStorage.setItem('token',value);
});