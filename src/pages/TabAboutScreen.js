import { StyleSheet, Text, View } from 'react-native';

export default function TabAboutScreen( {navigation, route} ) {
 return (
   <View style={styles.container}>
     <Text>TAB ABOUT</Text>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});