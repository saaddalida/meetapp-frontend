import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;
  padding: 0 30px;

  form {
    display: flex;
    flex-direction: column;

    input,
    textarea {
      background: #261f2d;
      width: 100%;
      border: 0;
      border-radius: 4px;
      height: 48px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      transition: box-shadow 0.2s;

      &::placeholder {
        color: #999;
      }
    }
    textarea {
      resize: none;
      height: 200px;
      padding: 15px;
    }
    span {
      display: block;
      color: #e65175;
      margin: -5px 0 10px;
      font-weight: bold;
      text-align: left;
    }
    > button {
      margin: 10px 0 0;
      align-self: center;
      background: ${darken(0.05, '#4dbaf9')};
      font-weight: bold;
      letter-spacing: 0.5px;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 10px 14px;
      font-size: 16px;
      transition: background 0.2s;
      display: flex;
      align-items: center;

      &:hover {
        background: ${darken(0.15, '#4dbaf9')};
      }
    }
  }
`;
