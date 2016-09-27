const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let mainWindow;

function createWindow() {
	mainWindow = new BrowserWindow({
		title: 'Worker',
		width: 1280,
		height: 720,
		minWidth: 640,
		minHeight: 600,
		// transparent: true,
		// frame: false,
		center: true,
		show: false
	});

	mainWindow.once('ready-to-show', () => {
	  mainWindow.show();
  	});

	mainWindow.loadURL(`file://${__dirname}/index.html`)
	mainWindow.webContents.openDevTools()
	mainWindow.on('closed', function () {
		mainWindow = null
	});
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', function () {
	if (mainWindow === null) {
		createWindow();
	}
});
