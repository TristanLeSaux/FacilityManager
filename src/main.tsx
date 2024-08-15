import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { HashRouter, RouterProvider } from 'react-router-dom';
import { router } from '@/router';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<HashRouter>
			<RouterProvider router={router} />
		</HashRouter>
	</StrictMode>,
)
