import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const completedTask = props => {
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
    backgroundColor: 'gray',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    backgroundColor: '#FFF',
    width: 24,
    height: 24,
    opacity: 0.4,
    marginRight: 15,
    borderRadius: 5,
  },
  itemText: {
    maxWidth: '80%',
    color: 'white',
    textDecorationLine: 'line-through',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#FFF',
    borderRadius: 5,
    borderWidth: 2,
  },
});

export default completedTask;
