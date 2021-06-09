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
      <View style={styles.View_1556_326}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a26/67b2/e4963ed03de4ea79d56ef1cbeb794ff4"
          }}
          style={styles.ImageBackground_1556_327}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("139.89071038251367%") },
  View_1556_326: {
    width: wp("61.71875%"),
    minWidth: wp("61.71875%"),
    height: hp("86.33879781420765%"),
    minHeight: hp("86.33879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.140625%"),
    top: hp("26.775956284153008%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1556_327: {
    width: wp("61.71875%"),
    minWidth: wp("61.71875%"),
    height: hp("86.33879781420765%"),
    minHeight: hp("86.33879781420765%"),
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
