import {render} from "react-dom";
import App from "./app/App";
import {HashRouter} from "react-router-dom";
import { store } from 'app/providers/StoreProvider/store'
import { Provider as StoreProvider } from 'react-redux'
render(
    <HashRouter>
        <StoreProvider store={store}>
            <App />
        </StoreProvider>
    </HashRouter>,
    document.getElementById('root')
)
