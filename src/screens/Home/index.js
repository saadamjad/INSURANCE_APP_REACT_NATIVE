import React, {useRef, useState} from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {SliderBox} from 'react-native-image-slider-box';
import {DrawerActions} from 'react-navigation';
import Entypo from 'react-native-vector-icons/Entypo';
import Carousel from 'react-native-snap-carousel';
let screenWidth = Dimensions.get('window').width / 1;
// let testin = ;
const App = (props) => {
  //
  let _carousel = useRef();
  let _carousel2 = useRef();

  const images = [
    require('../../assets/icons/Slider.png'),
    require('../../assets/icons/life.png'),
    require('../../assets/icons/car.png'),
    require('../../assets/icons/health.png'),
  ];
  const [ourProducts, setOurProducts] = useState([
    {
      image: require('../../assets/travel.png'),
    },
    {
      image: require('../../assets/health.png'),
    },
    {
      image: require('../../assets/life.png'),
    },
    {
      image: require('../../assets/cari.png'),
    },
  ]);

  const [companies, setCompanies] = useState([
    {
      image: require('../../assets/icons/jubilee.png'),
    },
    {
      image: require('../../assets/icons/adamjee.png'),
    },
    {
      image: require('../../assets/icons/uic.png'),
    },
    {
      image: require('../../assets/icons/jubilee.png'),
    },
    {
      image: require('../../assets/icons/adamjee.png'),
    },
    {
      image: require('../../assets/icons/uic.png'),
    },
  ]);

  const [slider1, setSlider1] = useState([
    {
      image: require('../../assets/travel/article.png'),
      title:
        'Grand coverage oof $5000 at a basic premiuim as low as PKR 2700/-',
    },

    {
      image: require('../../assets/travel/article.png'),
      title:
        'Grand coverage oof $5000 at a basic premiuim as low as PKR 2700/-',
    },

    {
      image: require('../../assets/travel/article.png'),
      title:
        'Grand coverage oof $5000 at a basic premiuim as low as PKR 2700/-',
    },

    {
      image: require('../../assets/travel/article.png'),
      title:
        'Grand coverage oof $5000 at a basic premiuim as low as PKR 2700/-',
    },

    // {
    //   image: require('../../assets/icons/34.png'),
    //   title:
    //     'Grand coverage oof $5000 at a basic premiuim as low as PKR 2700/-',
    // },

    // {
    //   image: require('../../assets/icons/34.png'),
    //   title:
    //     'Grand coverage oof $5000 at a basic premiuim as low as PKR 2700/-',
    // },
  ]);

  const [slider2, setSlider2] = useState([
    {
      image: require('../../assets/icons/36.png'),
      title: ' Vlogging - Sony Camera class 3',
    },
    {
      image: require('../../assets/icons/36.png'),
      title: ' Vlogging - Sony Camera class 3',
    },
    {
      image: require('../../assets/icons/36.png'),
      title: ' Vlogging - Sony Camera class 3',
    },
    {
      image: require('../../assets/icons/36.png'),
      title: ' Vlogging - Sony Camera class 3',
    },
    {
      image: require('../../assets/icons/36.png'),
      title: ' Vlogging - Sony Camera class 3',
    },
  ]);

  const HandleOnPress = (index) => {
    return console.log('handle onpress', index);
  };
  const _renderItem = ({item, index}) => {
    console.log('i', index);
    return (
      // <View
      //   style={{
      //     height: 250,
      //     borderWidth: 1,
      //     // width: '100%',
      //     // alignItems: 'center',
      //     // justifyContent: 'center',
      //     // borderWidth: 1,
      //     width: '95%',
      //     alignSelf: 'center',
      //     borderRadius: 10,
      //     overflow: 'hidden',
      //     // elevation: 2,
      //     backgroundColor: 'white',
      //   }}>
      //   <View>
      <View
        style={{
          height: 220,
          width: '92%',
          overflow: 'hidden',
          alignSelf: 'center',
          // borderWidth: 1,
        }}>
        <ImageBackground
          source={item.image}
          style={{
            height: '100%',
            width: '100%',
            // justifyContent: 'center',
            // backgroundColor: 'red',
          }}
          resizeMode="contain">
          <View
            style={{
              flex: 0.6,
              justifyContent: 'space-between',
              flexDirection: 'row',
              // alignItems: 'center',
              // borderWidth: 1,
              paddingTop: 45,
              // paddingHorizontal: 15,
            }}>
            <TouchableOpacity
              style={{
                height: '100%',
                width: 38,

                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => _carousel.snapToPrev()}>
              <Image
                source={require('../../assets/assets/32.png')}
                style={{
                  height: 15,
                  width: 15,
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: '100%',
                width: 38,
                // borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => _carousel.snapToNext()}>
              <Image
                source={require('../../assets/assets/33.png')}
                style={{height: 15, width: 15}}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 0.4,
              // borderWidth: 1,
              alignItems: 'center',
              // justifyContent: 'center',
              paddingHorizontal: 10,
              // paddingTop: 10,
            }}>
            <Text
              style={{
                color: 'white',

                fontFamily: 'Montserrat-Medium',
                // fontSize: 12,
                lineHeight: 20,
              }}>
              {item.title}
            </Text>
          </View>
        </ImageBackground>
      </View>
      // </View>
    );
  };
  const _renderItem2 = ({item, index}) => {
    console.log('i', index);
    return (
      <View
        style={{
          height: 250,
          width: '92%',
          alignSelf: 'center',
        }}>
        <ImageBackground
          source={item.image}
          style={{height: '100%', width: '100%'}}
          resizeMode="cover">
          <View
            style={{
              height: '60%',
              // borderWidth: 1,
              flex: 1,
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 15,
              // backgroundColor: 'red',
            }}>
            <TouchableOpacity
              style={{
                height: '100%',
                width: 30,

                // alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => _carousel2.snapToPrev()}>
              <Image
                source={require('../../assets/assets/32.png')}
                style={{
                  height: 15,
                  width: 15,
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={
                {
                  // height: 50,
                  // width: 50,
                  // borderRadius: 50,
                  // backgroundColor: 'white',
                  // alignItems: 'center',
                  // justifyContent: 'center',
                }
              }
              onPress={() => _carousel2.snapToPrev()}>
              {/* <Image
                source={require('../../assets/icons/icons/videos.png')}
                style={{
                  height: 35,
                  width: 35,
                }}
                resizeMode="contain"
              /> */}
              {/* <Entypo name="controller-play" size={40} color="#ff235d" /> */}
              <Image
                source={require('../../assets/video.png')}
                style={{
                  height: 50,
                  width: 50,
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                height: '100%',
                width: 30,
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}
              onPress={() => _carousel2.snapToNext()}>
              <Image
                source={require('../../assets/assets/33.png')}
                style={{height: 15, width: 15}}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          <Text
            style={{
              color: 'black',

              fontFamily: 'Montserrat-Medium',
              marginLeft: 20,
              marginBottom: 18,
            }}>
            {item.title}
          </Text>
        </ImageBackground>
      </View>
    );
  };

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
      <View
        style={{
          // height: 30,
          width: '100%',
          flexDirection: 'row',
          width: '100%',
          paddingVertical: 10,
          // borderWidth: 1,
          backgroundColor: '#ff235d',

          // justifyContent: 'center',
          alignItems: 'flex-end',
        }}>
        <TouchableOpacity
          onPress={() => props.navigation.openDrawer()}
          style={{
            width: '14%',

            alignItems: 'center',
            justifyContent: 'center',
            // borderWidth: 1,
          }}>
          <Image
            source={require('../../assets/icons/icons/menu.png')}
            style={{height: 30, width: 30}}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,

            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#FFFFFF',
              fontFamily: 'FredokaOne-Regular',
              fontSize: 16,
            }}>
            Home
          </Text>
        </View>
        <View
          style={{
            width: '15%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/icons/icons/notification.png')}
            style={{height: 30, width: 30}}
            resizeMode="contain"
          />
        </View>
      </View>

      <ImageBackground
        source={require('../../assets/icons/background.png')}
        style={{flex: 1}}
        resizeMode="cover">
        <View
          style={{
            // backgroundColor: 'black',
            height: 250,
            paddingHorizontal: 40,
            alignItems: 'center',
            marginTop: 30,
          }}>
          <SliderBox
            images={images}
            parentWidth={Dimensions.get('window').width / 1.1}
            // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
            // currentImageEmitter={index => console.warn(`current pos is: ${index}`)}
            sliderBoxHeight={200}
            // SliderBoxHeight={250}
            dotColor="#d23957"
            // backgroundColor="white"
            inactiveDotColor="#90A4AE"
            // paginationBoxStyle={{marginTop: 40}}
            dotStyle={{
              width: 15,
              height: 15,
              borderRadius: 15,
              marginHorizontal: -5,
              marginTop: 10,
              padding: 0,
              margin: 0,
            }}
            paginationBoxVerticalPadding={0}
            autoplay
            circleLoop
            resizeMode={'cover'}
            resizeMethod={'resize'}
            paginationBoxStyle={{
              bottom: 0,
              padding: 0,
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
            }}
            ImageComponentStyle={{
              borderRadius: 15,
              width: Dimensions.get('window').width / 1.1,
              marginTop: 10,
            }}
            imageLoadingColor="#2196F3"
          />
        </View>

        <View style={{width: '100%', alignSelf: 'center'}}>
          {/* ==========Our Products========== */}

          <View
            style={{
              alignItems: 'center',
              marginBottom: 10,
              marginTop: 10,
            }}>
            <Text
              style={{
                color: '#ff235d',
                marginTop: 10,
                fontSize: 19,
                fontFamily: 'FredokaOne-Regular',
              }}>
              Our Products
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',

              width: '93%',
              alignSelf: 'center',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {ourProducts.map((item, i) => {
              return (
                <TouchableOpacity
                  style={{
                    height: 90,
                    width: '50%',

                    // borderWidth: 1,
                    // justifyContent: 'center',
                    // backgroundColor: 'red',
                  }}
                  onPress={() =>
                    // props.navigation.navigate('insurancepolicies')
                    props.navigation.navigate('OurProducts')
                  }>
                  <View
                    style={
                      {
                        // shadowColor: '#000',
                        // backgroundColor: 'white',
                        // shadowOffset: {
                        //   width: 0,
                        //   height: 2,
                        // },
                        // shadowOpacity: 0.25,
                        // shadowRadius: 3.84,
                        // elevation: 5,
                      }
                    }>
                    <Image
                      source={item.image}
                      style={{height: '100%', width: '100%'}}
                      resizeMode="contain"
                    />
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* ==========Companies========== */}

          <View style={{alignItems: 'center', marginTop: 14, marginBottom: 10}}>
            <Text
              style={{
                color: '#ff3c6c',
                fontFamily: 'FredokaOne-Regular',

                fontSize: 17,
              }}>
              Our Partner Companies
            </Text>
          </View>

          {/* ======Using Map Function======  */}

          <View
            style={{
              flexDirection: 'row',
              width: '100%',
            }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              automaticallyAdjustContentInsets={false}>
              {companies.map((item, i) => {
                return (
                  <Image
                    source={item.image}
                    style={{
                      height: 80,
                      width: 90,
                    }}
                    resizeMode="contain"
                  />
                );
              })}
            </ScrollView>
          </View>

          {/* ==========Articles========== */}

          <View
            style={{
              alignItems: 'center',
              marginVertical: 8,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#ff3c6c',
                fontFamily: 'FredokaOne-Regular',
                fontSize: 20,
              }}>
              Articles
            </Text>
          </View>
          {/* <View
            style={{
              width: '90%',
              borderWidth: 1,
              alignSelf: 'center',
              overflow: 'hidden',
            }}> */}
          <Carousel
            ref={(c) => {
              _carousel = c;
            }}
            data={slider1}
            renderItem={_renderItem}
            sliderWidth={screenWidth}
            itemWidth={screenWidth}
            // sliderHeight={screenWidth}
            layout={'default'}
            // containerCustomStyle={{flex: 1, alignSelf: 'center'}}
            // slideStyle={{flex: 1}}
            style={{alignSelf: 'center'}}
          />
          {/* </View> */}

          <View
            style={{
              alignItems: 'center',
              marginVertical: 8,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#ff3c6c',
                fontFamily: 'FredokaOne-Regular',
                fontSize: 20,
              }}>
              Vidoes
            </Text>
          </View>
          <Carousel
            ref={(cc) => {
              _carousel2 = cc;
            }}
            data={slider2}
            renderItem={_renderItem2}
            sliderWidth={screenWidth}
            itemWidth={screenWidth}
            // sliderHeight={screenWidth}
            layout={'default'}
            containerCustomStyle={{
              flex: 1,
              alignSelf: 'center',
            }}
            slideStyle={{flex: 1}}
            style={{alignSelf: 'center'}}
          />
        </View>
        <View style={{height: 70}}></View>
      </ImageBackground>
    </ScrollView>
  );
};
export default App;
