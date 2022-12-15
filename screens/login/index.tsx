import React, { useState, useCallback } from "react";
import {
  SafeAreaView,
  TextInput,
  Text,
  Button,
  View,
} from 'react-native';

import { useAppStore } from "../../App";

export const LoginScreen = ({ navigation }) => {
    const [name, setName] = useState("");

    const onChangeText = (inputText) => {
        setName(()=> inputText);
    }

    const setAppName = useAppStore((state) => state.setName);
    const onSubmit = useCallback(() => {
        setAppName(name);
        navigation.navigate('Home');
        // TODO: Set the name in global storage
        // TODO: Navigate to the home screen
    }, [name])

    return (<SafeAreaView style={{flex: 1}}>
        <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
            <Text>Login Screen</Text>

            <Text>Name</Text>
            <TextInput
                style={{ backgroundColor: "red", height: 60 }}
                onChangeText={onChangeText}
                // value={name}
            />
            <Button
                onPress={onSubmit}
                title="Login"
            />
        </View>
      </SafeAreaView>
    );
  }