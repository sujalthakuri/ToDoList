import React, {useState} from 'react';
import {
  View,
  Button,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Platform,
  Keyboard,
} from 'react-native';
import Task from './components/Task';
import CompletedTask from './components/CompletedTask';

const App = () => {
  const [task, setTask] = useState('');
  const [addedTask, setAddedTask] = useState([]);
  const [deletedTask, setDeletedTask] = useState([]);

  const addTask = () => {
    Keyboard.dismiss();
    setAddedTask([...addedTask, task]);
    setTask('');
  };

  const completeTask = index => {
    let tempTask = [...addedTask];
    setDeletedTask([...deletedTask, tempTask[index]]);
    console.log([...deletedTask]);
    tempTask.splice(index, 1);
    setAddedTask(tempTask);
  };

  const reAddDeletedTask = index => {
    let temp = [...deletedTask];
    setAddedTask([...addedTask, temp[index]]);
    temp.splice(index, 1);
    setDeletedTask(temp);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.section}>Today's Tasks</Text>
        <View style={styles.items}>
          {addedTask.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
          {deletedTask.length != 0 && (
            <View>
              <Text style={[styles.section]}>Completed Tasks</Text>
            </View>
          )}

          {deletedTask.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => reAddDeletedTask(index)}>
                <CompletedTask text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.input}
          placeholder={'Write a Task'}
          value={task}
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity onPress={() => addTask()}>
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
