const {app, BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        height:800,
        width:800,
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true
        }
    })
    win.loadFile("index.html")
}

app.whenReady().then(createWindow)
