
import { createRoot } from 'react-dom/client'
import App from './src/App'
import {BrowserRouter} from "react-router-dom";
import './global.scss'


createRoot(document.getElementById('root')!).render(
        <BrowserRouter basename="/tinvestSite">
            <App />
        </BrowserRouter>
)
