import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "../../modules/utils"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_2} />
      <View style={styles.View_1556_356}>
        <View style={styles.View_1556_357}>
          <Text style={styles.Text_1556_357}>
            Here is the best fusion taqueria in Barcelona
          </Text>
        </View>
        <View style={styles.View_1556_358}>
          <Text style={styles.Text_1556_358}>Aug 12, 2019 Jamie Oliver</Text>
        </View>
        <View style={styles.View_1556_359} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a16/965b/3d23a98a52ca45faba3fd68797cd2de6"
          }}
          style={styles.ImageBackground_1556_360}
        />
        <View style={styles.View_1556_361}>
          <Text style={styles.Text_1556_361}>TLRD: it’s Gringa Barcelona</Text>
        </View>
        <View style={styles.View_1556_362}>
          <Text style={styles.Text_1556_362}>
            Great Mexican food is abundant in Barcelona, but as a few million
            McMansion in the suburbs will attest, so is bad taste. And deciding
            where to eat, in a city with thousands upon thousands of options and
            some of its best restaurants hiding in mini-malls, can devolve into
            a special kind of hell. Who can you trust to steer you toward the
            perfect taqueria? Tripadvisor? Friends? Danny Trejo? Fortunately,
            dear food vagabond, like Virgil guided Dante through the Inferno, we
            shall light your path to the seven best taquerias in the Barcelona
            area (Long Beach included). Why seven? Because shoehorning a Divine
            Comedy reference into the intro of a food article is just what your
            Mexican food search requires. And what could possibly be funnier
            than 14th-century Italian narrative poetry?! Nothing. Now let’s get
            hungry.
          </Text>
        </View>
        <View style={styles.View_1556_363} />
        <View style={styles.View_1556_364} />
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1620_2"))
          }
        >
          <View style={styles.View_1556_365}>
            <Text style={styles.Text_1556_365}>See the guide</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_1556_366}>
          <Text style={styles.Text_1556_366}>Here’s Gringa in our guide</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1556_273"))
          }
        >
          <View style={styles.View_1556_367}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60dc/78b0/ba45f4e1d386355aa7729816786f4c79"
              }}
              style={styles.ImageBackground_1556_368}
            />
            <View style={styles.View_1556_369} />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("176.775956284153%") },
  View_1556_356: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("176.775956284153%"),
    minHeight: hp("176.775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 244, 244, 1)",
    overflow: "hidden"
  },
  View_1556_357: {
    width: wp("89.06666666666668%"),
    minWidth: wp("89.06666666666668%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("12.841530054644808%")
  },
  Text_1556_357: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_358: {
    width: wp("57.06666666666666%"),
    minWidth: wp("57.06666666666666%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("25.956284153005466%")
  },
  Text_1556_358: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_359: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("28.688524590163933%"),
    minHeight: hp("28.688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.19672131147541%")
  },
  ImageBackground_1556_360: {
    width: wp("49.333333333333336%"),
    minWidth: wp("49.333333333333336%"),
    height: hp("29.918032786885245%"),
    minHeight: hp("29.918032786885245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("30.191256830601095%")
  },
  View_1556_361: {
    width: wp("89.06666666666668%"),
    minWidth: wp("89.06666666666668%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("68.16939890710383%")
  },
  Text_1556_361: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_362: {
    width: wp("89.06666666666668%"),
    minWidth: wp("89.06666666666668%"),
    minHeight: hp("77.8688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("73.49726775956285%")
  },
  Text_1556_362: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_363: {
    width: wp("89.33333333333333%"),
    minWidth: wp("89.33333333333333%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("151.36612021857923%"),
    backgroundColor: "rgba(214, 214, 214, 1)"
  },
  View_1556_364: {
    width: wp("37.06666666666666%"),
    minWidth: wp("37.06666666666666%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("160.79234972677597%"),
    backgroundColor: "rgba(255, 230, 0, 1)"
  },
  View_1556_365: {
    width: wp("37.06666666666666%"),
    minWidth: wp("37.06666666666666%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("161.0655737704918%")
  },
  Text_1556_365: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_366: {
    width: wp("57.06666666666666%"),
    minWidth: wp("57.06666666666666%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("154.6448087431694%")
  },
  Text_1556_366: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_367: {
    width: wp("19.733333333333334%"),
    minWidth: wp("19.733333333333334%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.5333333333333333%"),
    top: hp("2.0491803278688523%")
  },
  ImageBackground_1556_368: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333334%"),
    top: hp("3.4153005464480874%"),
    resizeMode: "cover"
  },
  View_1556_369: {
    width: wp("19.733333333333334%"),
    minWidth: wp("19.733333333333334%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
