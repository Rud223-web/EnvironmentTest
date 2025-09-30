import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#3498db" />
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to CPAN 213</Text>
        <Text style={styles.subtitle}>Cross-Platform Mobile Development</Text>
      </View>
      <ScrollView style={styles.content}>
        <Text style={styles.greeting}>Hello, I'm Rudy!</Text>
        <Text style={styles.info}>Student ID: N01699134</Text>
        <Text style={styles.info}>Program: CPAN</Text>
        
        <View style={styles.goals}>
          <Text style={styles.sectionTitle}>My Course Goals:</Text>
          <Text style={styles.goal}>• Learn React Native fundamentals</Text>
          <Text style={styles.goal}>• Build cross-platform mobile apps</Text>
          <Text style={styles.goal}>• Master state management with Redux</Text>
          <Text style={styles.goal}>• Deploy apps to app stores</Text>
        </View>

        <View style={styles.funSection}>
          <Text style={styles.sectionTitle}>Fun Fact:</Text>
          <Text style={styles.funText}>This is my first React Native app! 🎉</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    backgroundColor: '#3498db',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    fontStyle: 'italic',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  greeting: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
    marginBottom: 5,
  },
  goals: {
    marginTop: 30,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  goal: {
    fontSize: 14,
    color: '#34495e',
    marginBottom: 5,
    lineHeight: 20,
  },
  funSection: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#e8f6f3',
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#1abc9c',
  },
  funText: {
    fontSize: 14,
    color: '#16a085',
    fontStyle: 'italic',
  },
});

export default App;