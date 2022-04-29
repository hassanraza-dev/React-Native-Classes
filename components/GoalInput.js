import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
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
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputWrapper}>
        <Image
          style={styles.image}
          source={require("../assets/images/goals.png")}
        />
        <TextInput
          placeholder="Enter Your Goal"
          style={styles.inputStyle}
          onChangeText={goalInputHandler}
          value={goalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputWrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 20,
    borderBottomWidth: 1,
    // borderBottomColor: "#cccccc",
    backgroundColor: "#311b6b",
    padding: 20,
  },
  inputStyle: {
    borderColor: "#cccccc",
    borderWidth: 1,
    width: "100%",
    color: "white",
    padding: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  image: {
    width: 150,
    height: 150,
    margin: 20,
  },
});
export default GoalInput;
