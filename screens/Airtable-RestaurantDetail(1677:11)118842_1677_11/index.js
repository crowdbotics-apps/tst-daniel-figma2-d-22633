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
      <View style={styles.View_1677_12}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3428/14d7/9fab7857b0a3728586903fbfa0e0bced"
          }}
          style={styles.ImageBackground_1677_13}
        />
        <View style={styles.View_1677_14}>
          <Text style={styles.Text_1677_14}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
            tempus vulputate congue vestibulum neque. Lectus pellentesque
            convallis ornare a viverra elementum semper vestibulum enim. Cursus
            magna velit ultrices eget faucibus. At maecenas mauris a sit. Semper
            id non adipiscing purus at orci ac fringilla. Justo libero pharetra
            sed dictum duis fringilla sit eget.
          </Text>
        </View>
        <View style={styles.View_1677_15}>
          <Text style={styles.Text_1677_15}>About</Text>
        </View>
        <View style={styles.View_1677_16}>
          <Text style={styles.Text_1677_16}>Resto Name</Text>
        </View>
        <View style={styles.View_1677_17}>
          <View style={styles.View_1677_18} />
          <View style={styles.View_1677_19}>
            <Text style={styles.Text_1677_19}>DISTRICT</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1677_0"))
          }
        >
          <View style={styles.View_1677_20}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3cf/43ef/33d5017417f5f715a8fea57b269636c1"
              }}
              style={styles.ImageBackground_1677_21}
            />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_1677_12: {
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
  ImageBackground_1677_13: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("37.43169398907104%"),
    minHeight: hp("37.43169398907104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26.366120218579237%"),
    resizeMode: "cover"
  },
  View_1677_14: {
    width: wp("89.33333333333333%"),
    minWidth: wp("89.33333333333333%"),
    minHeight: hp("25.956284153005466%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("74.04371584699454%")
  },
  Text_1677_14: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1677_15: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("69.26229508196722%")
  },
  Text_1677_15: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1677_16: {
    width: wp("89.33333333333333%"),
    minWidth: wp("89.33333333333333%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("18.442622950819672%")
  },
  Text_1677_16: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1677_17: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("11.612021857923498%")
  },
  View_1677_18: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 230, 0, 1)"
  },
  View_1677_19: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1677_19: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1677_20: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4.2349726775956285%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1677_21: {
    width: wp("3.733333333333334%"),
    minWidth: wp("3.733333333333334%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8666666666666663%"),
    top: hp("1.3661202185792352%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
