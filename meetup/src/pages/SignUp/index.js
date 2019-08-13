import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is a required field'),
  email: Yup.string()
    .email('Insert a valid email')
    .required('Email is a required field'),
  password: Yup.string()
    .min(6, 'password must be at least 6 characters ')
    .required('Password is a required field'),
});

export default function SignUp() {
  function handleSubmit(data) {}

  return (
    <>
      <img src={logo} alt="Meetapp" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Full name" />
        <Input name="email" type="email" placeholder="Enter your e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Enter your password"
        />

        <button type="submit">Create account</button>
        <Link to="/">Already have an account? Sign in</Link>
      </Form>
    </>
  );
}
