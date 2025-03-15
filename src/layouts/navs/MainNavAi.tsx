import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { HiOutlineArrowLeftOnRectangle, HiOutlineCog } from "react-icons/hi2";
import { useAppContext } from "../../contexts/AppContext";

export type NavItem = {
  path: string;
  label: string;
  icon: React.ComponentType;
};

type MainNavProps = {
  data?: NavItem[];
  historyData: SearchHistory[]; 
};



function MainNavAi({ data }: MainNavProps) {
  const { logout } = useAppContext();
  const navigate = useNavigate();

  

  const handleLogout = () =>{
    logout();
    navigate("/");
  }

  return (
    <nav className="h-full flex flex-col justify-between">
      
      {/* Navigation Links */}
      <NavList>
        {data && data.map((item, index) => (
          <li key={index}>
            <StyledNavLink to={item.path}>
              <item.icon />
              <span>{item.label}</span>
            </StyledNavLink>
          </li>
        ))}
      </NavList>

      {/* Bottom Settings & Logout */}
      <BottomNavList>
        <li>
          <StyledNavLink to="/settings">
            <HiOutlineCog />
            <span>Settings</span>
          </StyledNavLink>
          <LogoutButton onClick={handleLogout}>
            <HiOutlineArrowLeftOnRectangle />
            <span>Logout</span>
          </LogoutButton>
        </li>
      </BottomNavList>
    </nav>
  );
}


export default MainNavAi;



const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding-top: 1rem;
  overflow-y: auto;
  background-color: red;
`;

const BottomNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: auto;
  padding-bottom: 1rem;
  border-top: 1px solid rgba(201, 201, 201, 0.4);
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  color: #e4eef5;
  font-size: 1.4rem;
  padding: 1.2rem;
  border-radius: 10px;
  transition: all 0.3s;

  &:hover,
  &.active {
    color: var(--color-grey-50);
    background-color: #232a3e;
  }

  & svg {
    width: 2rem;
    height: 2rem;
  }
`;

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  background: none;
  color: var(--color-grey-50);
  font-size: 1.4rem;
  padding: 1.2rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: var(--color-brand-50);
    background-color: #232a3e;
    border-radius: 10px;
  }

  & svg {
    width: 2rem;
    height: 2rem;
  }
`;
