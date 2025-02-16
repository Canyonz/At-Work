import { useGetUserByIdQuery, userActions } from "@/entities/users";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { UserForm, UserFormType } from "../../model/types/editSelectedUserTypes";
import { useMask } from "@react-input/mask";
import { phoneMask } from "@/shared/lib/consts/inputValidate";

interface UseEditSelectUserProps {
	userId: string;
}

export const useEditSelectUser = ({ userId }: UseEditSelectUserProps) => {
	const [isSucceful, setIsSucceful] = useState(false);
	const { data: userData } = useGetUserByIdQuery({ id: Number(userId) });
	const dispatch = useAppDispatch();

	const {
		control,
		handleSubmit,
		resetField,
		reset,
		formState: { errors, isValid, isSubmitting },
	} = useForm<UserFormType>({
		mode: "onChange",
		resolver: zodResolver(UserForm),
		defaultValues: {
			name: "",
			username: "",
			email: "",
			address: { city: "" },
			phone: "",
			company: { name: "" },
		},
	});
	const phonemask = useMask(phoneMask.mask);

	const disabledButton = !isValid || isSubmitting;

	const handleCloseModal = () => {
		setIsSucceful(false);
	};

	const handleOnSubmit = handleSubmit((data) => {
		dispatch(userActions.editUserById({ id: 1, ...data }));
		setIsSucceful(true);
	});

	useEffect(() => {
		if (userData) reset(userData, { keepDefaultValues: true });
	}, [reset, userData]);

	return { control, phonemask, errors, disabledButton, isSucceful, resetField, handleOnSubmit, handleCloseModal };
};
