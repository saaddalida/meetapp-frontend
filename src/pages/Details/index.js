import React, { useEffect, useState } from 'react';
import pt from 'date-fns/locale/pt';
import { format, parseISO } from 'date-fns';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Meetup } from './styles';

export default function Details({ match }) {
  const { id } = match.params;
  const [meetup, setMeetup] = useState([]);

  useEffect(() => {
    async function loadMeetup() {
      try {
        const response = await api.get(`meetups/${id}/details`);
        setMeetup({
          ...response.data,
          url: response.data.File.url,
          formattedDate: format(
            parseISO(response.data.date),
            "d 'de' MMMM', às' HH'h' mm'min'",
            {
              locale: pt,
            }
          ),
        });
      } catch (err) {
        toast.error('Erro ao acessar os detalhes do meetup');
        history.push('/dashboard');
      }
    }

    loadMeetup();
  }, [id]);

  function handleEdit() {
    history.push(`/meetup/${id}/edit`);
  }

  async function handleCancel() {
    try {
      await api.delete(`meetups/${id}`);
      toast.success('Meetup foi cancelado com sucesso');
      history.push('/dashboard');
    } catch (err) {
      toast.error('Error cancelling meetup, please try again');
    }
  }

  return (
    <Container>
      <header>
        <strong>{meetup.title}</strong>
        {!meetup.past && (
          <div>
            <button type="button" onClick={handleEdit} className="edit">
              Editar
            </button>
            <button type="button" onClick={handleCancel} className="cancel">
              Cancelar
            </button>
          </div>
        )}
      </header>

      <Meetup>
        <img src={meetup.url} alt={meetup.title} />
        <p>{meetup.description}</p>
        <p>
          Caso queira participar como palestrante do meetup envie um e-mail para
          organizacao@meetapp.com.br.
        </p>
        <div>
          <span>{meetup.formattedDate}</span>
          <span>{meetup.location}</span>
        </div>
      </Meetup>
    </Container>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
