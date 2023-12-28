import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
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
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Write a Task'} />
        <TouchableOpacity>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
  writeTaskWrapper: {
    padding: 20,
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 60,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    backgroundColor: '#FFF',
    padding: 10,
    width: 250,
    alignContent: 'center',
    borderColor: '#C0C0C0',
    borderRadius: 60,
    borderWidth: 1,
  },
  addWrapper: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});
export default App;
