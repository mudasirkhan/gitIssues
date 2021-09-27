/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import IssuesScreen from "./js/screens/issues";
import IssueDetails from "./js/screens/issueDetails";

const Stack = createStackNavigator();
function AppNav() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Issues" component={IssuesScreen}  options={{ headerShown: false }}/>
            <Stack.Screen name="IssueDetails" component={IssueDetails}  options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
}


export default class App extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return(
            <NavigationContainer>
                <AppNav/>
            </NavigationContainer>

        )
    }
}
