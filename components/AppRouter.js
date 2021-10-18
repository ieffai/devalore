import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {publicRoutes} from '../routes/publicRoutes';
import {NavigationContainer} from '@react-navigation/native';
import Colors from '../utils/Colors';
import {Button} from '.';
import {FLASHLIGHT} from '../utils/constants';
import {flashlightToggle} from '../utils/flashlightUtils';

const AuthStack = createStackNavigator();

const AppRouter = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        {publicRoutes.map(({name, Component, title}) => (
          <AuthStack.Screen
            key={name}
            name={name}
            component={Component}
            options={{
              title: title,
              headerRight: () => (
                <Button
                  text={FLASHLIGHT}
                  onPress={flashlightToggle}
                  buttonColor={Colors.greenSecondary}
                  textColor={Colors.white}
                  isFlash={true}
                />
              ),
            }}
          />
        ))}
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
