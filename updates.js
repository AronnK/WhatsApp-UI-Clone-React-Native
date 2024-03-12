import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

export default function Updatesspage() {
  const contacts = [
    {
      uid: 1,
      uname: "Hitesh Choudhary",
      imageUrl: "https://avatars.githubusercontent.com/u/11613311?v=4",
      time: "45 mins ago",
    },
    {
      uid: 2,
      uname: "Anurag Tiwari",
      imageUrl: "https://avatars.githubusercontent.com/u/94738352?v=4",
      time: "2 hrs ago",
    },
    {
      uid: 3,
      uname: "Sanket Singh",
      imageUrl: "https://avatars.githubusercontent.com/u/29747452?v=4",
      time: "12:00 pm",
    },
    {
      uid: 4,
      uname: "Anirudh Jwala",
      imageUrl: "https://avatars.githubusercontent.com/u/25549847?v=4",
      time: "10:00 am",
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
        <Text
          style={{
            color: "white",
            fontSize: 20,
            marginTop: 25,
            marginLeft: 10,
          }}
        >
          Status
        </Text>
        <View style={styles.myStatus}>
          <Image
            source={{
              uri: "https://images.indianexpress.com/2022/09/GettyImages-pitbull-dog-breed-1200.jpeg?w=414",
            }}
            style={styles.myStatusImage}
          />
          <View>
            <Text style={styles.myStatusText}>My Status</Text>
            <Text style={styles.myStatusSubText}>Tap to add status update</Text>
          </View>
        </View>
        <Text style={{ color: "#aaaaaa", marginTop: 8, marginLeft: 13 }}>
          Recent updates
        </Text>
        <View>
          {contacts.map(({ uid, uname, imageUrl, time }) => (
            <View key={uid} style={styles.card}>
              <Image
                source={{
                  uri: imageUrl,
                }}
                style={styles.pfpStyle}
              />
              <View>
                <Text style={styles.userName}>{uname}</Text>
                <Text style={styles.userTime}>{time}</Text>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.bottomText}>
          <Text style={{ color: "black" }}>Explore More</Text>
        </View>
      </ScrollView>
      <Image
        style={styles.newMsg}
        source={{
          uri: "https://i.gadgets360cdn.com/large/whatsappcameralogo_small_1573635549607.jpg",
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
  myStatus: {
    flex: 1,
    flexDirection: "row",
    marginTop: 5,
    padding: 12,
  },
  myStatusImage: {
    width: 55,
    height: 55,
    borderRadius: 30,
    marginRight: 14,
    alignSelf: "center",
  },
  myStatusText: {
    color: "white",
    alignSelf: "flex-start",
    fontSize: 14,
    marginTop: 6,
    fontWeight: "bold",
  },
  myStatusSubText: {
    color: "#aaaaaa",
    marginTop: 2,
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
    borderColor: "green",
    borderWidth: 2,
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
  userTime: {
    fontSize: 12,
    color: "#aaaaaa",
  },
  bottomText: {
    width: 150,
    height: 35,
    backgroundColor: "#2ecc71",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    marginLeft: 15,
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
