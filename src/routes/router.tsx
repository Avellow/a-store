import { pagesData } from "./pagesData";
import { routerType } from "./router.types";
import { Route, Routes } from "react-router-dom";

const Router = () => {
    const pageRoutes = pagesData.map(({ path, element, title }: routerType) => {
        return (
            <Route
                key={title}
                path={`/${path}`}
                element={element}
            />
        );
    });

    return (
        <Routes>{pageRoutes}</Routes>
    );
};

export default Router;
