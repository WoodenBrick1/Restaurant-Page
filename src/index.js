import "./styles.css";
import {loadMain} from "./main.js";
import {flavours, loadFlavours} from "./flavours.js";
import {loadContact} from "./contact.js";

const content = document.getElementById("content");
const setButtons = () =>
{
    document.getElementById("home").addEventListener("click", () =>
    {
        content.innerHTML = "";
        loadMain();
    });
    
    document.getElementById("flavours").addEventListener("click", () =>
    {
        content.innerHTML = "";
        loadFlavours(flavours);
    })

    document.getElementById("contact").addEventListener("click", () =>
    {
        content.innerHTML = "";
        loadContact();

    })
}

window.addEventListener("DOMContentLoaded", () =>
{
    setButtons();
    
})



