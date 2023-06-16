import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { formatDate } from "../utils/formatDate";

interface NoticeProps {
  icon?: any;
  content: string;
  date?: any;
  category: string;
}
const Notice: React.FC<NoticeProps> = ({ icon, date, category, content }) => {
  const currentDate = new Date();
  const isBetweenDates = Boolean(formatDate(currentDate) < formatDate(date));

  return (
    <TouchableOpacity style={styles.container}>
      <Ionicons
        name={icon ? icon : "notifications-sharp"}
        size={32}
        color="#EEE2DE"
      />

      <View>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
          {content}
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "green",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            {category}
          </Text>
          <Text
            style={[
              { color: "gray", alignSelf: "flex-end", fontWeight: "600" },
              isBetweenDates && styles.specialContainer,
            ]}
          >
            {formatDate(date)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Notice;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2C3333",
    borderRadius: 8,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginVertical: 5,
    paddingVertical: 10,
    gap: 20,
  },
  specialContainer: {
    color: "red",
  },
});
