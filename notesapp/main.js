const {app, BrowserWindow, ipcRenderer} = require('electron');
const url = require('url')
const path = require('path')

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'Electron',
        width: 1000,
        height: 600,
        webPreferences: {
            webSecurity: false,
            contextIsolation: true,
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js')
        }
    });

    mainWindow.webContents.openDevTools()

    const startUrl =  url.format({
        pathname: path.join(_dirname, './app/build/index.html'),
        protocol: 'file'
    })

    mainWindow.loadURL(startUrl)
}

app.whenReady().then(createMainWindow);

ipcMain.on('submit: todoForm', (event, opts) => {
    console.log(opts);
})