import { StyleSheet, Text, Pressable } from "react-native";
const GoalItem = ({ items, onDeleteGoal, id }) => {
  return (
    <Pressable onPress={onDeleteGoal.bind(this, id)}>
      <Text style={styles.goalItem}>{items}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#1D1C1D",
    color: "white",
  },
});
export default GoalItem;
