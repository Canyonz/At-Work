import { z } from "zod";

export const UserForm = z.object({
	name: z.string().nonempty({ message: "Заполните поле" }).trim(),
	username: z.string().nonempty({ message: "Заполните поле" }).trim(),
	email: z.string().nonempty({ message: "Заполните поле" }).email("Некорректный формат почты").trim(),
	address: z.object({
		city: z.string().nonempty({ message: "Заполните поле" }).trim(),
	}),
	phone: z
		.string()
		.regex(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, "Неверный формат телефона")
		.nonempty({ message: "Заполните поле" })
		.trim(),
	company: z.object({
		name: z.string().nonempty({ message: "Заполните поле" }).trim(),
	}),
});

export type UserFormType = z.infer<typeof UserForm>;

export const UserFormFields = [
	{ name: "name", title: "Имя" },
	{ name: "username", title: "Никнейм" },
	{ name: "email", title: "Почта" },
	{ name: "address.city", title: "Город" },
	{ name: "phone", title: "Телефон" },
	{ name: "company.name", title: "Название компании" },
] as const;
