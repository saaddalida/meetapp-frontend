import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Container } from './styles';

import { updateProfileRequest } from '~/store/modules/user/actions';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  const [oldPassword, setOldPassword] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  useEffect(() => {
    setOldPassword('');
    setPassword('');
    setConfirmPassword('');
  }, [profile]);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  const schema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid e-mail')
      .required('E-mail is required'),
    oldPassword: Yup.string().when('password', (value, field) =>
      value ? field.required('Current password is required') : field
    ),
    password: Yup.string()
      .transform(value => (!value ? null : value))
      .nullable()
      .min(6, 'Password must be at least 6 characters'),
    confirmPassword: Yup.string().when('password', (value, field) =>
      value
        ? field
            .required()
            .oneOf([Yup.ref('password')], 'Password does not match')
        : field
    ),
  });

  return (
    <Container>
      <Form initialData={profile} schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Full name" />
        <Input name="email" placeholder="Enter your e-mail" />

        <hr />
        <Input
          type="password"
          name="oldPassword"
          value={oldPassword}
          placeholder="Old password"
          onChange={e => setOldPassword(e.target.value)}
        />
        <Input
          type="password"
          name="password"
          value={password}
          placeholder="New password"
          onChange={e => setPassword(e.target.value)}
        />
        <Input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          placeholder="Confirm your password"
          onChange={e => setConfirmPassword(e.target.value)}
        />

        <button type="submit">Update profile</button>
      </Form>
    </Container>
  );
}
