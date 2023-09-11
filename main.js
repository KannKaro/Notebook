require('update-electron-app')()
const { BrowserWindow, app } = require('electron');

const createWindow = () => {  //Tutaj tworze okienko
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })
}

app.whenReady().then(() => {  //Start okienka
    createWindow();
})