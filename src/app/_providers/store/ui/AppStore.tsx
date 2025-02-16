import { Provider } from "react-redux";
import { storeConfig } from "../storeConfig/storeConfig";

interface AppStoreProps {
	children: React.ReactElement;
}

export const AppStore = ({ children }: AppStoreProps) => {
	return <Provider store={storeConfig}>{children}</Provider>;
};
