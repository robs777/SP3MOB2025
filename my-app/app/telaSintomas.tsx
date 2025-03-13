import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import TopoOdonto from '../components/TopoOdonto';
import { Link } from 'expo-router';

type TaskItemProps = {
  id: number;
  text: string;
  onRemove: (id: number) => void;
  color?: string;
  important?: boolean;
  daysLeft?: number;
};

const TaskItem = ({ id, text, onRemove }: TaskItemProps) => {
  return (
    <View style={styles.taskItem}>
      <Text style={{flex: 1, color: 'white'}}>{text}</Text>
      <Pressable onPress={() => onRemove(id)}>
        <Ionicons name="trash" size={24} color="white" />
      </Pressable>
    </View>
  );
};

type Task = {
  id: number;
  text: string;
};

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    const newItem = {
      id: Math.random(),
      text: newTask,
    };
    console.log(newItem);
    setTasks([...tasks, newItem]);
    setNewTask('');
  };

  const removeTaskItem = (id: number) => {
    const cleanedTasks = tasks.filter((task) => task.id !== id);
    setTasks(cleanedTasks);
  };

  return (

    
    <View style={styles.container}>
      <TopoOdonto></TopoOdonto>

      <View style={styles.content}>
      <TextInput value={newTask} style={styles.input} onChangeText={setNewTask} placeholder="Adicione uma nova tarefa" />
      <View style={styles.botoes}>
      <Pressable style={styles.button} onPress={addTask}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </Pressable>
      <Link href="/telaScanner" style={styles.botaoIrScanner} >
        <Text style={styles.botaoTextoScanner}>Scanner</Text>
      </Link>

      </View>
      
      <FlatList
        style={styles.list}
        data={tasks}
        renderItem={({ item }) => <TaskItem id={item.id} text={item.text} onRemove={removeTaskItem} />}
        keyExtractor={(item) => item.id.toString()}
      />

      
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },

  content: {
   
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  botoes:{
    flexDirection:'row',
    gap:10
  },

  button: {
    backgroundColor: '#0066cc',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
  },

  botaoIrScanner: {
    backgroundColor: '#0066cc',
    padding: 10,
    borderRadius: 8,

  },
  botaoTextoScanner: {
    color: 'white',
  },
  list: {
    width: '60%',
    marginTop: 20,
    height:'100%'
  },
  taskItem: {
    flexDirection: 'row',
    backgroundColor: '#60c4f2',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    
  },
});