import React from 'react';
import ToDoContent from './src/components/ToDoContent';
import Content from './src/components/Content';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddToDoScreen from './src/components/AddToDo';

function HomeScreen({navigation}) {
  return (
    <Content>
      <ToDoContent navigation={navigation} />
    </Content>
  );
}
function AddToDO() {
  return <AddToDoScreen />;
}
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'ToDo List'}}
        />
        <Stack.Screen
          name="AddToDo"
          component={AddToDO}
          options={{title: 'Add To Do'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
