import React, {useState, useCallback} from 'react';
import {SafeAreaView, TextInput, Text, Button, View, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles, VARIANTS} from '../../styles';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const LoginScreen = ({navigation}) => {
  const [name, setName] = useState<string>('Hi');

  const onChangeText = (inputText: string) => {
    console.log(inputText);
    setName(() => inputText);
  };

  const onSubmit = useCallback(async () => {
    try {
      await AsyncStorage.setItem('@user', name);
      navigation.navigate('Home');
    } catch (e) {
      Alert.alert('Login failed', 'an error occurred trying to login');
    }
    // TODO: Set the name in global storage
    // TODO: Navigate to the home screen
  }, [name, navigation]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.section}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            textContentType="username"
            value={name}
            placeholder="Username"
          />
        </View>
        <View style={styles.button}>
          <Button
            color={Colors[VARIANTS.PRIMARY_TX]}
            onPress={onSubmit}
            title="Login"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
