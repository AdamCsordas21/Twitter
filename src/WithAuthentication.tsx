import React, { createContext, FC, useState } from "react";
import { User, UserAuth } from "./index";

interface LoginPageProps {
  logInFunc(user: string, pass: string): void;
}

const LoginPage: FC<LoginPageProps> = ({ logInFunc }) => {
  const [user, setUser] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );
  return (
    <form
      data-testid="login-form"
      onSubmit={(e) => {
        e.preventDefault();
        try {
          logInFunc(user, pass);
        } catch (e) {
          setErrorMessage(e.message);
        }
      }}
    >
      {errorMessage && <div>{errorMessage}</div>}
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

/**
 * @throws Error when user credentials are invalid or user is not found
 */
type LogInFunc = (user: string, pass: string) => User;

export interface WithLoginFormProps {
  logInFunc: LogInFunc;
}

export const WithLoginForm: FC<WithLoginFormProps> = ({
  children,
  logInFunc,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const myLogInFunc: LoginPageProps['logInFunc'] = (user, pass) => {
    setUser(logInFunc(user, pass));
  };
  return user !== null ? (
    <>{children}</>
  ) : (
    <LoginPage logInFunc={myLogInFunc} />
  );
};

const tempUser: User = { name: "", tag: "@" };
export const UserContext = createContext<User>(tempUser);

interface WithAuthenticationProps {
  users: User[];
  userCreds: UserAuth[];
  isValidPassword(
    pass: string,
    { passwordSalt, passwordHash }: UserAuth
  ): boolean;
  findUser(user: string, users: UserAuth[]): UserAuth;
}

export const WithAuthentication: FC<WithAuthenticationProps> = ({
  users,
  userCreds,
  isValidPassword,
  findUser,
  children,
}) => {
  const [loggedInUser, setLoggedInUser] = useState<User>(tempUser);
  const logInFunc: LogInFunc = (user, pass) => {
    const maybeUser = findUser(user, userCreds);
    if (isValidPassword(pass, maybeUser)) {
      const authUser = users.find((u: User) => u.name === maybeUser.name);
      if (authUser === undefined) {
        throw new Error("User not found");
      }
      setLoggedInUser(authUser);
      return authUser;
    }
    throw new Error("Invalid user credentials");
  };

  return (
    <WithLoginForm logInFunc={logInFunc}>
      <UserContext.Provider value={loggedInUser}>
        {children}
      </UserContext.Provider>
    </WithLoginForm>
  );
};
