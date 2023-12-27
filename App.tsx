import React from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';
import Task from './components/Task';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.section}>Today's Tasks</Text>
        <View style={styles.items}>
          <Task text="Task 1" />
          <Task text="Task 2" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  section: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
});
export default App;
