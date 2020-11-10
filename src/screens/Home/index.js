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
      image: require('../../assets/icons/travel.png'),
    },
    {
      image: require('../../assets/icons/health.png'),
    },
    {
      image: require('../../assets/icons/life.png'),
    },
    {
      image: require('../../assets/icons/car.png'),
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
      image: require('../../assets/icons/34.png'),
      title:
        'Grand coverage oof $5000 at a basic premiuim as low as PKR 2700/-',
    },

    {
      image: require('../../assets/icons/34.png'),
      title:
        'Grand coverage oof $5000 at a basic premiuim as low as PKR 2700/-',
    },

    {
      image: require('../../assets/icons/34.png'),
      title:
        'Grand coverage oof $5000 at a basic premiuim as low as PKR 2700/-',
    },

    {
      image: require('../../assets/icons/34.png'),
      title:
        'Grand coverage oof $5000 at a basic premiuim as low as PKR 2700/-',
    },
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
      <View
        style={{
          height: 250,
          // width: '100%',
          // alignItems: 'center',
          // justifyContent: 'center',
          // borderWidth: 1,
          width: '95%',
          alignSelf: 'center',
          borderRadius: 10,
          overflow: 'hidden',
          elevation: 2,
          backgroundColor: 'white',
        }}>
        <View>
          <ImageBackground
            source={item.image}
            style={{
              height: '100%',
              width: '100%',
              // justifyContent: 'center',
              borderRadius: 10,
            }}
            resizeMode="cover">
            <View
              style={{
                flex: 0.7,
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
                // paddingHorizontal: 15,
              }}>
              <TouchableOpacity
                style={{
                  height: '100%',
                  width: 30,

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
                  width: 30,
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
                flex: 0.3,
                borderWidth: 0,
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  color: 'white',

                  fontFamily: 'Montserrat-Medium',
                  // fontSize: 12,
                }}>
                {item.title}
              </Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  };
  const _renderItem2 = ({item, index}) => {
    console.log('i', index);
    return (
      <View
        style={{
          height: 250,
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
              paddingHorizontal: 15,
              // backgroundColor: 'red',
            }}>
            <TouchableOpacity
              style={{
                height: '100%',
                width: 30,

                alignItems: 'center',
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
              style={{
                height: '100%',
                width: 30,
                alignItems: 'center',
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
              marginBottom: 10,
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
          height: 30,
          width: '100%',
          flexDirection: 'row',
          width: '100%',
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
            style={{height: 20, width: 20}}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,

            alignItems: 'center',
          }}>
          <Text style={{color: '#FFFFFF', fontFamily: 'FredokaOne-Regular'}}>
            Home
          </Text>
        </View>
        <View
          style={{
            width: '15%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FontAwesome
            name="bell"
            size={16}
            color="#FFFFFFFF"
            style={{
              alignItems: 'flex-end',
            }}
          />
        </View>
      </View>

      <ImageBackground
        source={require('../../assets/icons/background.png')}
        style={{flex: 1}}
        resizeMode="stretch">
        <View
          style={{
            // backgroundColor: 'black',
            height: 240,
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
              width: 10,
              height: 10,
              borderRadius: 15,
              marginHorizontal: -5,
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

              width: '100%',
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
                  <Image
                    source={item.image}
                    style={{height: '100%', width: '100%'}}
                    resizeMode="contain"
                  />
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
