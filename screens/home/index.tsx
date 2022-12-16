import React, {useCallback, useEffect, useState} from 'react';
import {Button, SafeAreaView, Text, View, FlatList} from 'react-native';
import {TransactionsType} from '../../models/transactions';
import {Colors, styles, VARIANTS} from '../../styles';
import {useTransactions} from './hooks/use-transactions';
import Chance from 'chance';
import {useUser} from '../../shared/hooks/use-user';
var chance = new Chance();

const Item = ({
  title,
  subtitle,
  trailing,
  subtrailing,
}: {
  title: string;
  subtitle: string;
  trailing: string;
  subtrailing: string;
}) => (
  <View style={styles.listItem}>
    <View style={[styles.flex, styles.listItemContent]}>
      <Text style={styles.body}>{title}</Text>
      <Text style={[styles.label]}>{subtitle}</Text>
      <Text style={[styles.small]}>{subtrailing}</Text>
    </View>
    <View style={[styles.listItemTrailing]}>
      <Text style={[styles.body, styles.bold, styles.rightAlign]}>
        ${trailing}.00
      </Text>
    </View>
  </View>
);

export const HomeScreen = () => {
  const username = useUser(state => state.username);
  const initialBalance = useTransactions(state => state.balance);
  const [balance, setBalance] = useState<number | null>(initialBalance);
  const transactions = useTransactions(state => state.transactions);
  const createTransaction = useTransactions(state => state.addTransaction);

  useEffect(() => {
    const unsubscribeBalance = useTransactions.subscribe(state =>
      setBalance(state.balance),
    );
    return () => {
      unsubscribeBalance();
    };
  }, []);

  const onSubmit = useCallback(() => {
    createTransaction({
      reference: chance.hash({casing: 'upper', length: 7}),
      description: chance.sentence({words: 6}),
      amount: chance.integer({min: -150, max: 200}),
    });
  }, [createTransaction]);

  const renderItem = ({item}: {item: TransactionsType}) => (
    <Item
      title={item.reference}
      subtitle={item.description}
      trailing={item.amount.toString()}
      subtrailing={new Date(item.createdAt).toLocaleString('en-US')}
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
        {username && <Text style={styles.highlight}>Hi {username} 👋</Text>}
        <View style={styles.button}>
          <Button
            color={Colors[VARIANTS.PRIMARY_TX]}
            onPress={onSubmit}
            title="Create transaction"
          />
        </View>
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
