import { useEffect, useLayoutEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  BodyInput,
  CloseButton,
  CloseButtonImage,
  Container,
  DeleteButton,
  DeleteButtonImage,
  SaveButton,
  SaveButtonImage,
  TitleInput
} from './styles';

export default function EditNoteScreen({navigation, route}) {

  const dispatch = useDispatch();
  const list = useSelector(state => state.notes.list);


  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [status, setStatus] = useState('new'); // new, edit

  useEffect(() => {
    if (route.params?.key !== undefined && list[route.params.key]) {
      setStatus('edit');
      setTitle(list[route.params.key].title);
      setBody(list[route.params.key].body);
    }
  }, []);

   /*---UseEffect executa depois que o componente é carregado-----
    1- mudar o title conforme o {state} edit ou new
    2- quando o title e body estiverem preenchidos preciso atualizar o btn salvar em cima  {title} e {body}
  */

  useLayoutEffect(() => {
    navigation.setOptions({
      title: status === 'new' ? 'Nova anotação' : 'Editar anotação',
      headerLeft: () => (
          <CloseButton onPress={() => navigation.goBack()}>
            <CloseButtonImage source={require('../../assets/close.png')} />
          </CloseButton>    
      ),
      headerRight: () => (
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 20}}>
          {status === 'edit' &&
            <DeleteButton onPress={handleDeleteButton}>
              <DeleteButtonImage source={require('../../assets/clear.png')} />
          </DeleteButton>
          }
          <SaveButton onPress={handleSaveButton}>
            <SaveButtonImage source={require('../../assets/save.png')} />
          </SaveButton>
        </View>


      )
    });
  }, [status, title, body]);


  const handleSaveButton = () => {

    if (title !== '') {
      if (status === 'new') {
        dispatch({type: 'ADD_NOTE', payload: {title, body}});
      } else {
        dispatch({type: 'UPDATE_NOTE', payload: {key: route.params.key, title, body}});
      }
    } else{
      Alert.alert('Atenção', 'Preencha o título da anotação');
      return;
    }
    navigation.goBack();
  }

  const handleDeleteButton = () => {
    dispatch({type: 'DELETE_NOTE', payload: {key: route.params.key}});
    navigation.goBack();
  }

 return (
   <Container>
      <TitleInput 
        value={title}
        onChangeText={text => setTitle(text)}
        placeholder='Digite o título da anotação'
        placeholderTextColor='#CCC'
        autoFocus={true}
      />
      <BodyInput
        value={body}
        onChangeText={text => setBody(text)} 
        placeholder='Digite o corpo da anotação'
        placeholderTextColor='#CCC'
        multiline={true}
        textAlignVertical='top'/>
   </Container>
  );
}