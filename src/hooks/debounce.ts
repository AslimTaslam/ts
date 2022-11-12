import { useState, useEffect } from "react";

export function useDebounce(value: string, delay: number = 1500): string {
	const [ debounced, setDebounced ] = useState(value);

	useEffect(() => {
		const inst = setTimeout(() => setDebounced(value), delay);
		return () => clearTimeout(inst)
	}, [value, delay]);
	return debounced;
}
