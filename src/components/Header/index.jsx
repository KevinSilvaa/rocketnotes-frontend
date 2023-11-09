import { RiShutDownLine } from 'react-icons/ri';

import { useAuth } from "../../hooks/auth";

import { Container, Profile, Logout } from "./styles";

export function Header() {

  const { signOut } = useAuth();

  return (
    <Container>
      <Profile to="/profile">
        <img 
          src="https://github.com/KevinSilvaa.png"
          alt="Kevin photo"
        />

        <div>
          <span>Bem vindo,</span>
          <strong>Kevin</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
