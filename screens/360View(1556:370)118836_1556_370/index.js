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
      <View style={styles.View_1618_2}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e571/cd6e/513f32445f2d7deb8790c8412f6059f2"
          }}
          style={styles.ImageBackground_1556_371}
        />
        <View style={styles.View_1556_372} />
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1620_2"))
          }
        >
          <View style={styles.View_1556_373}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca24/00f3/c50ed8241f30ddf1d2d8fbe559ece759"
              }}
              style={styles.ImageBackground_1556_374}
            />
            <View style={styles.View_1556_375} />
          </View>
        </TouchableOpacity>
        <View style={styles.View_1556_376}>
          <Text style={styles.Text_1556_376}>Interior View</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_1618_2: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1556_371: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1556_372: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.382513661202186%"),
    minHeight: hp("10.382513661202186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 230, 0, 1)"
  },
  View_1556_373: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6%"),
    top: hp("3.0054644808743167%")
  },
  ImageBackground_1556_374: {
    width: wp("3.200000254313151%"),
    minWidth: wp("3.200000254313151%"),
    height: hp("2.0491804581522293%"),
    minHeight: hp("2.0491804581522293%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6%"),
    top: hp("2.595628415300547%")
  },
  View_1556_375: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1556_376: {
    width: wp("64%"),
    minWidth: wp("64%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.133333333333333%"),
    top: hp("3.415300546448088%")
  },
  Text_1556_376: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
