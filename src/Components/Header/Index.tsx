import { Avatar, Dropdown, Navbar } from "flowbite-react";
import logoImg from "../../Assets/Logo sin fondo 2 JM.png";
import profileImg from "../../Assets/profile-2.400kb.png";
import { useAuth } from "../../Hooks/useAuth";

const Header = () => {
  const { userSession, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <Navbar fluid className="bg-slate-900">
      <Navbar.Brand href="#">
        <img
          src={logoImg}
          className="mr-3 h-10 sm:h-10"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
          Technical Test Genios
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt="User settings" img={profileImg} rounded />}
        >
          <Dropdown.Header>
            <span className="block text-sm">{userSession?.displayName}</span>
            <span className="block truncate text-sm font-medium">
              {userSession?.email}
            </span>
          </Dropdown.Header>
          <Dropdown.Item onClick={handleLogout}>Cerrar Sesión</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
};

export { Header };
