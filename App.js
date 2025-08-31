import { StyleSheet, Text, View, TextInput, Button, Image, FlatList } from 'react-native';
import { useState } from 'react';

// Importação das imagens locais usando os nomes que você salvou
const imgPoderosoChefao = require('./assets/images/Filmes_01.jpg');
const imgPulpFiction = require('./assets/images/Filmes_02.jpg');
const imgMatrix = require('./assets/images/Filmes_03.jpg');
const imgSenhorDosAneis = require('./assets/images/Filmes_04.jpg');
const imgInterestelar = require('./assets/images/Filmes_05.jpg');
const imgSeBeberNaoCase = require('./assets/images/Filmes_06.jpg');
const imgJohnWick = require('./assets/images/Filmes_07.jpg');
const imgBladeRunner = require('./assets/images/Filmes_08.jpg');

// Dados do catálogo de filmes
const filmesCatalogo = [
  {
    id: '1',
    titulo: 'O Poderoso Chefão',
    imagem: imgPoderosoChefao
  },
  {
    id: '2',
    titulo: 'Pulp Fiction',
    imagem: imgPulpFiction
  },
  {
    id: '3',
    titulo: 'Matrix',
    imagem: imgMatrix
  },
  {
    id: '4',
    titulo: 'O Senhor dos Anéis',
    imagem: imgSenhorDosAneis
  },
  {
    id: '5',
    titulo: 'Interestelar',
    imagem: imgInterestelar
  },
];

// Componente principal do aplicativo
export default function App() {
  const [genero, setGenero] = useState('');
  const [filmeRecomendado, setFilmeRecomendado] = useState('');
  const [imagemFilme, setImagemFilme] = useState('');

  const recomendarFilme = () => {
    // Lógica de recomendação
    if (genero.toLowerCase() === 'comédia') {
      setFilmeRecomendado('Recomendação: Se Beber, Não Case!');
      setImagemFilme(imgSeBeberNaoCase);
    } else if (genero.toLowerCase() === 'ação') {
      setFilmeRecomendado('Recomendação: John Wick!');
      setImagemFilme(imgJohnWick);
    } else if (genero.toLowerCase() === 'ficção científica') {
      setFilmeRecomendado('Recomendação: Blade Runner 2049!');
      setImagemFilme(imgBladeRunner);
    } else {
      setFilmeRecomendado('Gênero não encontrado. Tente Comédia, Ação ou Ficção Científica.');
      setImagemFilme('');
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.filmeItem}>
      <Image source={item.imagem} style={styles.filmeImagem} />
      <Text style={styles.filmeTitulo}>{item.titulo}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Gerador de Recomendações de Filmes</Text>

      <Text style={styles.subtitulo}>Filmes Populares</Text>
      <FlatList
        data={filmesCatalogo}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.catalogoContainer}
      />
      
      <View style={styles.secaoRecomendacao}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu gênero favorito"
          onChangeText={text => setGenero(text)}
          value={genero}
        />

        <Button
          title="Recomendar Filme"
          onPress={recomendarFilme}
        />

        <Text style={styles.resultado}>{filmeRecomendado}</Text>
        {imagemFilme ? (
          <Image
            source={imagemFilme}
            style={styles.image}
          />
        ) : null}
      </View>
    </View>
  );
}

// Estilização do aplicativo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
    paddingTop: 40,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  catalogoContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  filmeItem: {
    marginRight: 15,
    width: 120,
    alignItems: 'center',
  },
  filmeImagem: {
    width: 120,
    height: 180,
    borderRadius: 8,
    marginBottom: 5,
  },
  filmeTitulo: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  secaoRecomendacao: {
    marginTop: 40,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#444',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#333',
    color: '#fff',
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
  },
  image: {
    width: 200,
    height: 300,
    marginTop: 20,
    borderRadius: 10,
  },
});