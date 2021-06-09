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
      <View style={styles.View_1556_210}>
        <View style={styles.View_1556_211}>
          <Text style={styles.Text_1556_211}>Barcelona</Text>
        </View>
        <View style={styles.View_1556_212}>
          <Text style={styles.Text_1556_212}>All Places</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1620_2"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a27/6422/148a62d040106614890cb88c8f5708c0"
            }}
            style={styles.ImageBackground_1556_213}
          />
        </TouchableOpacity>
        <View style={styles.View_1556_214}>
          <Text style={styles.Text_1556_214}>La Gringa</Text>
        </View>
        <View style={styles.View_1556_215}>
          <Text style={styles.Text_1556_215}>Mexican-American</Text>
        </View>
        <View style={styles.View_1556_216}>
          <Text style={styles.Text_1556_216}>€15/person</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1620_2"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4733/46dc/a1efc0bb71d27dec361583a2c2c16ed9"
            }}
            style={styles.ImageBackground_1556_217}
          />
        </TouchableOpacity>
        <View style={styles.View_1556_218}>
          <Text style={styles.Text_1556_218}>El Pachuco</Text>
        </View>
        <View style={styles.View_1556_219}>
          <Text style={styles.Text_1556_219}>Best nachos in town</Text>
        </View>
        <View style={styles.View_1556_220}>
          <Text style={styles.Text_1556_220}>€15/person</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1620_2"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09c5/2f12/6e86a17be1709e8c47a12382cd7f5c44"
            }}
            style={styles.ImageBackground_1556_221}
          />
        </TouchableOpacity>
        <View style={styles.View_1556_222}>
          <Text style={styles.Text_1556_222}>El Tamarindo</Text>
        </View>
        <View style={styles.View_1556_223}>
          <Text style={styles.Text_1556_223}>Mexican-American</Text>
        </View>
        <View style={styles.View_1556_224}>
          <Text style={styles.Text_1556_224}>€15/person</Text>
        </View>
        <View style={styles.View_1556_225}>
          <Text style={styles.Text_1556_225}>Taco Alto Born</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1620_2"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8034/2bd4/015feb7904c77780ada70b6885dab9ed"
            }}
            style={styles.ImageBackground_1556_226}
          />
        </TouchableOpacity>
        <View style={styles.View_1556_227}>
          <Text style={styles.Text_1556_227}>Best nachos in town</Text>
        </View>
        <View style={styles.View_1556_228}>
          <Text style={styles.Text_1556_228}>€15/person</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1556_172"))
          }
        >
          <View style={styles.View_1617_4}>
            <View style={styles.View_1556_229} />
            <View style={styles.View_1556_230}>
              <Text style={styles.Text_1556_230}>15 places</Text>
            </View>
            <View style={styles.View_1556_231} />
            <View style={styles.View_1556_232}>
              <Text style={styles.Text_1556_232}>Spanish</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb70/8d65/09ed3b05d63c2355108ae0df9ad57318"
              }}
              style={styles.ImageBackground_1556_233}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1556_172"))
          }
        >
          <View style={styles.View_1617_5}>
            <View style={styles.View_1556_234} />
            <View style={styles.View_1556_235}>
              <Text style={styles.Text_1556_235}>15 places</Text>
            </View>
            <View style={styles.View_1556_236} />
            <View style={styles.View_1556_237}>
              <Text style={styles.Text_1556_237}>Asian</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb70/8d65/09ed3b05d63c2355108ae0df9ad57318"
              }}
              style={styles.ImageBackground_1556_238}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1556_172"))
          }
        >
          <View style={styles.View_1617_6}>
            <View style={styles.View_1556_239} />
            <View style={styles.View_1556_240}>
              <Text style={styles.Text_1556_240}>15 places</Text>
            </View>
            <View style={styles.View_1556_241} />
            <View style={styles.View_1556_242}>
              <Text style={styles.Text_1556_242}>Latino</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb70/8d65/09ed3b05d63c2355108ae0df9ad57318"
              }}
              style={styles.ImageBackground_1556_243}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1556_172"))
          }
        >
          <View style={styles.View_1617_7}>
            <View style={styles.View_1556_244} />
            <View style={styles.View_1556_245}>
              <Text style={styles.Text_1556_245}>15 places</Text>
            </View>
            <View style={styles.View_1556_246} />
            <View style={styles.View_1556_247}>
              <Text style={styles.Text_1556_247}>American</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb70/8d65/09ed3b05d63c2355108ae0df9ad57318"
              }}
              style={styles.ImageBackground_1556_248}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1556_172"))
          }
        >
          <View style={styles.View_1617_8}>
            <View style={styles.View_1556_249} />
            <View style={styles.View_1556_250}>
              <Text style={styles.Text_1556_250}>15 places</Text>
            </View>
            <View style={styles.View_1556_251} />
            <View style={styles.View_1556_252}>
              <Text style={styles.Text_1556_252}>Brunch</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb70/8d65/09ed3b05d63c2355108ae0df9ad57318"
              }}
              style={styles.ImageBackground_1556_253}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1556_172"))
          }
        >
          <View style={styles.View_1617_9}>
            <View style={styles.View_1556_254} />
            <View style={styles.View_1556_255}>
              <Text style={styles.Text_1556_255}>15 places</Text>
            </View>
            <View style={styles.View_1556_256} />
            <View style={styles.View_1556_257}>
              <Text style={styles.Text_1556_257}>Vegetarian</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb70/8d65/09ed3b05d63c2355108ae0df9ad57318"
              }}
              style={styles.ImageBackground_1556_258}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1556_172"))
          }
        >
          <View style={styles.View_1617_10}>
            <View style={styles.View_1556_259} />
            <View style={styles.View_1556_260}>
              <Text style={styles.Text_1556_260}>15 places</Text>
            </View>
            <View style={styles.View_1556_261} />
            <View style={styles.View_1556_262}>
              <Text style={styles.Text_1556_262}>Italian</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb70/8d65/09ed3b05d63c2355108ae0df9ad57318"
              }}
              style={styles.ImageBackground_1556_263}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1556_370"))
          }
        >
          <View style={styles.View_1556_270}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0dab/89c5/f9e5d1c2fab25462f1a787bdb714ad1a"
              }}
              style={styles.ImageBackground_1556_271}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c2c/0301/f38aeae4474e57918d4597d16b31eb8b"
              }}
              style={styles.ImageBackground_1556_272}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1556_312"))
          }
        >
          <View style={styles.View_1617_3}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cd7/6c97/3aca7aa77863584c00f07b6c6b7b7721"
              }}
              style={styles.ImageBackground_1556_269}
            />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("157.24043715846994%") },
  View_1556_210: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("157.24043715846994%"),
    minHeight: hp("157.24043715846994%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 0)",
    overflow: "hidden"
  },
  View_1556_211: {
    width: wp("43.2%"),
    minWidth: wp("43.2%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("14.48087431693989%")
  },
  Text_1556_211: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_212: {
    width: wp("43.2%"),
    minWidth: wp("43.2%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("81.4207650273224%")
  },
  Text_1556_212: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1556_213: {
    width: wp("46.666666666666664%"),
    minWidth: wp("46.666666666666664%"),
    height: hp("19.53551912568306%"),
    minHeight: hp("19.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333333%"),
    top: hp("88.79781420765028%"),
    resizeMode: "cover"
  },
  View_1556_214: {
    width: wp("45.06666666666666%"),
    minWidth: wp("45.06666666666666%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("109.69945355191257%")
  },
  Text_1556_214: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_215: {
    width: wp("45.06666666666666%"),
    minWidth: wp("45.06666666666666%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("112.97814207650273%")
  },
  Text_1556_215: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_216: {
    width: wp("45.06666666666666%"),
    minWidth: wp("45.06666666666666%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("116.12021857923497%")
  },
  Text_1556_216: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1556_217: {
    width: wp("46.666666666666664%"),
    minWidth: wp("46.666666666666664%"),
    height: hp("19.53551912568306%"),
    minHeight: hp("19.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.93333333333333%"),
    top: hp("88.79781420765028%"),
    resizeMode: "cover"
  },
  View_1556_218: {
    width: wp("45.06666666666666%"),
    minWidth: wp("45.06666666666666%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.53333333333333%"),
    top: hp("109.69945355191257%")
  },
  Text_1556_218: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_219: {
    width: wp("45.06666666666666%"),
    minWidth: wp("45.06666666666666%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.53333333333333%"),
    top: hp("112.97814207650273%")
  },
  Text_1556_219: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_220: {
    width: wp("45.06666666666666%"),
    minWidth: wp("45.06666666666666%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.53333333333333%"),
    top: hp("116.12021857923497%")
  },
  Text_1556_220: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1556_221: {
    width: wp("46.666666666666664%"),
    minWidth: wp("46.666666666666664%"),
    height: hp("19.53551912568306%"),
    minHeight: hp("19.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333333%"),
    top: hp("121.72131147540983%"),
    resizeMode: "cover"
  },
  View_1556_222: {
    width: wp("45.06666666666666%"),
    minWidth: wp("45.06666666666666%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("142.62295081967213%")
  },
  Text_1556_222: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_223: {
    width: wp("45.06666666666666%"),
    minWidth: wp("45.06666666666666%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("145.9016393442623%")
  },
  Text_1556_223: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_224: {
    width: wp("45.06666666666666%"),
    minWidth: wp("45.06666666666666%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.733333333333334%"),
    top: hp("149.04371584699453%")
  },
  Text_1556_224: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_225: {
    width: wp("45.06666666666666%"),
    minWidth: wp("45.06666666666666%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.53333333333333%"),
    top: hp("142.62295081967213%")
  },
  Text_1556_225: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1556_226: {
    width: wp("46.666666666666664%"),
    minWidth: wp("46.666666666666664%"),
    height: hp("19.53551912568306%"),
    minHeight: hp("19.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.93333333333333%"),
    top: hp("121.72131147540983%"),
    resizeMode: "cover"
  },
  View_1556_227: {
    width: wp("45.06666666666666%"),
    minWidth: wp("45.06666666666666%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.53333333333333%"),
    top: hp("145.9016393442623%")
  },
  Text_1556_227: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_228: {
    width: wp("45.06666666666666%"),
    minWidth: wp("45.06666666666666%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.53333333333333%"),
    top: hp("149.04371584699453%")
  },
  Text_1556_228: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1617_4: {
    width: wp("95.19999999999999%"),
    minWidth: wp("95.19999999999999%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4%"),
    top: hp("24.59016393442623%")
  },
  View_1556_229: {
    width: wp("23.200000000000003%"),
    minWidth: wp("23.200000000000003%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 230, 0, 1)"
  },
  View_1556_230: {
    width: wp("23.200000000000003%"),
    minWidth: wp("23.200000000000003%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("0.13661202185792476%")
  },
  Text_1556_230: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_231: {
    width: wp("95.19999999999999%"),
    minWidth: wp("95.19999999999999%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.464480874316941%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1556_232: {
    width: wp("34.13333333333333%"),
    minWidth: wp("34.13333333333333%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333334%"),
    top: hp("0.13661202185792476%")
  },
  Text_1556_232: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1556_233: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333334%"),
    top: hp("0.9562841530054662%")
  },
  View_1617_5: {
    width: wp("95.19999999999999%"),
    minWidth: wp("95.19999999999999%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4%"),
    top: hp("32.10382513661202%")
  },
  View_1556_234: {
    width: wp("23.200000000000003%"),
    minWidth: wp("23.200000000000003%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 230, 0, 1)"
  },
  View_1556_235: {
    width: wp("23.200000000000003%"),
    minWidth: wp("23.200000000000003%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("0.1366120218579212%")
  },
  Text_1556_235: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_236: {
    width: wp("95.19999999999999%"),
    minWidth: wp("95.19999999999999%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.4644808743169335%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1556_237: {
    width: wp("34.13333333333333%"),
    minWidth: wp("34.13333333333333%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333334%"),
    top: hp("0.1366120218579212%")
  },
  Text_1556_237: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1556_238: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333334%"),
    top: hp("0.9562841530054627%")
  },
  View_1617_6: {
    width: wp("95.19999999999999%"),
    minWidth: wp("95.19999999999999%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4%"),
    top: hp("39.61748633879781%")
  },
  View_1556_239: {
    width: wp("23.200000000000003%"),
    minWidth: wp("23.200000000000003%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 230, 0, 1)"
  },
  View_1556_240: {
    width: wp("23.200000000000003%"),
    minWidth: wp("23.200000000000003%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("0.1366120218579283%")
  },
  Text_1556_240: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_241: {
    width: wp("95.19999999999999%"),
    minWidth: wp("95.19999999999999%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.464480874316941%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1556_242: {
    width: wp("34.13333333333333%"),
    minWidth: wp("34.13333333333333%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333334%"),
    top: hp("0.1366120218579283%")
  },
  Text_1556_242: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1556_243: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333334%"),
    top: hp("0.9562841530054698%")
  },
  View_1617_7: {
    width: wp("95.19999999999999%"),
    minWidth: wp("95.19999999999999%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4%"),
    top: hp("47.13114754098361%")
  },
  View_1556_244: {
    width: wp("23.200000000000003%"),
    minWidth: wp("23.200000000000003%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 230, 0, 1)"
  },
  View_1556_245: {
    width: wp("23.200000000000003%"),
    minWidth: wp("23.200000000000003%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("0.1366120218579212%")
  },
  Text_1556_245: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_246: {
    width: wp("95.19999999999999%"),
    minWidth: wp("95.19999999999999%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.4644808743169335%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1556_247: {
    width: wp("34.13333333333333%"),
    minWidth: wp("34.13333333333333%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333334%"),
    top: hp("0.1366120218579212%")
  },
  Text_1556_247: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1556_248: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333334%"),
    top: hp("0.9562841530054556%")
  },
  View_1617_8: {
    width: wp("95.19999999999999%"),
    minWidth: wp("95.19999999999999%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4%"),
    top: hp("54.644808743169406%")
  },
  View_1556_249: {
    width: wp("23.200000000000003%"),
    minWidth: wp("23.200000000000003%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 230, 0, 1)"
  },
  View_1556_250: {
    width: wp("23.200000000000003%"),
    minWidth: wp("23.200000000000003%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("0.1366120218579141%")
  },
  Text_1556_250: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_251: {
    width: wp("95.19999999999999%"),
    minWidth: wp("95.19999999999999%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.4644808743169335%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1556_252: {
    width: wp("34.13333333333333%"),
    minWidth: wp("34.13333333333333%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333334%"),
    top: hp("0.1366120218579141%")
  },
  Text_1556_252: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1556_253: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333334%"),
    top: hp("0.9562841530054556%")
  },
  View_1617_9: {
    width: wp("95.19999999999999%"),
    minWidth: wp("95.19999999999999%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4%"),
    top: hp("62.158469945355186%")
  },
  View_1556_254: {
    width: wp("23.200000000000003%"),
    minWidth: wp("23.200000000000003%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 230, 0, 1)"
  },
  View_1556_255: {
    width: wp("23.200000000000003%"),
    minWidth: wp("23.200000000000003%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("0.1366120218579283%")
  },
  Text_1556_255: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_256: {
    width: wp("95.19999999999999%"),
    minWidth: wp("95.19999999999999%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.464480874316941%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1556_257: {
    width: wp("34.13333333333333%"),
    minWidth: wp("34.13333333333333%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333334%"),
    top: hp("0.1366120218579283%")
  },
  Text_1556_257: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1556_258: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333334%"),
    top: hp("0.9562841530054698%")
  },
  View_1617_10: {
    width: wp("95.19999999999999%"),
    minWidth: wp("95.19999999999999%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4%"),
    top: hp("69.67213114754098%")
  },
  View_1556_259: {
    width: wp("23.200000000000003%"),
    minWidth: wp("23.200000000000003%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 230, 0, 1)"
  },
  View_1556_260: {
    width: wp("23.200000000000003%"),
    minWidth: wp("23.200000000000003%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("0.1366120218579283%")
  },
  Text_1556_260: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1556_261: {
    width: wp("95.19999999999999%"),
    minWidth: wp("95.19999999999999%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.4644808743169335%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1556_262: {
    width: wp("34.13333333333333%"),
    minWidth: wp("34.13333333333333%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.933333333333334%"),
    top: hp("0.1366120218579283%")
  },
  Text_1556_262: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1556_263: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333334%"),
    top: hp("0.9562841530054556%")
  },
  View_1556_270: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("90.57377049180327%")
  },
  ImageBackground_1556_271: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1556_272: {
    width: wp("3.489031982421875%"),
    height: hp("2.1311475930969572%"),
    top: hp("0.9836332394125691%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2400065104166664%")
  },
  View_1617_3: {
    width: wp("14.666666666666666%"),
    minWidth: wp("14.666666666666666%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333333%"),
    top: hp("3.0054644808743167%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1556_269: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
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
