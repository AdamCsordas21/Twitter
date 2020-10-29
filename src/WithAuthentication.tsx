import React, { FC, useState } from "react";
import { User } from "./index";

interface LoginPageProps {
  logInFunc: (user: string, pass: string) => void;
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

type LogInFunc = (user: string, pass: string) => User | null;

export interface WithAuthenticationProps {
  logInFunc: LogInFunc;
}

export const WithAuthentication: FC<WithAuthenticationProps> = ({
  children,
  logInFunc,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const myLogInFunc = (user: string, pass: string): void => {
    setUser(logInFunc(user, pass));
  };
  return user !== null ? <>{children}</> : <LoginPage logInFunc={myLogInFunc} />;
};
