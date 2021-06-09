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
      <View style={styles.View_1556_328}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3428/14d7/9fab7857b0a3728586903fbfa0e0bced"
          }}
          style={styles.ImageBackground_1556_329}
        />
        <View style={styles.View_1556_330}>
          <Text style={styles.Text_1556_330}>
            Carrer de la Lleialtat, 16 08001 Barcelona
          </Text>
        </View>
        <View style={styles.View_1556_331}>
          <Text style={styles.Text_1556_331}>
            The Fried Chicken Bun Tacos Criollo Gringa pancakes
          </Text>
        </View>
        <View style={styles.View_1556_332}>
          <Text style={styles.Text_1556_332}>
            Gringa started life out as a Food truck, one of the first in
            Barcelona, a blue Citroen called Eureka Street Food. Run by
            Priscilla, a native Californian, and Gascon. After five years, they
            acquired a new partner, Juan and found their location in the Raval.
            A barrio in flux with many faces: principally a migrant
            neighborhood, with investment funds buying up entire buildings and
            leaving them empty – useful for ‘drug flats’. Things are changing,
            Barcelona is booming and El Raval and its attractive rents are
            becoming a real contender.
          </Text>
        </View>
        <View style={styles.View_1556_333}>
          <Text style={styles.Text_1556_333}>12€ 9€ 8€</Text>
        </View>
        <View style={styles.View_1556_334}>
          <Text style={styles.Text_1556_334}>Order</Text>
        </View>
        <View style={styles.View_1556_335}>
          <Text style={styles.Text_1556_335}>About</Text>
        </View>
        <View style={styles.View_1556_336}>
          <Text style={styles.Text_1556_336}>
            Mon-Fri: 19:00 - 0:00h Sat-Sun: 12:00 - 16:00h
          </Text>
        </View>
        <View style={styles.View_1556_337}>
          <Text style={styles.Text_1556_337}>La Gringa</Text>
        </View>
        <View style={styles.View_1556_338}>
          <View style={styles.View_1556_339} />
          <View style={styles.View_1556_340}>
            <Text style={styles.Text_1556_340}>RAVAL</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1556_172"))
          }
        >
          <View style={styles.View_1556_341}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3cf/43ef/33d5017417f5f715a8fea57b269636c1"
              }}
              style={styles.ImageBackground_1556_342}
            />
            <View style={styles.View_1556_343} />
          </View>
        </TouchableOpacity>
        <View style={styles.View_1556_344}>
          <View style={styles.View_1556_345} />
          <View style={styles.View_1556_346}>
            <Text style={styles.Text_1556_346}>Call</Text>
          </View>
        </View>
        <View style={styles.View_1556_350}>
          <View style={styles.View_1556_351} />
          <View style={styles.View_1556_352}>
            <Text style={styles.Text_1556_352}>Share</Text>
          </View>
        </View>
        <View style={styles.View_1556_347}>
          <View style={styles.View_1556_348} />
          <View style={styles.View_1556_349}>
            <Text style={styles.Text_1556_349}>Email</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1556_370"))
          }
        >
          <View style={styles.View_1556_353}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1425/095b/69de1a1e6f6bb4827b534bd1adb206ae"
              }}
              style={styles.ImageBackground_1556_354}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d764/29f4/7038c212680109e5d5a1dee5a46aedde"
              }}
              style={styles.ImageBackground_1556_355}
            />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("174.72677595628417%") },
  View_1556_328: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("174.72677595628417%"),
    minHeight: hp("174.72677595628417%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 244, 244, 1)",
    overflow: "hidden"
  },
  ImageBackground_1556_329: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("37.43169398907104%"),
    minHeight: hp("37.43169398907104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("59.56284153005464%"),
    resizeMode: "cover"
  },
  View_1556_330: {
    width: wp("86.4%"),
    minWidth: wp("86.4%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("28.415300546448087%")
  },
  Text_1556_330: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_331: {
    width: wp("54.666666666666664%"),
    minWidth: wp("54.666666666666664%"),
    minHeight: hp("15.710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("106.69398907103825%")
  },
  Text_1556_331: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_332: {
    width: wp("89.33333333333333%"),
    minWidth: wp("89.33333333333333%"),
    minHeight: hp("60.245901639344254%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("127.18579234972678%")
  },
  Text_1556_332: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_333: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.86666666666667%"),
    top: hp("106.69398907103825%")
  },
  Text_1556_333: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_334: {
    width: wp("37.06666666666666%"),
    minWidth: wp("37.06666666666666%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("102.04918032786885%")
  },
  Text_1556_334: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_335: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("122.40437158469946%")
  },
  Text_1556_335: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_336: {
    width: wp("88%"),
    minWidth: wp("88%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("38.52459016393443%")
  },
  Text_1556_336: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_337: {
    width: wp("47.733333333333334%"),
    minWidth: wp("47.733333333333334%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("18.442622950819672%")
  },
  Text_1556_337: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_338: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("11.885245901639344%")
  },
  View_1556_339: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 230, 0, 1)"
  },
  View_1556_340: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316937%")
  },
  Text_1556_340: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_341: {
    width: wp("19.733333333333334%"),
    minWidth: wp("19.733333333333334%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.26666666666666666%"),
    top: hp("2.0491803278688523%")
  },
  ImageBackground_1556_342: {
    width: wp("3.733333333333334%"),
    minWidth: wp("3.733333333333334%"),
    height: hp("1.912568306010929%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333333%"),
    top: hp("3.5519125683060113%"),
    resizeMode: "cover"
  },
  View_1556_343: {
    width: wp("19.733333333333334%"),
    minWidth: wp("19.733333333333334%"),
    height: hp("8.879781420765028%"),
    minHeight: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1556_344: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("50.54644808743169%")
  },
  View_1556_345: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 54, 255, 1)"
  },
  View_1556_346: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    minHeight: hp("5.355191361057302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.10926293545082189%")
  },
  Text_1556_346: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_350: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.66666666666666%"),
    top: hp("50.54644808743169%")
  },
  View_1556_351: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 54, 255, 1)"
  },
  View_1556_352: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    minHeight: hp("5.355191361057302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.10926293545082189%")
  },
  Text_1556_352: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_347: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("50.54644808743169%")
  },
  View_1556_348: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 54, 255, 1)"
  },
  View_1556_349: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    minHeight: hp("5.355191361057302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.10926293545082189%")
  },
  Text_1556_349: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_353: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("88.11475409836066%")
  },
  ImageBackground_1556_354: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1556_355: {
    width: wp("5.815053304036458%"),
    height: hp("3.551912568306011%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333325%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
