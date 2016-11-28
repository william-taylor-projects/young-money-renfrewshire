
const electron = require('electron');
const app = electron.app;
const settings = {
  center: true,
  width: 900,
  height: 800,
  resizable: false,
  icon: `${__dirname}/website/images/purple-marker.png`
};

let mainWindow = null;

function createWindow() {
  mainWindow = new electron.BrowserWindow(settings);
  mainWindow.webContents.clearHistory();
  mainWindow.loadURL(`http://www.youngmoneyren.org`);
  mainWindow.setMenu(null);
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}


app.on('ready', createWindow)
app.on('browser-window-created', function(e,window) {
     window.setMenu(null);
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});
