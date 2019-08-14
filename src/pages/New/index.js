import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import api from '~/services/api';
import history from '~/services/history';

import { Container } from './styles';

export default function CreateMeetup() {
  async function handleSubmit(data) {
    const response = await api.post('meetups', data);
    history.push(`/meetups/${response.data.id}/details`);
  }

  const schema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    date: Yup.date().required('Date is required'),
    location: Yup.string().required('Location is required'),
  });

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="title" placeholder="Title" />
        <Input name="description" placeholder="Description" multiline />
        <Input name="date" placeholder="date" />
        <Input name="location" placeholder="Location" />

        <button type="submit">Criar meetup </button>
      </Form>
    </Container>
  );
}
