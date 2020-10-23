import React, { FC } from 'react'
import { User } from './index'

export interface WithAuthenticationProps {
  user?: User
}

export const WithAuthentication: FC<WithAuthenticationProps> = ({ children, user }) => user ? <>{children}</> : <LoginPage />

const LoginPage: FC = () => (
  <form data-testid="login-form">
    <label>user <input type="text" name="user" /></label>
    <label>pass <input type="password" name="pass" /></label>
    <input type="submit" value="log in" />
  </form>
)