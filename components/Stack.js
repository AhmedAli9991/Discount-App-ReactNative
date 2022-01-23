import * as React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Start from'./Start'
import History from './History'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
  <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={Start}
          options={{ title: 'Discount App', headerStyle: {
              backgroundColor: 'blue'
           } }}
        />
        <Stack.Screen 
        name="History" 
        component={History}           
        options={{ title: 'Discount History', headerStyle: {
              backgroundColor: 'blue'
           } }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;