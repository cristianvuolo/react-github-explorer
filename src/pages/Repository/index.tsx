import React, {useEffect, useState} from 'react';
import { useRouteMatch } from 'react-router-dom';
import {Header, RepositoryInfo, Issues} from './styles';
import { Link } from 'react-router-dom';
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";
import api from "../../services/api";
interface RepositoryParams {
  repo: string;
}
interface Repository {
  full_name: string;
  description: string;
  stargazers_count:number;
  forks_count:number;
  open_issues_count:number;
  owner: {
    login: string;
    avatar_url: string;
  };
}
interface Issue {
  title:string;
  id:number;
  html_url: string;
  user:{
    login:string
  }
}
const Repository: React.FC = () => {
  const {params} = useRouteMatch<RepositoryParams>();
  const [repo, setRepo] = useState<Repository|null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    api.get(`/repos/${params.repo}`).then((response) => {
      setRepo(response.data);
    });

    api.get(`/repos/${params.repo}/issues`).then((response) => {
      setIssues(response.data);
    });
  }, [params.repo]);


  return (
    <>
      <Header>
        Github Explorer
      <Link to="/">
        <FiChevronLeft size={16} /> Voltar
      </Link>
      </Header>
      { repo && (
        <RepositoryInfo>
          <header>
            <img src={repo.owner.avatar_url} alt={repo.owner.login}/>
            <div>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repo.stargazers_count}</strong>
              <span>Starts</span>
            </li>
            <li>
              <strong>{repo.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repo.open_issues_count}</strong>
              <span>Issues Abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues>
        {issues.map(issue => (
          <a href={issue.html_url} key={issue.id} target="_blank">
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
