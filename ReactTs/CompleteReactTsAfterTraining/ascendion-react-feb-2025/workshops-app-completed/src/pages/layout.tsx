import { useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

import Menu from "../components/common/Menu/Menu";

import "./layout.scss";

const Layout = () => {
    const [show, setShow] = useState(true);

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
                        16.7 or earlier was significantly different.
                    </p>
                </Alert>
            )}

            <Menu />

            <Container className="my-5">
                <Outlet />
            </Container>
        </>
    );
};

export default Layout;
