export function getValues<T extends Record<string, unknown>>(values: T) {
	return {
		keys: Object.keys(values) as (keyof T)[],
		values: Object.values(values) as T[keyof T][],
	};
}

export function keys<T extends Record<string, unknown>>(values: T[]) {
	return values.flatMap((value) => Object.keys(value) as (keyof T)[]);
}
