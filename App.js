import React, { useState } from "react";
import { View,Text ,StyleSheet,FlatList} from "react-native";

import Header from "./src/Header";
import List from "./src/List";

export default function App(){
  const [feed,setFeed] = useState([
    {
      id: '1',
      nome:'Bob',
      descricao:'Dando um passeio...',
      imgperfil: require('./src/img/dog1.jpg'),
      imgpublicacao:require('./src/img/dog1.jpg'),
      likeada:true,
      likers:12
    },
    {
      id:'2',
      nome:'Buddy',
      descricao:'Vamos da um rolé?',
      imgperfil:require('./src/img/dog2.jpg'),
      imgpublicacao:require('./src/img/dog2.jpg'),
      likeada:true,
      likers:10
    },
    {
      id:'3',
      nome:'Scooby',
      descricao:'Bora!!!',
      imgperfil:require('./src/img/dog3.jpg'),
      imgpublicacao:require('./src/img/dog3.jpg'),
      likeada:true,
      likers:1
    },
    {
      id:'4',
      nome:'Nick',
      descricao:'Trabalhando com o chefe!',
      imgperfil:require('./src/img/dog4.jpg'),
      imgpublicacao:require('./src/img/dog4.jpg'),
      likeada:false,
      likers:0
    },
    {
      id:'5',
      nome:'Chucky',
      descricao:'De boa',
      imgperfil:require('./src/img/dog5.jpg'),
      imgpublicacao:require('./src/img/dog5.jpg'),
      likeada:true,
      likers:1
    }
  ])

 
 
  return(
    <View style={styles.container}>
      <Header/>
     <FlatList
     keyExtractor={(item)=> item.id}
     showsVerticalScrollIndicator={false}
     data={feed}
     renderItem={({item})=> <List data={item}/>}
     />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:40
  }
})