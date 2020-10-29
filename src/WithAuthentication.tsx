import React, { FC, useState } from "react";
import { User } from "./index";

interface LoginPageProps {
  logInFunc: LogInFunc;
}

const LoginPage: FC<LoginPageProps> = ({ logInFunc }) => {
  const [user, setUser] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  return (
    <form
      data-testid="login-form"
      onSubmit={(e) => {
        e.preventDefault();
        logInFunc(user, pass);
      }}
    >
      <label>
        user{" "}
        <input
          placeholder="user"
          type="text"
          name="user"
          onChange={(e) => setUser(e.target.value)}
        />
      </label>
      <label>
        pass{" "}
        <input
          placeholder="password"
          type="password"
          name="pass"
          onChange={(e) => setPass(e.target.value)}
        />
      </label>
      <input type="submit" value="log in" />
    </form>
  );
};

type LogInFunc = (user: string, pass: string) => User;

export interface WithAuthenticationProps {
  user?: User;
  logInFunc: LogInFunc;
}

export const WithAuthentication: FC<WithAuthenticationProps> = ({
  children,
  user,
  logInFunc,
}) => (user ? <>{children}</> : <LoginPage logInFunc={logInFunc} />);
