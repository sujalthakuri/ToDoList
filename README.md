# Introduction

To Do List, is an application I have developed to learn the basics of React-Native. It perfectly encapsulates components, states to begin with.

```
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
```

These code in particular have greatly taught me working with the functionalities and styling of the screen.

```
 const [task, setTask] = useState('');
  const [addedTask, setAddedTask] = useState([]);

  const addTask = () => {
    Keyboard.dismiss();
    setAddedTask([...addedTask, task]);
    setTask('');
    console.log(addedTask);
  };

  const completeTask = index => {
    let tempTask = [...addedTask];
    tempTask.splice(index, 1);
    setAddedTask(tempTask);
  };
```

These are the code functionalities that are responsible for Adding and Completing the Tasks
