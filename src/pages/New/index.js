import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import BannerInput from '~/components/BannerInput';

import { Container } from './styles';

export default function CreateMeetup() {
  async function handleSubmit(data) {
    try {
      await api.post('meetups', data);
      toast.success('Meetup cadastrado com sucesso');
      history.push(`/dashboard`);
    } catch (err) {
      toast.error('Ocorreu um erro ao tentar criar o meetup');
    }
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
        <BannerInput name="file_id" />
        <Input name="title" placeholder="Title" />
        <Input name="description" placeholder="Description" multiline />
        <Input name="date" placeholder="Date" />
        <Input name="location" placeholder="Location" />

        <button type="submit">Criar meetup </button>
      </Form>
    </Container>
  );
}
