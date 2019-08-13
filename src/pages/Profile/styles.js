import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 45px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
    }

    span {
      color: ${lighten(0.05, '#f94d6a')};
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 20px 0 15px;
    }

    button {
      margin: 20px auto 0;
      width: 150px;
      height: 45px;
      background: #f94d6a;
      border: 0;
      border-radius: 4px;
      font-weight: bold;
      color: #fff;
      font-size: 16px;
      transition: background 0.3s;

      &:hover {
        background: ${darken(0.07, '#F94D6A')};
      }
    }

    a {
      color: #fff;
      margin-top: 20px;
      font-size: 16px;
      opacity: 0.7;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
