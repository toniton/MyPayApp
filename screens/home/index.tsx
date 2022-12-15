import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useCallback, useEffect, useState} from 'react';
import {Button, SafeAreaView, Text, View, FlatList} from 'react-native';
import {TransactionsType} from '../../models/transactions';
import {styles} from '../../styles';
import {useTransactions} from './hooks/use-transactions';

const Item = ({title}: {title: string}) => (
  <View>
    <Text>{title}</Text>
  </View>
);

export const HomeScreen = () => {
  const [name, setName] = useState<string | null>(null);
  const initialBalance = useTransactions(state => state.balance);
  const [balance, setBalance] = useState<number | null>(initialBalance);
  const transactions = useTransactions(state => state.transactions);
  const createTransaction = useTransactions(state => state.addTransaction);

  console.log(transactions);

  useEffect(() => {
    const unsubscribeBalance = useTransactions.subscribe(state =>
      setBalance(state.balance),
    );
    (async () => {
      const username = await AsyncStorage.getItem('@user');
      setName(username);
    })();
    return () => {
      unsubscribeBalance();
    };
  }, []);

  const onSubmit = useCallback(() => {
    createTransaction({
      reference: '$20',
      description: 'house rent',
      amount: 40,
    });
  }, [createTransaction]);

  const renderItem = ({item}: {item: TransactionsType}) => (
    <Item title={item.amount.toString()} />
  );

  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.label}>Balance</Text>
          <Text style={styles.title}>${balance}</Text>
        </View>
        {name && <Text style={styles.highlight}>Hi {name} 👋</Text>}
        <Button onPress={onSubmit} title="Create transaction" />
        <FlatList
          data={transactions}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};
