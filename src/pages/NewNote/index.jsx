import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";

export function NewNote() {

  return (
    <Container>
      <Header />
      
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href="/">Voltar</a>
          </header>

          <Input placeholder="Título" />

          <Textarea placeholder="Observações" />

          <Section title="Links úteis">

          </Section>

          <Section title="Marcadores">

          </Section>

          <Button title="Salvar" />
          
        </Form>
      </main>
    </Container>
  );
}
