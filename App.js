import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TextInput,
  Button,
  Text,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItems";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const goalInputHandler = (text) => {
    setGoalText(text);
  };
  const addGoalHandler = (enterText) => {
    setGoalList((currentGoals) => [
      ...currentGoals,
      { text: enterText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  };

  const startAddGoalHandler = () => {
    setModalVisible(true);
  };
  const endAddGoalHandler = () => {
    setModalVisible(false);
  };
  const deleteGoalHandle = (id) => {
    setGoalList((currentGoals) => {
      return currentGoals.filter((value) => value.id !== id);
    });
  };
  return (
    <View style={styles.appWrapper}>
      <Button
        title="Add New Goal"
        color="#222222"
        onPress={startAddGoalHandler}
      />
      <GoalInput
        changeTextHandler={goalInputHandler}
        addGoalHandler={addGoalHandler}
        visible={modalVisible}
        onCancel={endAddGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalList}
          keyExtractor={(value, index) => {
            return value.id;
          }}
          renderItem={(itemData) => {
            return (
              <GoalItem
                items={itemData.item.text}
                id={itemData.item.id}
                onDeleteGoal={deleteGoalHandle}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appWrapper: {
    padding: 70,
    flex: 1,
    backgroundColor: "yellow",
  },

  goalsContainer: {
    flex: 5,
  },
});
