import { useState, useEffect } from 'react';
import { FiPlus, FiSearch } from 'react-icons/fi'

import { api } from '../../services/api';

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

import { Note } from '../../components/Note';
import { Input } from '../../components/Input';
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";

export function Home() {
  const [tags, setTags] = useState([]);


  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data);
    }

    fetchTags();
  }, []);

  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText
          title="Todos" 
          isActive 
        /></li>
        {
          tags && tags.map(tag => (
            <li key={String(tag.id)}><ButtonText 
              title={tag.name} 
            /></li>
          ))
        }
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

      <NewNote to="NewNote">
        <FiPlus />
        Criar nota
      </NewNote>

    </Container>
  );
}
