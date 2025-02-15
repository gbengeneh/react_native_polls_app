import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

const Header = () => {
  const router = useRouter();

  return (
    <View style={styles.header}>
      {/* Left Icon */}
      <Pressable onPress={() => router.push("/profile")} style={styles.icon}>
        <AntDesign name="user" size={20} color="gray" />
      </Pressable>

      {/* Title */}
      <Text style={styles.title}>Polls</Text>

      {/* Right Icon */}
      <Pressable onPress={() => router.push("/polls/newPoll")} style={styles.icon}>
        <AntDesign name="plus" size={20} color="gray" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    zIndex: 1000, // Ensures it stays on top
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  icon: {
    padding: 10,
  },
});

export default Header;
