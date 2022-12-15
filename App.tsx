/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {useColorScheme} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LoginScreen} from './screens/login';
import {HomeScreen} from './screens/home';

import create from 'zustand';
import {Colors, VARIANTS} from './styles';
// Typescript:
// TODO:
// Implement balance function and update the balance transaction added/removed
// Modify the add transaction input of number
// Implemment the global the name and have loose dependencies (single responsibility)
// Fix the styling
export const useAppStore = create(set => ({
  balance: 0,
  name: '',
  setName: name => set(state => ({name: name})),
  transactions: [],
  addTransaction: transaction =>
    set(state => ({
      ...state,
      transactions: [
        ...state.transactions,
        {
          id: state.transactions.length + 1,
          title: transaction,
        },
      ],
    })),
}));

// import create from 'zustand';
// import zustandFlipper from 'react-native-flipper-zustand';

// type BearStoreT = {
//   bears: number;
//   increasePopulation: () => void;
//   removeAllBears: () => void;
// };

const Stack = createNativeStackNavigator();

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Overview',
            headerStyle: {
              backgroundColor: Colors[VARIANTS.SURFACE_BG],
            },
            headerShadowVisible: false,
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
      {/* <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <Header />
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <Section title="Step One">
              Edit <Text style={styles.highlight}>App.tsx</Text> to change this
              screen and then come back to see your edits.
            </Section>
            <Section title="See Your Changes">
              <ReloadInstructions />
            </Section>
            <Section title="Debug">
              <DebugInstructions />
            </Section>
            <Section title="Learn More">
              Read the docs to discover what to do next:
            </Section>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView> */}
    </NavigationContainer>
  );
};

export default App;
