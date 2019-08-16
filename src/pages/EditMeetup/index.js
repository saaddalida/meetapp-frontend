import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { parseISO } from 'date-fns';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import BannerInput from '~/components/BannerInput';
import DateInput from '~/components/DateInput';

import { Container } from './styles';

export default function EditMeetup({ match }) {
  const { id } = match.params;
  const [meetup, setMeetup] = useState(null);

  useEffect(() => {
    async function loadMeetup() {
      try {
        const response = await api.get(`meetups/${id}/details`);
        const data = {
          title: response.data.title,
          description: response.data.description,
          date: parseISO(response.data.date),
          location: response.data.location,
          file_id: response.data.id,
          file_url: response.data.url,
        };

        setMeetup(data);
      } catch (err) {
        toast.error('Ocorreu um erro ao tentar editar o meetup');
        history.push('/dashboard');
      }
    }

    loadMeetup();
  }, [id]);

  async function handleSubmit(data) {
    try {
      await api.put(`/meetups/${id}`, data);
      history.push(`/meetup/${id}`);
      toast.success('Meetup atualizado com sucesso');
    } catch (err) {
      toast.error('Ocorreu um erro ao tentar atualizar o meetup');
    }
  }

  const schema = Yup.object().shape({
    file_id: Yup.number()
      .transform(value => (!value ? undefined : value))
      .required('File is required'),
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    date: Yup.date().required('Date is required'),
    location: Yup.string().required('Location is required'),
  });

  return (
    <Container>
      <Form schema={schema} initialData={meetup} onSubmit={handleSubmit}>
        <BannerInput name="file_id" />
        <DateInput name="date" placeholder="Data do evento" />
        <Input name="title" placeholder="Título" />
        <Input name="description" placeholder="Detalhes do Meetup" multiline />
        <Input name="location" placeholder="Local" />

        <button type="submit">Atualizar meetup </button>
      </Form>
    </Container>
  );
}

EditMeetup.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
