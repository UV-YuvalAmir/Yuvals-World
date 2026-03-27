import Home from './pages/Home';
import KBMML from './pages/KBMML';
import Projects from './pages/Projects';
import IncrediLand from './pages/IncrediLand';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "KBMML": KBMML,
    "Projects": Projects,
    "IncrediLand": IncrediLand,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};