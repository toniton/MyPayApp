import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useCallback, useEffect, useState} from 'react';
import {Button, SafeAreaView, Text, View, FlatList} from 'react-native';
import {useAppStore} from '../../App';
import {styles} from '../../styles';

const Item = ({title}) => (
  <View>
    <Text>{title}</Text>
  </View>
);

export const HomeScreen = () => {
  const [name, setName] = useState<string | null>(null);
  const transactions = useAppStore(state => state.transactions);
  const createTransaction = useAppStore(state => state.addTransaction);

  console.log(transactions);

  useEffect(() => {
    (async () => {
      const username = await AsyncStorage.getItem('@user');
      setName(username);
    })();
  }, []);

  const onSubmit = useCallback(() => {
    createTransaction('$20');
  });

  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <Text style={styles.label}>Balance</Text>
        <Text style={styles.title}>$0</Text>
        {name && <Text style={styles.highlight}>Hi {name} 👋</Text>}
        <FlatList
          data={transactions}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        <Button onPress={onSubmit} title="Create transaction" />
      </View>
    </SafeAreaView>
  );
};
