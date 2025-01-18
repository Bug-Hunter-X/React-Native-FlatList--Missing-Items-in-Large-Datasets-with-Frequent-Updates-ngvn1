// bugSolution.js
import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const data = Array.from({ length: 1000 }, (_, i) => ({ id: i, text: `Item ${i}` }));

const App = () => {
  const [items, setItems] = useState(data);

  useEffect(() => {
    // Simulate data updates
    const interval = setInterval(() => {
      const updatedItems = [...items];
      const randomIndex = Math.floor(Math.random() * items.length);
      updatedItems[randomIndex] = { ...updatedItems[randomIndex], text: `Updated ${updatedItems[randomIndex].text}` };
      setItems(updatedItems);
    }, 1000);
    return () => clearInterval(interval);
  }, [items]);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.text}</Text>
    </View>
  );

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default App;