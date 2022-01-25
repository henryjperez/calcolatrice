import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, } from 'react-native-safe-area-context';
import AppNavigation from "./src/navigation/AppNavigation";
import ContextProvider from "./src/context/context_provider";

export default function App() {
	return (
		<ContextProvider>
			<SafeAreaProvider>
				<NavigationContainer>
					<AppNavigation />
				</NavigationContainer>
			</SafeAreaProvider>
		</ContextProvider>
	);
}