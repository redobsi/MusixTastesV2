import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<App />);

/*
// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
*/

//window.electron.ipcRenderer.on('get-firebase-data', (data) => {
  // eslint-disable-next-line no-console
//  console.log(data);
//})
//window.electron.firebase.getData('users');
window.electron.firebase.setData('test', 'it is working :))')
window.electron.ipcRenderer.on('set-firebase-data', (data) => {
  console.log(data)
})