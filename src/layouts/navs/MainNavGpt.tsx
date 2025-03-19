import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { HiOutlineArrowLeftOnRectangle, HiOutlineCog } from "react-icons/hi2";
import { useAppContext } from "../../contexts/AppContext";
import { useConversations } from "../../contexts/TingoGPTContext";
// import { formatTimeHelper } from "../../utils/helpers/formatTimeHelper";

export type NavItem = {
  path: string;
  label: string;
  icon: React.ComponentType;
};

type MainNavProps = {
  data?: NavItem[];
  historyData: SearchHistory[];
};

function MainNavGpt({}: MainNavProps) {
  const { logout } = useAppContext();
  const navigate = useNavigate();
  // const [copiedId, setCopiedId] = useState<string | null>(null);
  const { fetchingConversations, conversations, setCurrentConversation } =
    useConversations();

  // const handleCopy = (id: string, text: string) => {
  //   navigator.clipboard.writeText(text);
  //   setCopiedId(id);

  //   setTimeout(() => setCopiedId(null), 2000);
  // };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="h-full flex flex-col justify-between max-w-[320px] py-0 md:py-8">
      <div className="flex flex-1 relative flex-col gap-4 p-4 mt-8">
        {/* <h3 className="text-gray-400 text-lg px-4">Search History</h3> */}
        {conversations.length > 0 ? (
          conversations.map((history) => (
            <button
              key={history.id}
              onClick={() => setCurrentConversation(history.id)}
              className="flex flex-col items-start justify-start mr-auto max-w-[280px]"
            >
              <span className="text-white font-medium truncate w-full overflow-hidden text-ellipsis whitespace-nowrap">
                {history.recent_message}
              </span>
              <p className="text-sm text-gray-400">{`ID: ${history.id}`}</p>
            </button>
          ))
        ) : (
          <p className="text-gray-500 text-center py-2">No recent searches</p>
        )}
        {fetchingConversations && (
          <div className="absolute inset-0 bg-white/15 text-white flex text-center items-center justify-center">
            getting Conversations..
          </div>
        )}
      </div>

      {/* Navigation Links */}
      {/* <NavList>
        {data && data.map((item, index) => (
          <li key={index}>
            <StyledNavLink to={item.path}>
              <item.icon />
              <span>{item.label}</span>
            </StyledNavLink>
          </li>
        ))}
      </NavList> */}

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

export default MainNavGpt;

// const HistoryList = styled.ul`
//   display: flex;
//   flex-direction: column;
//   gap: 0.8rem;
//   padding: 1rem;
//   overflow-y: auto;
//   max-height: 100%;
//   border-bottom: 1px solid rgba(201, 201, 201, 0.4);
// `;

// const HistoryItem = styled.li`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   background-color: #1a1f2e;
//   padding: 0.8rem;
//   border-radius: 8px;
// `;

// const CopyButton = styled.button`
//   color: #a1a6b4;
//   transition: color 0.3s;

//   &:hover {
//     color: white;
//   }
// `;

// const NavList = styled.ul`
//   display: flex;
//   flex-direction: column;
//   gap: 0.8rem;
//   padding-top: 1rem;
//   overflow-y: auto;
//   background-color: red;
// `;

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
