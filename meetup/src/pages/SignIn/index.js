import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="Meetapp" />

      <form>
        <input type="email" placeholder="Enter your e-mail" />
        <input type="password" placeholder="Enter your password" />

        <button type="submit">Sign In</button>
        <Link to="/register">Create new account</Link>
      </form>
    </>
  );
}
