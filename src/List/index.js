import React from "react";
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native';


export default function List(props){

 function carregaIcon(likeada){
  return likeada ? require('../img/likeada.png') : require('../img/like.png')
 }
 function mostralike(likers){
    if(likers === 0){
        return;
    }
    return (
        <Text style={styles.txtlike}>{likers}{ likers >1 ? " Curtidas" : " Curtida"}</Text>
    )
 }
    return(
        <View>
            <View style={styles.viewperfil}>
             <Image
              source={props.data.imgperfil}
              style={styles.fotoperfil}
             />
             <Text style={styles.txtperfil}>
                 {props.data.nome}
             </Text>
            
            </View>
            <Image
            resizeMode="cover"
             source={props.data.imgpublicacao}
             style={styles.publi}
             />
            <View style={styles.btnarea}>
              <TouchableOpacity>
                  <Image
                  source={carregaIcon(props.data.likeada)}
                  style={styles.iconlike}
                  />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnsend}>
                  <Image
                  source={require('../img/comment.png')}
                  style={styles.iconlike}
                  />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnsend}>
                  <Image
                  source={require('../img/patabtn.png')}
                  style={styles.iconpata}
                  />

              </TouchableOpacity>
            </View>
            {mostralike(props.data.likers)}
            <View style={styles.descricao}>
               <Text style={styles.txtdescricao}>
                   {props.data.descricao}
               </Text>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    viewperfil:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        padding:8,
        paddingLeft:10
    },
    fotoperfil:{
        width:50,
        height:50,
        borderRadius:50
    },
    txtperfil:{
        padding:5,
        fontWeight:'bold',
        fontSize:17
    },
    publi:{
        height:300,
        width:'100%',
        alignItems:'center',
         
        
    },
    btnarea:{
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:10,
        marginTop:5
    },
    likeada:{
        width:30,
        height:30
    },
   iconlike:{
        width:30,
        height:30
    },
    btnsend:{
        paddingLeft:7
    },
    iconpata:{
        width:35,
        height:35,
        marginTop:4
    },
    txtlike:{
        paddingLeft:10,
        fontWeight:'bold'
    },
    descricao:{
        marginLeft:10,
       
    },
    txtdescricao:{
        fontSize:17
    }
   
})