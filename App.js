import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { NavigationContainer } from '@react-navigation/native';
import { 
   ApplicationProvider,
   IconRegistry,
	 Button,
   } from '@ui-kitten/components';
import BottomTabNavigator from './components/BottomTabNavigator';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = ({ navigation }) => {
  return (
		<BottomTabNavigator/>
  );
}

const BackScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()}>
				Go back home
			</Button>
    </View>
  );
}


const Drawer  = createDrawerNavigator();


export default function App() {

  return (
			<ApplicationProvider
				mapping={mapping}
				theme={lightTheme}>
				<IconRegistry icons={EvaIconsPack} />
        <SafeAreaProvider>
				<NavigationContainer>

					<Drawer.Navigator initialRouteName="Home">
						<Drawer.Screen name="Home" component={HomeScreen} />
						<Drawer.Screen name="Back" component={BackScreen} />
					</Drawer.Navigator>
					
				</NavigationContainer>
		</SafeAreaProvider>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight
  },
});


