import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insert a valid email')
    .required('Email is a required field'),
  password: Yup.string().required('Password is a required field'),
});

export default function SignIn() {
  function handleSubmit(data) {}

  return (
    <>
      <img src={logo} alt="Meetapp" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Enter your e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Enter your password"
        />

        <button type="submit">Sign In</button>
        <Link to="/register">Create new account</Link>
      </Form>
    </>
  );
}
