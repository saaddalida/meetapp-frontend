import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  background: #211d29;
  padding: 0 30px;
  box-shadow: 0 0 10px rgba(93, 97, 164, 0.15);
`;

export const Content = styled.div`
  height: 80px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;

  div {
    text-align: right;
    margin-right: 30px;

    strong {
      display: block;
      color: #fff;
      font-size: 14px;
    }

    a {
      display: block;
      margin-top: 3px;
      font-size: 14px;
      color: #999;
    }
  }

  button {
    width: 70px;
    background: #d44059;
    color: #fff;
    font-weight: bold;
    border: 0;
    border-radius: 4px;

    &:hover {
      background: ${lighten(0.05, '#d44059')};
    }
  }
`;
