import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Task = props => {
  return (
    <View style={style.item}>
      <View style={style.itemLeft}>
        <View style={style.square} />
        <Text style={style.itemText}>{props.text}</Text>
      </View>
      <View style={style.circular}></View>
    </View>
  );
};

const style = StyleSheet.create({
  item: {
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    backgroundColor: '#55BCF6',
    width: 24,
    height: 24,
    opacity: 0.4,
    marginRight: 15,
    borderRadius: 5,
  },
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#558CF6',
    borderRadius: 5,
    borderWidth: 2,
  },
});

export default Task;
