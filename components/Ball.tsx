import { StyleSheet, View } from 'react-native';

type Props = {
    PosY: number;
}
export const Ball = ( { PosY } : Props) => {
 return (
   <View style={[styles.container, { bottom: PosY }]}/>
  );
}

const styles = StyleSheet.create({
    container: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#FFF',
        position: 'absolute', // precisa para controlar a posição - top, left, right, bottom
    }
});