import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IconType } from "react-icons";
import { HiOutlineArrowLeftOnRectangle, HiOutlineCog} from "react-icons/hi2";
import { useAppContext } from "../../contexts/AppContext";
/**
 * MainNav component that renders a vertical navigation menu with dynamic links and a bottom section
 * for settings and logout actions.
 *
 * @param {Object} props - The props for the component.
 * @param {Array} props.data - An array of objects representing the navigation items.
 * Each object should have `path` (string), `icon` (React component), and `label` (string).
 * @returns {JSX.Element} The rendered navigation menu component.
 */
export type NavItem = {
  path: string;
  label: string;
  icon: IconType;
};

type MainNavProps = {
  data: NavItem[];
};

function MainNav({ data }: MainNavProps) {
  const { logout } = useAppContext();
  const navigate = useNavigate();

  // Handle logout and redirect
  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to the home page
  };


  return (
    <nav className="h-full flex flex-col justify-between">
      <NavList className="overflow-y-auto lg:mt-16">
        {data.map((item, index) => (
          <li key={index}>
            <StyledNavLink to={item.path}>
              <item.icon />
              <span>{item.label}</span>
            </StyledNavLink>
          </li>
        ))}
      </NavList>

      <BottomNavList>
        <li>
        <StyledNavLink to="/settings">
            <HiOutlineCog />
            <span>Settings</span>
          </StyledNavLink>
          {/* Logout Button */}
          <LogoutButton onClick={handleLogout}>
            <HiOutlineArrowLeftOnRectangle />
            <span>Logout</span>
          </LogoutButton>
        </li>
      </BottomNavList>
    </nav>
  );
}

export default MainNav;

// Styled Components
const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding-top: 2rem;
  overflow-y: auto;
`;

const BottomNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: auto;
  padding-bottom: 2rem;
  border-top: 1px solid rgba(201, 201, 201, 0.4);
  min-height: 30%;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    border-radius: 10px;
    color: #e4eef5;
    font-size: 1.4rem;
    font-weight: 500;
    padding: 1.8rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-50);
    background-color: #232A3E;
    border-radius: 10px;
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: #e4eef5;
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-50);
  }
`;

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  border: none;
  background: none;
  color: var(--color-grey-50);
  font-size: 1.4rem;
  font-weight: 500;
  padding: 1.2rem 2.4rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: var(--color-brand-50);
    background-color: #232A3E;
    border-radius: 10px;
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    transition: all 0.3s;
  }

  &:hover svg {
    color: var(--color-brand-50);
  }
`;
