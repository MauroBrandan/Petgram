import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { Provider } from './Context'

import { App } from './App'

const client = new ApolloClient({
	uri: 'https://petgram-api-mb.vercel.app/graphql',
	cache: new InMemoryCache(),
})

ReactDOM.render(
	<Provider>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</Provider>,
	document.getElementById('app')
)
