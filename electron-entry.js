
const electron = require('electron');
const server = require('./server.js');

const app = electron.app;
const settings = {
  center: true,
  width: 1280,
  height: 800,
  resizable: true,
  icon: `${__dirname}/images/renfrewshire-council.png`,
  webPreferences: {
    webSecurity: false
  }
};

let mainWindow = null;

function createWindow() {
  mainWindow = new electron.BrowserWindow(settings);
  mainWindow.loadURL(`http://localhost:3000/`);
  mainWindow.setMenu(null);
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.on('ready', createWindow)
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
