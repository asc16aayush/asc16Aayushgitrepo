import { NavLink, NavLinkProps } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

// Define TypeScript types for props
interface CustomNavLinkProps extends NavLinkProps {
    to: string; // Ensures 'to' prop is always a string
    children: React.ReactNode; // Ensures 'children' is valid JSX
}

// Custom component to handle className correctly
const CustomNavLink = ({ to, children, ...props }: CustomNavLinkProps) => (
    <NavLink
        to={to}
        {...props}
        className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
        }
    >
        {children}
    </NavLink>
);

export default CustomNavLink;
