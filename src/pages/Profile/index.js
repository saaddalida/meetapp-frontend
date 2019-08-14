import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

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

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
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
