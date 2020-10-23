import { render } from "@testing-library/react"
import React from "react"
import { WithAuthenticationProps, WithAuthentication } from "./WithAuthentication"

describe('with authentication', () => {
  it('should require logged in user', () => {
    const props: WithAuthenticationProps = {
      user: undefined
    }
    const { getByTestId } = render(<WithAuthentication user={props.user} />)

    expect(getByTestId('login-form')).toBeInTheDocument()
  })

  it('should render child component when user is logged in', () => {
    const props: WithAuthenticationProps = {
      user: { name: 'adam', tag: '@adam' }
    }
    const { getByText } = render(<WithAuthentication user={props.user}>
      user is logged in
    </WithAuthentication>)

    expect(getByText('user is logged in')).toBeInTheDocument()
  })
})