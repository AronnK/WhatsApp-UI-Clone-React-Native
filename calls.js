import { StyleSheet, Text, View, ScrollView, Image } from "react-native";

export default function Callspage() {
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
        <View style={styles.callLink}>
          <Image
            source={{
              uri: "https://cdn.daily-sun.com/public/news_images/2023/02/27/DS-9-27-02-2023.jpg",
            }}
            style={styles.callLinkImage}
          />
          <View>
            <Text style={styles.callLinkText}>Create Call Link</Text>
            <Text style={styles.callLinkSubText}>
              Share a link for your whatsapp call
            </Text>
          </View>
        </View>
        <Text style={{ color: "#aaaaaa", marginTop: 8, marginLeft: 13 }}>
          Recent
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
                <View>
                  <Image
                    style={styles.callImage}
                    source={{
                      uri: "https://icons.iconarchive.com/icons/alecive/flatwoken/512/Apps-Whatsapp-B-icon.png",
                    }}
                  />
                </View>
                <Text style={styles.userName}>{uname}</Text>
                <Text style={styles.userTime}>{time}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <Image
        style={styles.newCall}
        source={{
          uri: "https://styles.redditmedia.com/t5_2t4p7/styles/communityIcon_gsljnsqcd2k31.png",
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
  callLink: {
    flex: 1,
    flexDirection: "row",
    marginTop: 15,
    padding: 12,
  },
  callLinkImage: {
    width: 45,
    height: 45,
    borderRadius: 30,
    marginRight: 14,
    alignSelf: "center",
  },
  callLinkText: {
    color: "white",
    alignSelf: "flex-start",
    fontSize: 14,
    fontWeight: "bold",
  },
  callLinkSubText: {
    color: "#aaaaaa",
    marginTop: 2,
  },
  card: {
    flex: 1,
    flexDirection: "row",
    marginTop: 13,
    padding: 8,
    borderRadius: 10,
  },
  pfpStyle: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 14,
    alignSelf: "center",
  },
  userName: {
    color: "white",
    fontSize: 14,
    bottom: 13,
    fontWeight: "bold",
  },
  userTime: {
    fontSize: 12,
    bottom: 10,
    color: "#aaaaaa",
  },
  callImage: {
    height: 15,
    width: 15,
    borderRadius: 10,
    marginLeft: 270,
    alignSelf: "center",
  },
  newCall: {
    bottom: 40,
    right: 30,
    position: "absolute",
    borderRadius: 15,
    height: 65,
    width: 65,
  },
});
