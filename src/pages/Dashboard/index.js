import React, { useEffect, useState } from 'react';
import pt from 'date-fns/locale/pt';
import { format, parseISO } from 'date-fns';
import { MdChevronRight } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Meetup, MeetupList } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('organizing');

      if (!response) {
        return;
      }
      const data = response.data.map(meetup => ({
        ...meetup,
        formattedDate: format(
          parseISO(meetup.date),
          "d 'de' MMMM', às' HH'h' mm'min'",
          {
            locale: pt,
          }
        ),
      }));
      setMeetups(data);
    }
    loadMeetups();
  }, []);

  function handleClick() {
    history.push('/create');
  }

  return (
    <Container>
      <header>
        <strong>Meus meetups</strong>
        <button type="button" onClick={handleClick}>
          Novo meetup
        </button>
      </header>

      <MeetupList>
        {meetups.map(meetup => (
          <Meetup past={meetup.past} key={meetup.id} to={`meetup/${meetup.id}`}>
            <strong>{meetup.title}</strong>
            <div>
              <span>{meetup.formattedDate}</span>
              <MdChevronRight size={24} color="#fff" />
            </div>
          </Meetup>
        ))}
      </MeetupList>
    </Container>
  );
}
