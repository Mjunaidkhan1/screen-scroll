import React from 'react'
import { View, Text,Image,TouchableOpacity ,Dimensions, Linking} from 'react-native'

export default function SecondScreen() {
const Dummytext = "Dummy text refers to the bits of content that are used to fill a website mock-up. This text helps web designers better envision how the website will look as a finished product. It is important to understand that dthat dummy text has no meaning whatsoever.important to understand that dthat dummy text has no meaning whatsoever Its sole purpose is to fill out blank spaces with “word-like” content, without making any copyright infringements."

    const {width,height}= Dimensions.get('window')
    return (
        <View style={{flex:1,width:width,height:height}}>
            <View style={{ height: "40%" }}>

                <Image style={{ height: "100%", width: "100%", borderBottomRightRadius:40 }} source={require('../images/dancing.jpg')} />

            </View>
            <View style={{flexDirection:"row",justifyContent:"space-around",paddingTop:20}}>
            <TouchableOpacity >
               <Text style={{padding:5,fontSize:20,color:"white"}}>Today
                   </Text> 
            </TouchableOpacity>
            <TouchableOpacity>

            <Text style={{padding:5,fontSize:20,color:"white"}}>
                Tomorrow
            </Text>
            </TouchableOpacity>
            <TouchableOpacity>

            <Text style={{padding:5,fontSize:20,color:"white"}}>
                Month
                
            </Text>
            </TouchableOpacity>
            </View>

            <View>



            <View style={{flexDirection:"row"}}>
            <TouchableOpacity style={{height:60,width:60,marginTop:10,marginRight:15,marginLeft:15,backgroundColor:"#5C0000",borderRadius:30 }} onPress={()=>Linking.openURL("https://twitter.com")}>

    
        <Image style={{height:"80%",width:"80%",alignSelf:"center",marginTop:5}} source={require('../icons/twitter.png')}/>
        </TouchableOpacity>

            <TouchableOpacity style={{height:60,width:60,marginTop:10,marginRight:15,marginLeft:15,backgroundColor:"#5C0000",borderRadius:30}} onPress={()=>Linking.openURL("https://facebook.com")}>
        <Image style={{height:"80%",width:"80%",alignSelf:"center",marginTop:5}} source={require('../icons/facebook.png')}/> 
        </TouchableOpacity>

        <TouchableOpacity style={{height:60,width:60,marginTop:10,marginRight:15,marginLeft:15,backgroundColor:"#5C0000",borderRadius:30}} onPress={()=>Linking.openURL("https://whatsapp.com")}>
        <Image style={{height:"80%",width:"80%",alignSelf:"center",marginTop:5}} source={require('../icons/whatsapp.png')}/>
         </TouchableOpacity>

         <TouchableOpacity style={{height:60,width:60,marginTop:10,marginRight:15,marginLeft:15,backgroundColor:"#5C0000",borderRadius:30}} onPress={()=>Linking.openURL("https://skype.com")}>
        <Image style={{height:"80%",width:"80%",alignSelf:"center",marginTop:5}} source={require('../icons/skype.png')}/>
         </TouchableOpacity>
    </View>


<View style={{padding:20,fontSize:20,color:"white"}}>
    <Text style={{padding:5,fontSize:20,color:"white"}}>Hadding</Text>
    <Text style={{padding:5,color:"white",height:150}}>
        {Dummytext}
    </Text>
</View>
        </View>
        <View style={{flexDirection:"row",marginLeft:15,justifyContent:"space-around",alignItems:"flex-end",}}>
            
<TouchableOpacity style={{height:50,width:"auto",padding:10,borderRadius:10,backgroundColor:"#5C0000"}}> 
<Text style={{fontSize:20,color:"white"}}>BottumBtn</Text>
</TouchableOpacity>

<TouchableOpacity style={{height:50,width:50,marginTop:10,marginRight:15,marginLeft:15,backgroundColor:"#5C0000",borderRadius:30}}> 
<Image style={{height:"80%",width:"80%",alignSelf:"center",marginTop:5}} source={require('../icons/button.png')}/>
</TouchableOpacity

><TouchableOpacity style={{height:50,width:50,marginTop:10,marginRight:15,marginLeft:15,backgroundColor:"#5C0000",borderRadius:30}}> 
<Image style={{height:"80%",width:"80%",alignSelf:"center",marginTop:5}} source={require('../icons/delete.png')}/>
</TouchableOpacity>

<TouchableOpacity style={{height:50,width:50,marginTop:10,marginRight:15,marginLeft:15,backgroundColor:"#5C0000",borderRadius:30}}> 
<Image style={{height:"80%",width:"80%",alignSelf:"center",marginTop:5}} source={require('../icons/power-button.png')}/>
</TouchableOpacity>



        </View>
            </View>
    )
}

