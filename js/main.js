
import * as utils from "./utils.js";

document.addEventListener("DOMContentLoaded", async () => {
    let createplus_img = document.getElementById('CreatePlus_Downloads');
    let downloads = await utils.fetchCurseforgeProjectDownloads('https://www.curseforge.com/minecraft/mc-mods/create-x-createplus-1-18-forge-0-5-1-0-5-1a');
    createplus_img.setAttribute('src', `https://img.shields.io/badge/Curseforge%20Downloads-${downloads}-orange`);
});
