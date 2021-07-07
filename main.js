const { app, BrowserWindow } = require('electron')

function createWindow(url, pos) {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    x: pos[0] + 10,
    y: pos[1] + 10
  })

  win.loadURL(url)
  win.webContents.on('will-navigate', (event, url) => {
    event.preventDefault();
    let position = win.getPosition()
    createWindow(url, position)
  })
}

app.whenReady().then(() => {
  createWindow('https://duckduckgo.com/', [310, 140])
})
