import { UserAuth } from ".";
import { FAKE_USER, findUser, hash, isValid } from "./hashing";

describe('hashing', () => {
  it('hashes password with random salt for user to register', () => {
    const password1 = 'secret1'
    const password2 = 'secret2'

    const [hashed1, salt1] = hash(password1)
    const [hashed2, salt2] = hash(password2)

    expect(hashed1).toHaveLength(64)
    expect(hashed2).toHaveLength(64)
    expect(hashed1).not.toEqual(hashed2)
    expect(salt1).toHaveLength(10)
    expect(salt2).toHaveLength(10)
    expect(salt1).not.toEqual(salt2)
  })

  it('validates correct user password', () => {
    const userProvided = 'secret1'
    const userRecorded: UserAuth = {
      name: 'user1',
      passwordSalt: 'd67a74c609',
      passwordHash: '835476041566d9d1cef39213e3f7f4d9280e6f55316621bfba243c0d9828deb9'
    }

    const result = isValid(userProvided, userRecorded)

    expect(result).toBe(true)
  })

  it('validates incorrect user password', () => {
    const userProvided = 'invalid'
    const userRecorded: UserAuth = {
      name: 'user1',
      passwordSalt: 'd67a74c609',
      passwordHash: '835476041566d9d1cef39213e3f7f4d9280e6f55316621bfba243c0d9828deb9'
    }

    const result = isValid(userProvided, userRecorded)

    expect(result).toBe(false)
  })

  it('finds user to validate password', () => {
    const userName = 'user2'
    const users: UserAuth[] = [
      {
        name: 'user1',
        passwordSalt: 'salt1',
        passwordHash: 'hash1'
      },
      {
        name: 'user2',
        passwordSalt: 'salt2',
        passwordHash: 'hash2'
      }
    ]
    const userFound: UserAuth | undefined = findUser(userName, users)

    expect(userFound).toEqual({
      name: 'user2',
      passwordSalt: 'salt2',
      passwordHash: 'hash2'
    })
  })

  it('returns fake user to validate password when not found', () => {
    const userName = 'user3'
    const users: UserAuth[] = [
      {
        name: 'user1',
        passwordSalt: 'salt1',
        passwordHash: 'hash1'
      },
      {
        name: 'user2',
        passwordSalt: 'salt2',
        passwordHash: 'hash2'
      }
    ]

    const userFound: UserAuth = findUser(userName, users)

    expect(userFound).toEqual(FAKE_USER)
  })
})
