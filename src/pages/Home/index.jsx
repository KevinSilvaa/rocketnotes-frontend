import { FiPlus, FiSearch } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from '../../components/Input';
import { Section } from "../../components/Section";
import { Note } from '../../components/Note';

import { useNavigate } from 'react-router-dom';

export function Home() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `NewNote`;
    navigate(path);
  }

  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText title="Todos" isActive /></li>
        <li><ButtonText title="Frontend" /></li>
        <li><ButtonText title="Node" /></li>
        <li><ButtonText title="React" /></li>
      </Menu>

      <Search>
        <Input 
          placeholder="Pesquisar pelo título" 
          type="search"
          icon={FiSearch}
        />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note data={{
            title: "React (Aplicação Front-end)",
            tags: [
              { id: '1', name: 'React' },
              { id: '2', name: 'Styled Components' }
            ]
            }}
          />
          <Note data={{
            title: "Node.js (Aplicação Back-end)",
            tags: [
              { id: '3', name: 'Node.js' },
              { id: '4', name: 'Express' }
            ]
            }} 
          />
        </Section>
      </Content>

      <NewNote onClick={routeChange}>
        <FiPlus />
        Criar nota
      </NewNote>

    </Container>
  );
}
