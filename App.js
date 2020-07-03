import React from 'react';

import HomeScreen from './screens/HomeScreen';
import AddNewContactScreen from './screens/AddNewContactScreen';
import EditContactScreen from './screens/EditContactScreen';
import ViewContactScreen from './screens/ViewContactScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack =createStackNavigator();
function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Contact App"
          component={HomeScreen}
          options={{ 
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "#f5412e",
            },
            headerTitleStyle:{
              fontWeight:'bold',
              color:"#fff",
            },
            }}/>
        <Stack.Screen
          name="Add New Contact"
          component={AddNewContactScreen}/>
        <Stack.Screen
          name="Edit Contact"
          component={EditContactScreen}/>
        <Stack.Screen
          name="View Contact"
          component={ViewContactScreen}/>
          
        </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
