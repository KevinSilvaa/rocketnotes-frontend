import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from "./styles";
import { useAuth } from '../../hooks/auth';

export function Header() {

  const { user } = useAuth();

  return (
    <Container>
      <Profile to="/profile">
        <img 
          src="https://github.com/KevinSilvaa.png"
          alt={`${user.name} avatar`}
        />

        <div>
          <span>Bem vindo,</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
