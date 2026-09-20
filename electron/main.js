const { app, BrowserWindow, shell, session } = require('electron');
const path = require('path');
const fs = require('fs');

const APP_ID = 'io.github.mostafa5804.pipelinecontrolcenter';
app.setAppUserModelId(APP_ID);

function createWindow() {
  const win = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 1000,
    minHeight: 680,
    show: false,
    backgroundColor: '#f4f7fb',
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });

  win.webContents.setWindowOpenHandler(({ url }) => {
    if (/^https?:\/\//i.test(url)) shell.openExternal(url);
    return { action: 'deny' };
  });
  win.webContents.on('will-navigate', (event, url) => {
    if (!url.startsWith('file:')) {
      event.preventDefault();
      if (/^https?:\/\//i.test(url)) shell.openExternal(url);
    }
  });

  win.once('ready-to-show', () => win.show());
  win.loadFile(path.join(__dirname, '..', 'desktop.html'));
}

app.whenReady().then(() => {
  session.defaultSession.on('will-download', (_event, item) => {
    const dir = app.getPath('downloads');
    const parsed = path.parse(item.getFilename());
    let candidate = path.join(dir, item.getFilename());
    let n = 1;
    while (fs.existsSync(candidate)) {
      candidate = path.join(dir, `${parsed.name} (${n++})${parsed.ext}`);
    }
    item.setSavePath(candidate);
  });
  createWindow();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});

app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
