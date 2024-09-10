import { useParamState } from "library/useParamState"

export function SearchBar() {
	const [query, setQuery] = useParamState("query")

	return (
		<div>
			search
			<input value={query ?? ""} onChange={(e) => setQuery(e.target.value)} />
		</div>
	)
}
