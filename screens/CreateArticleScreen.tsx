// screens/CreateArticleScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import api from '../services/api';

const CreateArticleScreen: React.FC = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    const userId = '665495abe6145aab1dd1cf6e'; // Remplacez par un ID d'utilisateur valide
    const location = { type: 'Point', coordinates: [40.7128, -74.0060] }; // Remplacez par des coordonnées réelles

    const article = { title, description, userId, location };
    console.log('Sending article:', article);

    try {
      const response = await api.createArticle(article);
      console.log('Response:', response);
      console.log('Response id:', response.id);
      if (response && (response.id || response._id)) {
          console.log('Navigating back:', response.id);
          navigation.navigate('HomeMain');
      } else {
        Alert.alert('Error', 'Failed to create article');
      }
    } catch (error) {
      console.error('Error creating article:', error);
      Alert.alert('Error', 'Failed to create article');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Create Article" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
});

export default CreateArticleScreen;
