import clsx from "clsx";
import styles from "./EditSelectedUser.module.sass";
import { TextField } from "@/shared/ui/textField/TextField";
import { Button } from "@/shared/ui/button/Button";
import { useEditSelectUser } from "../lib/hooks/useEditSelectUser";
import { Controller } from "react-hook-form";
import { UserFormFields } from "../model/types/editSelectedUserTypes";
import { getErrorValue } from "@/shared/lib/helpers/getErrorValue";
import { Modal } from "@/shared/ui/modal/Modal";
import { Text } from "@/shared/ui/text/Text";

interface EditSelectUserProps {
	userId: string;
	className?: string;
}

export const EditSelectedUser = ({ userId, className }: EditSelectUserProps) => {
	const { control, phonemask, errors, disabledButton, isSucceful, resetField, handleOnSubmit, handleCloseModal } =
		useEditSelectUser({ userId });

	return (
		<>
			<form noValidate autoComplete="off" onSubmit={handleOnSubmit} className={clsx(styles.editSelectUser, className)}>
				<div className={styles.fields}>
					{UserFormFields.map(({ name, title }) => (
						<Controller
							key={name}
							control={control}
							name={name}
							render={({ field }) => (
								<TextField
									{...field}
									ref={name === "phone" ? phonemask : field.ref}
									title={title}
									error={getErrorValue(errors, name)?.message}
									onClearField={() => resetField(name)}
								/>
							)}
						/>
					))}
				</div>

				<Button type="submit" className={styles.submit} disabled={disabledButton}>
					Сохранить
				</Button>
			</form>

			{isSucceful && (
				<Modal onClose={handleCloseModal}>
					<div className={styles.modal}>
						<img src="./images/succesful.png" alt="succesful" width={84} height={84}/>
						<Text text="Изменения сохранены!" size="lg" bold align="center" />
					</div>
				</Modal>
			)}
		</>
	);
};
