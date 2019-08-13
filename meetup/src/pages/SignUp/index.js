import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="Meetapp" />

      <form>
        <input placeholder="Full name" />
        <input type="email" placeholder="Enter your e-mail" />
        <input type="password" placeholder="Enter your password" />

        <button type="submit">Create account</button>
        <Link to="/">Already have an account? Sign in</Link>
      </form>
    </>
  );
}
