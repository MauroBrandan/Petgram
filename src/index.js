import React from 'react'
import ReactDOM from 'react-dom'
import {
	ApolloClient,
	ApolloProvider,
	InMemoryCache,
	ApolloLink,
	HttpLink,
	from,
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { Provider } from './Context'
import { App } from './App'

const authMiddleware = new ApolloLink((operation, forward) => {
	const token = window.sessionStorage.getItem('token')
	const authorization = token ? `Bearer ${token}` : ''

	if (token) {
		operation.setContext({
			headers: {
				authorization,
			},
		})
	}

	return forward(operation)
})

const errorMiddleware = onError(({ networkError }) => {
	if (networkError && networkError.result.code === 'invalid_token') {
		window.sessionStorage.removeItem('token')
		window.location.href = '/user'
	}
})

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: from([
		authMiddleware,
		new HttpLink({
			uri: 'https://petgram-api-mb.vercel.app/graphql',
		}),
	]),
	onError: errorMiddleware,
})

ReactDOM.render(
	<ApolloProvider client={client}>
		<Provider>
			<App />
		</Provider>
	</ApolloProvider>,
	document.getElementById('app')
)
