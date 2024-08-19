import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import pages
import Login from '../pages/Login';


export const route =
<BrowserRouter>
    <Routes>
        <Route path='/' element={<Login />} />
    </Routes>
</BrowserRouter>