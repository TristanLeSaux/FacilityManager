import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './Layouts/MaintLayout';
import ErrorPage from '@/Layouts/ErrorPage';
import PageNotFound from '@/Layouts/NotFound';
import Resources from '@/components/pages/Resources';

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Navigate to="/" replace />} />
                    <Route path="resources" element={<Resources />} />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
