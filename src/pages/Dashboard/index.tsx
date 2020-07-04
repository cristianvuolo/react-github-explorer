import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Title>Explore repositórios no Github</Title>
      <Form action="">
        <input type="text" placeholder="Digite o nome do Repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="asd">
          <img
            src="https://avatars1.githubusercontent.com/u/2281424?s=460&u=01f160690833ecb45961897bb48937482265e7d4&v=4"
            alt="Cristian Vuolo"
          />
          <div>
            <strong>cristianvuolo/uploader</strong>
            <p>Laravel Uploader Helpers</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
