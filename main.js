const electron = require('electron')
const {app, BrowserWindow} = electron

app.on('ready', () => {
  let mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  })
  mainWindow.loadURL(`file://${__dirname}/index.html`)
  mainWindow.webContents.openDevTools()
})

exports.openWindow = () => {
  let window = new BrowserWindow({
    width: 400,
    height: 200
  })
  window.loadURL(`file://${__dirname}/new.html`)
}
