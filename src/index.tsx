import ReactDOM from 'react-dom/client';
import { route } from './utils/MainRoutes'; 

import "bootstrap-icons/font/bootstrap-icons.css";



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(route);