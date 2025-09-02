import React, { useLayoutEffect, useState } from 'react';
import { RefreshControl } from 'react-native';
import { useSelector } from 'react-redux';
import NoteItem from '../../components/NoteItem';
import { AddButton, AddButtonImage, Container, NoNotes, NoNotesImage, NoNotesText, NotesList } from './styles';
export default function ListScreen({navigation}) {

  const [refreshing, setRefreshing] = useState(false);
  const notes = useSelector(state => state.notes);
  const list = useSelector(state => state.notes.list);
  // const list = [];

  const onRefresh = () => {
    setRefreshing(true); // ativa o spinner
    setTimeout(() => {
      setRefreshing(false); // desativa após 2 segundos
    }, 300);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Suas notas',
      headerRight: () => (
        <AddButton underlayColor="transparent" onPress={(index) => navigation.navigate('EditNote')}>
          <AddButtonImage source={require('../../assets/more.png')} />
        </AddButton>
      ),
    });
  }, []);

  const handleNotePress = (index) => {
    navigation.navigate('EditNote', {
      key: index
    });
  }

 return (
   <Container>
    { list.length > 0 &&
      <NotesList 
      refreshControl={
        <RefreshControl
          refreshing={refreshing} // controla o estado de carregamento
          onRefresh={onRefresh} // função chamada ao puxar para baixo
          colors={['#2196F3']} // cor do spinner (Android)
          tintColor="#2196F3" // cor do spinner (iOS)
          title="Atualizando..." // texto abaixo do spinner (iOS)
        />
      }
        data={list}
        renderItem={({index, item}) => (
          <NoteItem 
            data={item}
            index={index}
            onPress={handleNotePress}
          />
        )}
        keyExtractor={(item, index) => index.toString()} 
      />
    }
    { list.length === 0 &&
      <NoNotes>
          <NoNotesImage source={require('../../assets/note.png')} />
          <NoNotesText>Nenhuma anotação</NoNotesText>
      </NoNotes>
    }
   </Container>
  );
}