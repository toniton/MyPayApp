import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useCallback, useEffect, useState} from 'react';
import {Button, SafeAreaView, Text, View, FlatList} from 'react-native';
import {TransactionsType} from '../../models/transactions';
import {styles} from '../../styles';
import {useTransactions} from './hooks/use-transactions';

const Item = ({
  title,
  subtitle,
  value,
}: {
  title: string;
  subtitle: string;
  value: string;
}) => (
  <View style={styles.listItem}>
    <View style={[styles.flex]}>
      <Text style={styles.body}>{title}</Text>
      <Text style={[styles.label, styles.none]}>{subtitle}</Text>
    </View>
    <View style={[styles.listItemTrailing]}>
      <Text style={[styles.body, styles.bold, styles.rightAlign]}>
        ${value}.00
      </Text>
      <Text style={[styles.label, styles.small, styles.rightAlign]}>
        21 Nov, 2022 21:00
      </Text>
    </View>
  </View>
);

export const HomeScreen = () => {
  const [name, setName] = useState<string | null>(null);
  const initialBalance = useTransactions(state => state.balance);
  const [balance, setBalance] = useState<number | null>(initialBalance);
  const transactions = useTransactions(state => state.transactions);
  const createTransaction = useTransactions(state => state.addTransaction);

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
      reference: 'RNPYLD20',
      description: 'house rent',
      amount: 40,
    });
  }, [createTransaction]);

  const renderItem = ({item}: {item: TransactionsType}) => (
    <Item
      title={item.reference}
      subtitle={item.description}
      value={item.amount.toString()}
    />
  );

  return (
    <View style={[styles.flex]}>
      <SafeAreaView />
      <View style={[styles.container]}>
        <View style={styles.section}>
          <Text style={styles.label}>Balance</Text>
          <Text style={[styles.title, styles.bold]}>${balance}</Text>
        </View>
        {name && <Text style={styles.highlight}>Hi {name} 👋</Text>}
        <Button onPress={onSubmit} title="Create transaction" />
      </View>
      <View style={[styles.curved, styles.flex, styles.sheet]}>
        <View style={[styles.section, styles.content]}>
          <Text style={[styles.body, styles.bold]}>Transactions</Text>
        </View>
        <FlatList
          style={[styles.flex, styles.list]}
          data={transactions}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};
