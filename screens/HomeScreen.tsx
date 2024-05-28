// screens/HomeScreen.tsx
import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native'; // Importer useFocusEffect
import api from '../services/api';

type Article = {
  id: number;
  title: string;
  description: string;
};

const HomeScreen: React.FC = ({ navigation }) => {
  const [articles, setArticles] = useState<Article[]>([]);

  const fetchArticles = async () => {
    const data = await api.getArticles();
    const formattedData = data.map((item: any) => ({
      id: item._id || item.id,
      title: item.title,
      description: item.description,
    }));
    setArticles(formattedData);
  };

  useFocusEffect(
    useCallback(() => {
      fetchArticles();
    }, [])
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Article', { id: item.id })}>
            <View style={styles.article}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  article: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});

export default HomeScreen;
