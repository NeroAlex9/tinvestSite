
import { createRoot } from 'react-dom/client'
import App from './App'
import {BrowserRouter} from "react-router-dom";
import './global.scss'


createRoot(document.getElementById('root')!).render(
        <BrowserRouter basename="/tinvestSite">
            <App />
        </BrowserRouter>

)
