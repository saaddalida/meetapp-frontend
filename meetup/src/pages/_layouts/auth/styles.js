import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(180deg, #22202c 0%, #402845 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

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

    button {
      margin: 5px 0 0;
      height: 45px;
      background: #f94d6a;
      border: 0;
      border-radius: 4px;
      font-weight: bold;
      color: #fff;
      font-size: 18px;
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
