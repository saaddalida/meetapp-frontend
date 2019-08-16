import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import BannerInput from '~/components/BannerInput';
import DateInput from '~/components/DateInput';

import { Container } from './styles';

export default function CreateMeetup() {
  async function handleSubmit(data) {
    try {
      await api.post('meetups', data);
      history.push(`/dashboard`);
      toast.success('Meetup cadastrado com sucesso');
    } catch (err) {
      toast.error('Ocorreu um erro ao tentar criar o meetup');
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
      <Form schema={schema} onSubmit={handleSubmit}>
        <BannerInput name="file_id" />
        <DateInput name="date" placeholder="Data do evento" />
        <Input name="title" placeholder="Título" />
        <Input name="description" placeholder="Descrição do Meetup" multiline />
        <Input name="location" placeholder="Local" />

        <button type="submit">Criar meetup </button>
      </Form>
    </Container>
  );
}
