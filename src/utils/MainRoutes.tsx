import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import pages
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';
import Sample from '../pages/Sample';


export const route =
<BrowserRouter>
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/sample/:id' element={<Sample />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
</BrowserRouter>