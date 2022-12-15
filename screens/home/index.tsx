import React, { useState, useCallback } from "react";
import {
  Button,
  SafeAreaView,
  Text,
  View,
  FlatList,
} from 'react-native';
import { useAppStore } from "../../App";

const Item = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);

export const HomeScreen = () => {
    const name = useAppStore((state) => state.name);
    const transactions = useAppStore((state) => state.transactions);
    const createTransaction = useAppStore((state) => state.addTransaction);

    console.log(transactions);

    const onSubmit = useCallback(()=> {
      createTransaction("$20");
    });

    const renderItem = ({ item }) => (
      <Item title={item.title} />
    );

    return (<SafeAreaView style={{flex: 1}}>
      <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
            <Text>Home Screen {name}</Text>
            <FlatList
              data={transactions}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
            <Button
                onPress={onSubmit}
                title="Create traansaction"
            />
        </View>
      </SafeAreaView>
    );
  }