import { MemoryRouter } from 'react-router-dom';
import Router from "../../routes/router";
import {render} from "@testing-library/react";

export const renderWithRouter = (component: JSX.Element | null = null, initialRoute: string = '/') => {
    return render(
        <MemoryRouter initialEntries={[initialRoute]}>
            <Router />
            {component}
        </MemoryRouter>
    );
};
