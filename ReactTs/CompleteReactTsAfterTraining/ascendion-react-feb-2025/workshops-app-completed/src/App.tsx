import { Navigate, Routes, Route } from "react-router-dom";

import Layout from "./pages/layout";

import HomePage from "./pages/home";
import WorkshopsListPage from "./pages/workshops";
import AddWorkshopPage from "./pages/workshops/add";
import FavoritesPage from "./pages/workshops/favorites";
import NotFoundPage from "./pages/not-found";

import "./App.scss";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="/home" element={<Navigate to="/" />} />
                <Route path="/workshops" element={<WorkshopsListPage />} />
                <Route path="/workshops/add" element={<AddWorkshopPage />} />
                <Route
                    path="/workshops/favorites"
                    element={<FavoritesPage />}
                />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}

export default App;
