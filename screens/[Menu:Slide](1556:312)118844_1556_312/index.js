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
      <View style={styles.View_1556_313}>
        <View style={styles.View_1556_314}>
          <Text style={styles.Text_1556_314}>FOOODIES</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1556_273"))
          }
        >
          <View style={styles.View_1556_315}>
            <Text style={styles.Text_1556_315}>DAILY DIGEST</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1556_209"))
          }
        >
          <View style={styles.View_1556_316}>
            <Text style={styles.Text_1556_316}>BARCELONA</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1677_0"))
          }
        >
          <View style={styles.View_1556_317}>
            <Text style={styles.Text_1556_317}>LONDON</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_1556_318}>
          <Text style={styles.Text_1556_318}>BERLIN</Text>
        </View>
        <View style={styles.View_1556_319}>
          <Text style={styles.Text_1556_319}>NEW YORK</Text>
        </View>
        <View style={styles.View_1556_320} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_1556_313: {
    width: wp("50.13333333333333%"),
    minWidth: wp("50.13333333333333%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 54, 255, 1)",
    overflow: "hidden"
  },
  View_1556_314: {
    width: wp("50.13333333333333%"),
    minWidth: wp("50.13333333333333%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.469945355191257%")
  },
  Text_1556_314: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_1556_315: {
    width: wp("50.13333333333333%"),
    minWidth: wp("50.13333333333333%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.901639344262296%")
  },
  Text_1556_315: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_316: {
    width: wp("50.13333333333333%"),
    minWidth: wp("50.13333333333333%"),
    minHeight: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30.191256830601095%")
  },
  Text_1556_316: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_317: {
    width: wp("50.13333333333333%"),
    minWidth: wp("50.13333333333333%"),
    minHeight: hp("9.153005464480875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("39.61748633879781%")
  },
  Text_1556_317: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_318: {
    width: wp("50.13333333333333%"),
    minWidth: wp("50.13333333333333%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48.77049180327869%")
  },
  Text_1556_318: {
    color: "rgba(128, 154, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_319: {
    width: wp("50.13333333333333%"),
    minWidth: wp("50.13333333333333%"),
    minHeight: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("58.060109289617486%")
  },
  Text_1556_319: {
    color: "rgba(128, 154, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_320: {
    width: wp("36.53333333333333%"),
    minWidth: wp("36.53333333333333%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333333%"),
    top: hp("17.076502732240435%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
