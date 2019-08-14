import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';
import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo-header.svg';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

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

            <button type="button" onClick={handleSignOut}>
              Sair
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
