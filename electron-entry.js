
const electron = require('electron');
const fs = require('fs');

const day = 86400000;
const app = electron.app;
const settings = {
  center: true,
  width: 1020,
  height: 700,
  resizable: false,
  icon: `${__dirname}/website/icon-256.png`
};

let mainWindow = null;
let first = true;

function writeCacheFile() {
  const cache =  JSON.stringify({ time: Date.now() });
  fs.writeFileSync('./cache.json', cache, 'utf8');
}

function createWindow() {
  let headers = {};

  if(fs.existsSync('./cache.json')) {
    const cache = JSON.parse(fs.readFileSync('./cache.json', 'utf8'));
    
    if(Date.now() - cache.time > day) {
      headers = {"extraHeaders" : "pragma: no-cache\n"};
      writeCacheFile();
    }
  } else {
    headers = {"extraHeaders" : "pragma: no-cache\n"};
    writeCacheFile();
  }

  mainWindow = new electron.BrowserWindow(settings);
  mainWindow.webContents.clearHistory();
  mainWindow.loadURL(`http://www.youngmoneyren.org`, headers);
  mainWindow.setMenu(null);
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

app.on('ready', createWindow)
app.on('browser-window-created', (e, window) => {
     window.setResizable(!first);
     window.setMenu(null);
     first = false;
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
