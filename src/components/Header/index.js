import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

import logo from '~/assets/logo-header.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="Meetapp" />
          </Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Dalida Saad</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>

            <button type="button">Sair</button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
