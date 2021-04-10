import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {SliderBox} from 'react-native-image-slider-box';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const App = () => {
  const [search, updateSearch] = useState(false);
  const images = [
    require('../assets/images/1.png'),
    require('../assets/images/2.png'),
    require('../assets/images/3.png'),
  ];

  const Categories = [
    {
      Photo: require('../assets/images/food.png'),
    },
    {
      Photo: require('../assets/images/adventure.png'),
    },
    {
      Photo: require('../assets/images/art.png'),
    },
  ];

  const Adds = [
    {
      image: require('../assets/images/Art1.png'),
      title: 'Little Picasso',
    },
    {
      image: require('../assets/images/cake.png'),
      title: 'Cake Art',
    },
  ];

  const Categories2 = [
    {
      Photo: require('../assets/images/city2.png'),
    },
    {
      Photo: require('../assets/images/city1.png'),
    },
    {
      Photo: require('../assets/images/city2.png'),
    },
  ];
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            height: 40,
            width: '90%',
            alignSelf: 'center',
            backgroundColor: '#fff',
            borderRadius: 20,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            elevation: 1.5,
            marginTop: 10,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons
              name="search"
              size={15}
              color="#C4C4C4"
              style={{marginHorizontal: 10}}
            />
            <TextInput
              placeholder="Search Anything"
              placeholderTextColor="gray"
              style={{
                // backgroundColor: 'yellow',
                width: '80%',
              }}
            />
          </View>
          <View style={{width: '10%'}}>
            <AntDesign
              name="filter"
              size={18}
              color="#4A787D"
              style={{marginRight: 5}}
            />
          </View>
        </View>
        <View style={{width: '90%', height: '100%', alignSelf: 'center'}}>
          <View
            style={{
              // backgroundColor: 'black',
              height: 233,
              paddingTop: 20,
              paddingHorizontal: 40,
              alignItems: 'center',
              marginTop: 0,
            }}>
            <SliderBox
              images={images}
              parentWidth={Dimensions.get('window').width / 1.1}
              SliderBoxHeight={253}
              dotColor="#FFF"
              inactiveDotColor="#90A4AE"
              dotStyle={{
                width: 9,
                height: 9,
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
                // width: Dimensions.get('window').width / 1.1,
                width: '100%',
                marginTop: 5,
              }}
              imageLoadingColor="#2196F3"
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              // backgroundColor: 'red',
              marginHorizontal: 5,
              marginTop: 8,
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 15, color: '#515352', fontWeight: 'bold'}}>
              Explore By Categories
            </Text>
            <AntDesign name={'arrowright'} size={15} color={'#515352'} />
          </View>

          {/* ========== Horizontal ScrollView ========== */}

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {Categories.map((item, i) => {
              return (
                <View
                  key={i}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    //   backgroundColor: 'red',
                  }}>
                  <Image
                    source={item.Photo}
                    style={{
                      width: 180,
                      height: 180,
                      marginHorizontal: 3,
                      resizeMode: 'contain',
                    }}
                  />
                </View>
              );
            })}
          </ScrollView>

          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 5,
              marginBottom: 7,
              //   backgroundColor: 'red',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 15, color: '#515352', fontWeight: 'bold'}}>
              This Week Experiences
            </Text>
            <Text style={{fontSize: 15, color: '#4A787D', fontWeight: 'bold'}}>
              View All
            </Text>
          </View>

          {/* ============ Adds ============ */}

          {Adds.map((item, i) => {
            return (
              <View
                style={{
                  alignItems: 'center',
                  height: 390,
                  borderRadius: 20,
                  marginVertical: 5,
                  elevation: 1,
                  // backgroundColor: 'tomato',
                  //   marginBottom: 50,
                }}
                key={i}>
                <View style={{width: '97%', marginTop: 5}}>
                  <Image
                    source={item.image}
                    style={{height: 200, width: '100%', resizeMode: 'contain'}}
                  />
                </View>

                {/* ========== Discription ========== */}

                <View
                  style={{
                    width: '100%',
                    marginVertical: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingLeft: 5,
                    // backgroundColor: 'teal',
                    // alignItems: 'center',
                    // height: 50,
                  }}>
                  <Text
                    style={{
                      fontSize: 28,
                      fontWeight: 'bold',
                      color: '#434343',
                    }}>
                    {item.title}
                  </Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: '#FDBE4D',
                        fontSize: 20,
                      }}>
                      4.6
                    </Text>
                    <AntDesign name="star" size={13} color="#FDBE4D" />
                    <Text style={{marginHorizontal: 10}}>( 46 )</Text>
                  </View>
                </View>
                {/* ======text===== */}
                <Text style={{color: '#5B5B5B', fontSize: 12, padding: 5}}>
                  Loream ipsum dolor sit amet,consetetur sadipscing,altr,sed
                  diam nonumy eirmod tempor inivdunt ut labor et dolore
                  magna.....
                </Text>
                {/* =========parent view of time loc and price===== */}
                <View
                  style={{
                    height: 100,
                    // backgroundColor: 'teal',
                    width: '100%',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      width: '50%',
                      //   backgroundColor: 'pink',
                      height: '100%',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    {/* ========== 3 Icons ========== */}

                    <View style={{marginLeft: 10}}>
                      <Ionicons name="time-outline" size={16} color="gray" />
                      <Ionicons
                        name="location-outline"
                        size={16}
                        color="gray"
                        style={{marginVertical: 3}}
                      />
                      <MaterialCommunityIcons
                        name="gender-male-female"
                        size={16}
                        color="gray"
                      />
                    </View>

                    <View>
                      <Text
                        style={{fontSize: 13, color: 'gray', marginLeft: 8}}>
                        2 Hours
                      </Text>
                      <Text
                        style={{
                          fontSize: 13,
                          color: 'gray',
                          marginLeft: 8,
                          marginVertical: 5,
                        }}>
                        Riyadh
                      </Text>
                      <Text
                        style={{fontSize: 13, color: 'gray', marginLeft: 8}}>
                        Male & Female
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: '50%',
                      //   backgroundColor: 'tomato',
                      height: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        height: 45,
                        width: 95,
                        borderRadius: 10,
                        borderWidth: 2,
                        borderColor: '#D76A7A',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: 20,
                      }}>
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: 'bold',
                          color: '#D76A7A',
                        }}>
                        135 R.S
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 5,
              marginVertical: 8,
              //   backgroundColor: 'red',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 15, color: '#515352', fontWeight: 'bold'}}>
              Explore The Experience In Other Cities
            </Text>
            <AntDesign name={'arrowright'} size={15} color={'#515352'} />
          </View>

          {/* ==========2nd Horizontal ScrollView ========== */}

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {Categories2.map((item, i) => {
              return (
                <View
                  key={i}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    //   backgroundColor: 'red',
                  }}>
                  <Image
                    source={item.Photo}
                    style={{
                      width: 180,
                      height: 180,
                      marginHorizontal: 3,
                      resizeMode: 'contain',
                    }}
                  />
                </View>
              );
            })}
          </ScrollView>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 5,
            }}>
            <Text style={{fontSize: 15, color: '#515352', fontWeight: 'bold'}}>
              Send Experience To Your Friend
            </Text>
          </View>

          <View
            style={{
              //   backgroundColor: 'red',
              height: 160,
              //   alignItems: 'center',
              //   justifyContent: 'center',
              marginTop: 5,
            }}>
            <Image
              source={require('../assets/images/img.png')}
              style={{resizeMode: 'contain', height: '100%', width: '100%'}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 5,
              marginVertical: 5,
            }}>
            <Text style={{fontSize: 15, color: '#515352', fontWeight: 'bold'}}>
              Client Reviews
            </Text>
          </View>

          {/* =================card==================== */}

          <View
            style={{
              height: 150,
              backgroundColor: '#fff',
              justifyContent: 'space-evenly',
              borderRadius: 15,
              elevation: 1.5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('../assets/images/img2.png')}
                  style={{
                    marginHorizontal: 15,
                    resizeMode: 'contain',
                    height: 40,
                    width: 40,
                  }}
                />
                <Text style={{fontWeight: 'bold', fontSize: 18}}>John</Text>
              </View>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: '#D76A7A',
                  marginRight: 10,
                }}>
                Cake Art
              </Text>
            </View>
            <View
              style={{
                width: '90%',
                height: 50,
                borderRadius: 15,
                alignSelf: 'center',
                backgroundColor: '#DCDCDC66',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 12, textAlign: 'center'}}>
                Loream ipsum dolor sit amet,consetetur sadipscing,altr,sed diam
                nonumy eirmod tempor inivdunt ut labor et dolore magna.....
              </Text>
            </View>
          </View>
          {/* =============isssyyyy uparr=============== */}
          <View style={{height: 100}}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
