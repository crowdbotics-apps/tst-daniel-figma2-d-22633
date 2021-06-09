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
      <View style={styles.View_1556_274}>
        <View style={styles.View_1556_275}>
          <Text style={styles.Text_1556_275}>The Guides</Text>
        </View>
        <View style={styles.View_1556_276} />
        <View style={styles.View_1556_277}>
          <Text style={styles.Text_1556_277}>FOOODIES</Text>
        </View>
        <View style={styles.View_1556_278}>
          <Text style={styles.Text_1556_278}>Daily Dose</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1619_4"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/baba/5664/302df7476d926243b2409704d02d9739"
            }}
            style={styles.ImageBackground_1556_279}
          />
        </TouchableOpacity>
        <View style={styles.View_1556_280}>
          <Text style={styles.Text_1556_280}>
            What is blonde roast and where to buy
          </Text>
        </View>
        <View style={styles.View_1556_281}>
          <Text style={styles.Text_1556_281}>Aug 11, 2020</Text>
        </View>
        <View style={styles.View_1556_282}>
          <Text style={styles.Text_1556_282}>Aug 12, 2020</Text>
        </View>
        <View style={styles.View_1556_283}>
          <Text style={styles.Text_1556_283}>
            The jury is in: here is the best fusion taqueria in Barcelona{" "}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1619_4"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee90/d67a/d8462535dff4b758e898e08f530bfdd1"
            }}
            style={styles.ImageBackground_1556_284}
          />
        </TouchableOpacity>
        <View style={styles.View_1556_285}>
          <Text style={styles.Text_1556_285}>
            The most popular salad combos today
          </Text>
        </View>
        <View style={styles.View_1556_286}>
          <Text style={styles.Text_1556_286}>Aug 10, 2020</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1619_4"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3481/adff/36e2df24a9ae11398ceef6678f0ce3f1"
            }}
            style={styles.ImageBackground_1556_287}
          />
        </TouchableOpacity>
        <View style={styles.View_1556_288}>
          <Text style={styles.Text_1556_288}>Aug 10, 2020</Text>
        </View>
        <View style={styles.View_1556_289}>
          <Text style={styles.Text_1556_289}>
            The restaurants that turn bananas into a work of art
          </Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1556_209"))
          }
        >
          <View style={styles.View_1556_290}>
            <View style={styles.View_1556_291} />
            <View style={styles.View_1556_292}>
              <Text style={styles.Text_1556_292}>Barcelona</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1677_0"))
          }
        >
          <View style={styles.View_1556_293}>
            <View style={styles.View_1556_294} />
            <View style={styles.View_1556_295}>
              <Text style={styles.Text_1556_295}>London</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1556_209"))
          }
        >
          <View style={styles.View_1556_296}>
            <View style={styles.View_1556_297} />
            <View style={styles.View_1556_298}>
              <Text style={styles.Text_1556_298}>Berlin</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1556_209"))
          }
        >
          <View style={styles.View_1556_299}>
            <View style={styles.View_1556_300} />
            <View style={styles.View_1556_301}>
              <Text style={styles.Text_1556_301}>Shanghai</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1556_209"))
          }
        >
          <View style={styles.View_1556_302}>
            <View style={styles.View_1556_303} />
            <View style={styles.View_1556_304}>
              <Text style={styles.Text_1556_304}>Toronto</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1556_209"))
          }
        >
          <View style={styles.View_1556_305}>
            <View style={styles.View_1556_306} />
            <View style={styles.View_1556_307}>
              <Text style={styles.Text_1556_307}>New York</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.View_1556_308} />
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1619_4"))
          }
        >
          <View style={styles.View_1556_310} />
        </TouchableOpacity>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75df/10ee/71b31683b2a7d1ade56483fd774f165c"
          }}
          style={styles.ImageBackground_1556_311}
        />
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1556_312"))
          }
        >
          <View style={styles.View_1617_2}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cd7/6c97/3aca7aa77863584c00f07b6c6b7b7721"
              }}
              style={styles.ImageBackground_1556_309}
            />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("158.19672131147541%") },
  View_1556_274: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("158.19672131147541%"),
    minHeight: hp("158.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1556_275: {
    width: wp("47.733333333333334%"),
    minWidth: wp("47.733333333333334%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("19.672131147540984%")
  },
  Text_1556_275: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_276: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("11.885245901639344%"),
    backgroundColor: "rgba(0, 54, 255, 1)"
  },
  View_1556_277: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("12.431693989071038%")
  },
  Text_1556_277: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_278: {
    width: wp("45.33333333333333%"),
    minWidth: wp("45.33333333333333%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("48.90710382513661%")
  },
  Text_1556_278: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1556_279: {
    width: wp("42.13333333333333%"),
    minWidth: wp("42.13333333333333%"),
    height: hp("17.21311475409836%"),
    minHeight: hp("17.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("89.48087431693989%")
  },
  View_1556_280: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("111.6120218579235%")
  },
  Text_1556_280: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_281: {
    width: wp("42.13333333333333%"),
    minWidth: wp("42.13333333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("108.46994535519126%")
  },
  Text_1556_281: {
    color: "rgba(154, 154, 154, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_282: {
    width: wp("45.06666666666666%"),
    minWidth: wp("45.06666666666666%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("76.36612021857924%")
  },
  Text_1556_282: {
    color: "rgba(154, 154, 154, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_283: {
    width: wp("89.33333333333333%"),
    minWidth: wp("89.33333333333333%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("79.6448087431694%")
  },
  Text_1556_283: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1556_284: {
    width: wp("42.13333333333333%"),
    minWidth: wp("42.13333333333333%"),
    height: hp("17.21311475409836%"),
    minHeight: hp("17.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.53333333333333%"),
    top: hp("89.48087431693989%"),
    resizeMode: "cover"
  },
  View_1556_285: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.06666666666666%"),
    top: hp("111.6120218579235%")
  },
  Text_1556_285: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_286: {
    width: wp("40.266666666666666%"),
    minWidth: wp("40.266666666666666%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.06666666666666%"),
    top: hp("108.46994535519126%")
  },
  Text_1556_286: {
    color: "rgba(154, 154, 154, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1556_287: {
    width: wp("89.33333333333333%"),
    minWidth: wp("89.33333333333333%"),
    height: hp("18.442622950819672%"),
    minHeight: hp("18.442622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("122.95081967213115%"),
    resizeMode: "cover"
  },
  View_1556_288: {
    width: wp("45.06666666666666%"),
    minWidth: wp("45.06666666666666%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("143.16939890710384%")
  },
  Text_1556_288: {
    color: "rgba(154, 154, 154, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_289: {
    width: wp("89.33333333333333%"),
    minWidth: wp("89.33333333333333%"),
    minHeight: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("146.448087431694%")
  },
  Text_1556_289: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_290: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("27.18579234972678%")
  },
  View_1556_291: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 229, 0, 1)"
  },
  View_1556_292: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185792476%")
  },
  Text_1556_292: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_293: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("27.18579234972678%")
  },
  View_1556_294: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 230, 0, 1)"
  },
  View_1556_295: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185792476%")
  },
  Text_1556_295: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_296: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.93333333333334%"),
    top: hp("27.18579234972678%")
  },
  View_1556_297: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 230, 0, 1)"
  },
  View_1556_298: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185792476%")
  },
  Text_1556_298: {
    color: "rgba(188, 168, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_299: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("35.51912568306011%")
  },
  View_1556_300: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 230, 0, 1)"
  },
  View_1556_301: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579212%")
  },
  Text_1556_301: {
    color: "rgba(188, 168, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_302: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("35.51912568306011%")
  },
  View_1556_303: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 230, 0, 1)"
  },
  View_1556_304: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579212%")
  },
  Text_1556_304: {
    color: "rgba(188, 168, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_305: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.93333333333334%"),
    top: hp("35.51912568306011%")
  },
  View_1556_306: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 230, 0, 1)"
  },
  View_1556_307: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579212%")
  },
  Text_1556_307: {
    color: "rgba(188, 168, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_308: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("32.51366120218579%"),
    minHeight: hp("32.51366120218579%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("54.37158469945356%")
  },
  View_1556_310: {
    width: wp("89.33333333333333%"),
    minWidth: wp("89.33333333333333%"),
    height: hp("18.442622950819672%"),
    minHeight: hp("18.442622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("56.14754098360656%")
  },
  ImageBackground_1556_311: {
    width: wp("57.06666666666666%"),
    minWidth: wp("57.06666666666666%"),
    height: hp("19.12568306010929%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.266666666666666%"),
    top: hp("53.825136612021865%")
  },
  View_1617_2: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333335%"),
    top: hp("3.0054644808743167%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1556_309: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("2.459016393442623%"),
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
