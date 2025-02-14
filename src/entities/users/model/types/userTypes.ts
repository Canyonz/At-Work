interface Address {
	city: string;
}

interface Company {
	name: string;
}

export interface UserData {
	id: number;
	username: string;
	address: Address;
	company: Company;
	avatar: string;
	archive: boolean;
}

export interface UserSchema {
	dataById: Record<number, UserData>;
	isLoading: boolean;
	error?: string;
}
