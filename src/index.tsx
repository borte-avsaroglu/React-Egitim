import ReactDOM from 'react-dom/client';
import { route } from './utils/MainRoutes'; 



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(route);