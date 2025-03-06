// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// import { useState } from 'react';
// import { Alert } from "react-bootstrap";
// import Menu from "./components/common/Menu/Menu";

// import './App.scss';

// function App() {
// 	const [ title, setTitle ] = useState<string>('Workshops App');
// 	const [ count, setCount ] = useState<number>(0);
// 	const [ show, setShow ] = useState<boolean>(true);

// 	const changeTitle = () => {
// 		setTitle('Workshops Application');
// 		setCount(c => c + 1);
// 	};

// 	// const closeAlert = () => {
// 	// 	setShow(false)
// 	// }

// 	return (
// 		<>
// 			{show && (
//                 <Alert
//                     variant="warning"
//                     onClose={() => setShow(false)}
//                     dismissible
//                 >
//                     <Alert.Heading>Note on React Version</Alert.Heading>
//                     <p>
//                         The current version of React is v19. This app is built
//                         using React v18. The way an app was built using React
//                         v16.7 or earlier was significantly different.
//                     </p>
//                 </Alert>
//             )}

//       <Menu/>
 
// 			<h1>{title}</h1>
// 			<hr />
// 			<button onClick={changeTitle}>Change title</button>

// 			{/* Exercise */}
// 			<span>You have clicked this button <span>{count}</span> times</span>
// 		</>
// 	);
// }

// export default App;



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