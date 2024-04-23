const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");
const { ipcMain } = require("electron");
const { Sequelize } = require("sequelize");
const { mysql } = require("mysql2");

let mainWindow;
let db;
function initDatabase() {
  db = new Sequelize("node_test", "root", null, {
    host: "localhost",
    dialect: "mysql",
  });
}
function createWindow() {
  mainWindow = new BrowserWindow({
    titleBarStyle: "hidden",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/truehost/index.html`),
      protocol: "file:",
      slashes: true,
    })
  );

  // mainWindow.loadURL("/dist/truehost/index.html");
  // mainWindow.loadURL('http://localhost:4200');
  // // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  mainWindow.on("closed", function () {
    mainWindow = null;
  });
  mainWindow.maximize();
  mainWindow.show();
}

ipcMain.on("ping", (event, arg) => {
  console.log(arg); // prints "ping"
  event.returnValue = "pong";
});

app.on("ready", createWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", function () {
  if (mainWindow === null) {
    initDatabase();
    createWindow();
  }
});
