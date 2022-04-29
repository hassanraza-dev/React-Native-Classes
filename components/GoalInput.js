import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
const GoalInput = (props) => {
  const [goalText, setGoalText] = useState("");
  const goalInputHandler = (text) => {
    setGoalText(text);
  };

  const addGoalHandler = () => {
    props.addGoalHandler(goalText);
    setGoalText("");
  };

  return (
    <View style={styles.inputWrapper}>
      <TextInput
        placeholder="Enter Your Goal"
        style={styles.inputStyle}
        onChangeText={goalInputHandler}
        value={goalText}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
};
const styles = StyleSheet.create({
  inputWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  inputStyle: {
    borderColor: "#cccccc",
    borderWidth: 1,
    marginRight: 10,
    width: "80%",
    padding: 10,
  },
});
export default GoalInput;
