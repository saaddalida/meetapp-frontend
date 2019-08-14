import styled from 'styled-components';
import { lighten } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;

    strong {
      font-size: 32px;
      color: #fff;
    }

    button {
      width: 150px;
      height: 40px;
      background: #d44059;
      color: #fff;
      font-weight: bold;
      border: 0;
      border-radius: 4px;

      &:hover {
        background: ${lighten(0.05, '#d44059')};
      }
    }
  }
`;

export const MeetupList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Meetup = styled(Link)`
  background: #261f2d;
  padding: 20px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  opacity: ${props => (props.past ? 0.4 : 0.8)};

  div {
    display: flex;
    align-items: center;

    span {
      font-size: 16px;
      color: #ffffff;
      opacity: 0.6;
    }
  }

  strong {
    font-size: 18px;
    color: #ffffff;
  }

  &:hover {
    opacity: ${props => (props.past ? 0.4 : 1)};
    transform: translateY(-2px);
    box-shadow: 0 2px 7px rgba(93, 97, 164, 0.15);
  }
`;
