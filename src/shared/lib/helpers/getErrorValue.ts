import { FieldError } from "react-hook-form";

/* eslint-disable @typescript-eslint/no-explicit-any */
export function getErrorValue<T>(obj: T, path: string): FieldError {
	return path.split(".").reduce((acc: any, part: string) => acc && acc[part], obj);
}
