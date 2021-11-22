import { useState } from 'react'

export const useInputValue = (initialState) => {
	const [value, setvalue] = useState(initialState)
	const onChange = (e) => setvalue(e.target.value)

	return { value, onChange }
}
