import { useState } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';

import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";

import Menu from "./components/common/Menu/Menu";
import HomePage from './pages/home';
import WorkshopsListPage from './pages/workshops';
import AddWorkshopPage from './pages/workshops/add';
import FavoritesPage from './pages/workshops/favorites';
import WorkshopDetailsPage from './pages/workshops/[id]';
import NotFoundPage from './pages/not-found';

import './App.scss';

export type Theme = 'light' | 'dark';

function App() {
	const [ show, setShow ] = useState<boolean>(true);

	// const closeAlert = () => {
	// 	setShow(false)
	// }

    return (
		<>
			{show && (
                <Alert
                    variant="warning"
                    onClose={() => setShow(false)}
                    dismissible
                >
                    <Alert.Heading>Note on React Version</Alert.Heading>
                    <p>
                        The current version of React is v19. This app is built
                        using React v18. The way an app was built using React
                        v16.7 or earlier was significantly different.
                    </p>
                </Alert>
            )}

			<Menu />

			<Container className="my-4">
				<Routes>
                    <Route path="/home" element={<Navigate to ="/" />} />
                    <Route path="/workshops" element={<WorkshopsListPage />} />
                    <Route path="/workshops/add" element={<AddWorkshopPage />} />
                    <Route path="/workshops/favorites" element={<FavoritesPage />} />
                    <Route path="/workshops/:id/*" element={<WorkshopDetailsPage />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
			</Container>
		</>
	);
}

export default App;
