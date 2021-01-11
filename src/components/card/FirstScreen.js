import React from 'react'
import { View, Text, Image, TouchableOpacity,Dimensions } from 'react-native'

export default function FirstScreen() {
    const {width,height} = Dimensions.get('window')
    return (
        <View style={{flex:1,width:width,height:height}}>

        <View style={{height:"60%" }}>

            <Image style={{ height: "100%", width: "100%", borderBottomLeftRadius: 30 }} source={require('../images/pexell.jpg')} />

        </View>

            <View style={{flexDirection:"row",flex:1,alignItems:"center",justifyContent:"space-around"}}>

                <TouchableOpacity style={{alignItems:"center"}}>

                    <Text style={{borderWidth:2,borderColor:"gray",color:"white",borderRadius:40,padding:20,height:80 ,fontSize:35,marginBottom:20}}>80</Text>
                    <Text style={{color:"white"}} >love</Text>

                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center"}}>

                    <Text style={{borderWidth:2,borderColor:"gray",color:"white",borderRadius:40,padding:20,height:80 ,fontSize:35,marginBottom:20}}>90
                    </Text>
                    <Text  style={{color:"white"}}>Emotions</Text>

                </TouchableOpacity>
                <TouchableOpacity style={{alignItems:"center"}}>

                    <Text style={{borderWidth:2,borderColor:"gray",color:"white",borderRadius:40,padding:20,height:80 ,fontSize:35,marginBottom:20}}>24
                    </Text>
                    <Text style={{color:"white"}}>Mentality</Text>

                </TouchableOpacity>
                
               

            </View>
                

        </View>
    )
}
