import crypto from 'crypto'
import { SHA256 } from "crypto-js"
import { UserAuth } from '.';

export const FAKE_USER: UserAuth = {
  name: 'fake-user',
  passwordSalt: '',
  passwordHash: '1234567890123456789012345678901234567890123456789012345678901234'
}

export function randomString(): string {
  return crypto.randomBytes(5).toString('hex');
}

export function hash(password: string, providedSalt?: string): [string, string] {
  const salt = providedSalt || randomString()
  return [SHA256(salt + password).toString(), salt]
}

export function isValid(userPassword: string, { passwordSalt, passwordHash }: UserAuth): boolean {
  const hashed = hash(userPassword, passwordSalt)[0]
  let valid: boolean = true
  for (let i = 0; i < 64; ++i) {
    if (hashed.charAt(i) !== passwordHash.charAt(i)) {
      valid = false
    }
  }
  return valid
}

export function findUser(userName: string, users: UserAuth[]): UserAuth {
  return users.find((u: UserAuth) => u.name === userName) || FAKE_USER
}
