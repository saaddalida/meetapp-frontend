import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;

    strong {
      font-size: 32px;
      color: #fff;
    }

    button {
      width: 120px;
      height: 40px;
      letter-spacing: 0.5px;
      color: #fff;
      font-weight: bold;
      border: 0;
      margin-right: 10px;
      border-radius: 4px;

      &.edit {
        background: #4dbaf9;
        &:hover {
          background: ${darken(0.05, '#4DBAF9')};
        }
      }
      &.cancel {
        background: #d44059;
        &:hover {
          background: ${darken(0.05, '#D44059')};
        }
      }
    }
  }
`;

export const Loading = styled.h1`
  display: flex;
  justify-content: center;
  align-self: center;
  font-size: 25px;
  color: #fff;
  margin-top: 30px;
`;

export const Meetup = styled.div`
  width: 900px;
  display: flex;
  flex-direction: column;

  img {
    align-self: center;
    width: 500px;
    height: 250px;
    margin-bottom: 15px;
  }

  p {
    font-size: 18px;
    color: #ffffff;
    line-height: 32px;
    margin-bottom: 20px;
  }

  div {
    font-size: 16px;
    color: #ffffff;
    opacity: 0.6;

    span {
      margin-right: 60px;
    }
  }
`;
