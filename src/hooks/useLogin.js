import { gql, useMutation } from '@apollo/client'

const LOGIN = gql`
	mutation login($input: UserCredentials!) {
		login(input: $input)
	}
`

export const useLogin = () => {
	const [login, { loading, error }] = useMutation(LOGIN)

	return { login, loading, error }
}
