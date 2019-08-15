import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 20px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      width: 300px;
      height: 150px;
      border: 2px solid rgba(0, 0, 0, 0.3);
      background: #261f2d;
    }

    input {
      display: none;
    }
  }
`;
