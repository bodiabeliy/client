import {render} from "react-dom";
import App from "./app/App";
import {BrowserRouter, HashRouter} from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";

render(
    <HashRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </HashRouter>,
    document.getElementById('root')
)
