import React, { useState, useEffect } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import axios from 'axios';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { 
   BottomNavigation,
   BottomNavigationTab,
   Layout, Card, Text } from '@ui-kitten/components';
const { Navigator, Screen } = createBottomTabNavigator();




const UsersScreen = ({data}) => (
	<Layout style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
		{
			data === [] ?
			<></>:
			data.map((val, index)=>{
				return <Card style={styles.card} key={`user-${index}`} >
					<Text category='h4'>{val.name}</Text>
					<Text category='p1'>{val.city}</Text>
				</Card>
			})
		}
		
	</Layout>
);

const TabScreen = () => (
	<Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		<Card style={styles.card}>
			<Text category='h4'>text</Text>
			<Text category='p1'></Text>
		</Card>
	</Layout>
);
const TabNavigator = ({dataList, pageList}) => (
	
	<Navigator tabBar={props => <BottomTabBar {...props} />}>
		<Screen name='tab1' children={()=><UsersScreen data={dataList}/>}/>
		<Screen name='tab2' component={TabScreen}/>
	</Navigator>
);
const BottomTabBar = ({ navigation, state }) => (
	<BottomNavigation
		selectedIndex={state.index}
		onSelect={index => navigation.navigate(state.routeNames[index])}>
		<BottomNavigationTab title='tab1'/>
		<BottomNavigationTab title='tab2'/>
	</BottomNavigation>
);

export default function BottomTabNavigator() {
    const [userList, setUserList] = useState([]);
	const [titleList, setTitleList] = useState([]);

    useEffect(() => {
        axios.get(`https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8`).then((response) => {
        	setUserList(response.data)
        });
		
    },[]);

	
    return (
		<TabNavigator dataList={userList} />
  );
}

const styles = StyleSheet.create({
	
	card: {
	  flex: 1,
	  margin: 2,
	  minWidth: 300,
	},
	
  });