import React, {useState, useEffect} from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { ScrollView, StyleSheet, View, Dimensions, TouchableOpacity, Modal, Text, Image, SafeAreaView} from 'react-native';




let carArrays = [
  {
    title: "BMW",
    location:{
      latitude: 26.27944 ,
    longitude: 50.20833,
    },
    price: "30$",
    Description: "Lorem Ipsum Whatever",
    image: require("./merc.png")

  },

  {
    title: "Audi",
    location:{
      latitude: 26.23942 ,
    longitude: 50.20853,
    },
    price: "50$",
    Description: "Lorem Ipsum Whatever",
    image: require("./merc.png")
  },


  {
    title: "Merc",
    location:{
      latitude: 26.28843 ,
    longitude: 50.20823,
    },
    price: "40$",
    Description: "Lorem Ipsum Whatever",
    image: require("./merc.png")
  }
]




export default function App() {

  const [mapRegion, setMapRegion] = useState({
    latitude: 26.27944 ,
    longitude: 50.20833,
    latitudeDelta: 0.04,
    longitudeDelta: 0.05,

  })

  const [visible, setVisible] = useState(false)

  const [currentCar, setCurrentCar ] = useState("")



  const ModalPop = (props) =>{
    const [showModal, setShowModal] = useState(visible)
    return (
      <Modal transparent visible={showModal}><View style={styles.backgroundModal}>
        <View style={styles.modalContainer}>{props.children}

        </View>
      </View>
      </Modal>
    )

  }

  const showCars = () =>{



    return carArrays.map((item, index) => {
      return(
        <Marker 
        key={index}

        coordinate={item.location}
        title={item.title} 
        icon={require("./marker.png")}
        onPress={() => {
          setVisible(true)
          setCurrentCar(item)
          }}

        />
        
      )
    })
  }


  return (
    <View style={styles.container}>
 
      <MapView style={styles.map} region={mapRegion} provider={PROVIDER_GOOGLE}>
       {showCars()}
       <ModalPop  car={currentCar} visible={visible}>
          <View>
            <Text>{currentCar.title}</Text>
          </View>
       </ModalPop>
       

  
      

         
        

       </MapView>

       <ScrollView  horizontal scrollEventThrottle={1} showsHorizontalScrollIndicator={false} style={{ position: 'absolute', bottom: 20, height: "12.5%" }} >
           {carArrays.map((item,index) =>{
              return(
                  <View style={styles.totalContainer}>

                      <View style={styles.imageContainer}>
                        <Image source={item.image} style={{width: 50, height: 50 }}></Image>
                      </View>

                    </View>

              )
            })}
          </ScrollView>
       </View>




  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    paddingBottom: 50,
    paddingTop: 50


  },
  map: {
    borderRadius: 40,
    flex: 1
  },
  backgroundModal:{
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer:{
    backgroundColor: "white",
    width: '80%',
    height: '50%'
  },
  imageContainer:{
    borderRadius: 20,
    overflow: 'hidden'
  },
  totalContainer:{
    backgroundColor: 'white',
    borderRadius: 10,
    width: "120%",
    marginHorizontal: 5
  }
});


 