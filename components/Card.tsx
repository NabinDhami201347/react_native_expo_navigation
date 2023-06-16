import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

interface CardProps {
  icon: any;
  content: string;
}
const Card: React.FC<CardProps> = ({ icon, content }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Ionicons name={icon} size={32} color="#EEE2DE" />
      <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
        {content}
      </Text>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2C3333",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginVertical: 5,
    paddingVertical: 14,
    gap: 20,
  },
});
