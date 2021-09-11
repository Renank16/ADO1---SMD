import React, {useState} from 'react';
import { Text, View, FlatList, StyleSheet, Modal, Image, Pressable } from 'react-native';
 //renderizar um item(objeto) do arquivo json


const CasaDoBaralho = () => {
    return (
      //renderizando o fundo
      <View style={styles.fundo}> 
      <Text  style={styles.title}>♦Receitas da Casa♣{'\n'}             Do{'\n'}       ♠Baralho♣</Text>
      
      <FlatList
      data={receitas}
      renderItem={renderItem}
      />  
      </View>
    );
  
}
  const renderItem = ({item}) => {
    return(
      <View>
      <Text style={styles.item}>{item.receita}</Text>
      <RenderModal
      nome = {item.receita}
      ingredientes = {item.ingredientes}
      foto = { item.foto}
      />
      </View>

      
    );


  }

  const RenderModal = ({nome, ingredientes, foto}) => {
    const [visivel, setVisivel] = useState(false)    

    return(
      <View>
      <Pressable onPress={()=>{setVisivel(true)}}>
      <Image
      style={styles.tinyLogo}
      source={{uri:foto}}
      />
      </Pressable>
      <Modal
       onbackdoorpress={()=>setVisivel(false)}
       visible={visivel}
       animationType='slide'
       transparent={true}
       >
      <View style={styles.modalStyle}>
      <Text onPress={()=>{setVisivel(false)}}>{ingredientes}</Text>
      </View>
      </Modal>
      </View>

    )
  }



// Data com as receitas.
const receitas = [
  {
    receita: "Barrinhas de cereal",
		ingredientes: "1 xícara de nozes, 1 xícara de frutas secas, 1 xícara de tâmaras secas sem caroço",
    foto: 'https://4.bp.blogspot.com/-AETWtQQIUW0/Ww8UK-scE2I/AAAAAAAACNg/luhbMKwSoUYS0dVv2G-Z07b3l_eYpnEWACEwYBhgL/s1600/CEREAL2.png'
  },
  {
    receita: "Mousse de limão",
		ingredientes: "1 lata de leite condensado, 1 lata de creme de leite, 1/2 xícara de limão espremido",
    foto: 'https://i.pinimg.com/originals/05/51/60/0551608b6e617e175874832dd9cb5555.png'
  },
  {
    receita: "Bolo para café da tarde",
			ingredientes: "3 ovos, 2/3 de xícara de farinha com fermento, 1/2 xícara de açúcar refinado",
      foto: 'https://riosoftice.com.br/wp-content/uploads/2019/03/bolo_laranja.png'
  },
  {
    receita: "Sorvete caseiro",
		ingredientes: "1 lata de leite condensado, 1 lata de creme de leite, 1 pacote de gelatina do seu sabor preferido",
    foto: 'https://www.sorvetesmerli.com.br/img/sorvete.png'
  },
  {
    receita: "Pão de queijo",
		ingredientes: "1 caixa de creme de leite, 1 copo de queijo parmesão ralado, 1 copo de polvilho doce",
    foto: "https://s2.glbimg.com/9QNO2q8PEeOPLWikHCfMzZl75ZE=/620x466/e.glbimg.com/og/ed/f/original/2020/08/15/pao-de-queijo-mineiro.jpg"
  }
  
];

const styles = StyleSheet.create({
  fundo: {
    backgroundColor: 'lightblue',
    flex: 1,
  },
  title: {
    alignSelf: 'center',
    fontSize: 20,
    marginTop: 35,
    marginBottom: 35,
    color: 'white',
  },
  item:{
    alignSelf: 'center',
    backgroundColor: 'white',
    borderColor: 'pink',
    borderWidth: 5,
    fontFamily: 'Arial',
    fontSize: 25,
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,

  },
    tinyLogo: {
    width: 100,
    height: 100,
    alignSelf: 'center'
  },
  modalStyle:{
    marginTop: '70%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
        shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  }

  

})

export default CasaDoBaralho;
