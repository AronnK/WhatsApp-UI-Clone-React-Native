import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

export default function Chatspage() {
  const contacts = [
    {
      uid: 1,
      uname: "Hitesh Choudhary",
      ustatus: "✓✓ Just an extra ordinary teacher",
      imageUrl: "https://avatars.githubusercontent.com/u/11613311?v=4",
      time: "Yesterday",
    },
    {
      uid: 2,
      uname: "Anurag Tiwari",
      ustatus: "I ❤️ To Code and Teach!",
      imageUrl: "https://avatars.githubusercontent.com/u/94738352?v=4",
      time: "Yesterday",
    },
    {
      uid: 3,
      uname: "Sanket Singh",
      ustatus: "Making your GPay smooth",
      imageUrl: "https://avatars.githubusercontent.com/u/29747452?v=4",
      time: "Yesterday",
    },
    {
      uid: 4,
      uname: "Anirudh Jwala",
      ustatus: "Building secure Digital banks",
      imageUrl: "https://avatars.githubusercontent.com/u/25549847?v=4",
      time: "Yesterday",
    },
    {
      uid: 5,
      uname: "Hitesh Choudhary",
      ustatus: "✓✓ Just an extra ordinary teacher",
      imageUrl: "https://avatars.githubusercontent.com/u/11613311?v=4",
      time: "Yesterday",
    },
    {
      uid: 6,
      uname: "Anurag Tiwari",
      ustatus: "I ❤️ To Code and Teach!",
      imageUrl: "https://avatars.githubusercontent.com/u/94738352?v=4",
      time: "Yesterday",
    },
    {
      uid: 7,
      uname: "Sanket Singh",
      ustatus: "Making your GPay smooth",
      imageUrl: "https://avatars.githubusercontent.com/u/29747452?v=4",
      time: "Yesterday",
    },
    {
      uid: 8,
      uname: "Anirudh Jwala",
      ustatus: "Building secure Digital banks",
      imageUrl: "https://avatars.githubusercontent.com/u/25549847?v=4",
      time: "Yesterday",
    },
    {
      uid: 9,
      uname: "Sanket Singh",
      ustatus: "Making your GPay smooth",
      imageUrl: "https://avatars.githubusercontent.com/u/29747452?v=4",
      time: "Yesterday",
    },
    {
      uid: 10,
      uname: "Anirudh Jwala",
      ustatus: "Building secure Digital banks",
      imageUrl: "https://avatars.githubusercontent.com/u/25549847?v=4",
      time: "Yesterday",
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>WhatsApp</Text>
          {/* <Image
            source={require("C:\\Users\\91988\\Pictures\\Screenshots\\Phone")}
            style={styles.headerImage}
          /> */}
          <View style={styles.pageName}>
            <Text style={styles.pageNameText}>Chats</Text>
            <Text style={styles.pageNameText}>Updates</Text>
            <Text style={styles.pageNameText}>Calls</Text>
          </View>
        </View>
        <View>
          {contacts.map(({ uid, uname, ustatus, imageUrl, time }) => (
            <View key={uid} style={styles.card}>
              <Image
                source={{
                  uri: imageUrl,
                }}
                style={styles.pfpStyle}
              />
              <View>
                <Text style={styles.userName}>{uname}</Text>
                <Text style={styles.userStatus}>{ustatus}</Text>
                <Text style={styles.userTime}>{time}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <Image
        style={styles.newMsg}
        source={{
          uri: "data:image/jpeg;base64,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",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#273443",
    //alignItems: "center",
    //justifyContent: "center",
  },
  header: {
    backgroundColor: "#2f3e46",
    flex: 1,
    top: 10,
    height: 100,
    paddingHorizontal: 10,
    elevation: 20,
  },
  headerText: {
    color: "white",
    paddingTop: 28,
    fontSize: 22,
  },
  headerImage: {
    alignSelf: "flex-end",
    height: 10,
    width: 17,
  },
  pageName: {
    paddingTop: 15,
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  pageNameText: {
    fontSize: 16,
    color: "#bbbbbb",
    fontWeight: "bold",
  },
  card: {
    flex: 1,
    flexDirection: "row",
    //alignItems: "center",
    marginTop: 13,
    padding: 12,
    borderRadius: 10,
  },
  pfpStyle: {
    width: 55,
    height: 55,
    borderRadius: 30,
    marginRight: 14,
    alignSelf: "center",
  },
  userName: {
    color: "white",
    alignSelf: "flex-start",
    fontSize: 14,
    marginTop: 6,
    fontWeight: "bold",
  },
  userStatus: {
    color: "#aaaaaa",
    marginTop: 8,
  },
  userTime: {
    left: 230,
    bottom: 45,
    fontSize: 12,
    color: "#aaaaaa",
  },
  newMsg: {
    bottom: 40,
    right: 30,
    position: "absolute",
    borderRadius: 15,
    height: 65,
    width: 65,
  },
});
