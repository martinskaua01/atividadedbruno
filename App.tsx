import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Animated, TouchableOpacity } from 'react-native';

const nomes = [
  'Ana Maria',
  'Bruno Alves',
  'Carlos José',
  'Daniel Martins',
  'Efraim Gomes',
  'Francisco Junior',
];

function App() {
  const [data, setData] = useState(nomes);
  const [animatedValue] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, []);

  const renderItem = ({ item, index }) => {
    const translateY = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-50, 0],
    });

    return (
      <Animated.View
        style={[
          styles.item,
          { transform: [{ translateY }] },
          index % 2 === 0 ? styles.evenItem : styles.oddItem,
        ]}
      >
        <Text style={styles.itemText}>{item}</Text>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  listContainer: {
    paddingVertical: 20,
  },
  item: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  oddItem: {
    backgroundColor: '#f7f7f7',
  },
  evenItem: {
    backgroundColor: '#e0e0e0',
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
