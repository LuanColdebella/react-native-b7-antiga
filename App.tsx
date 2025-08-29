import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { useEffect, useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Ball } from './components/Ball';

let timer: number;

const App = () => {

  const [gravity] = useState(0.98);
  const [upForce, setUpForce] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [posY, setPosY] = useState(0);


  useEffect( () => {
    const applyGravity = () => {

      //diminui o upForce
      let newUpForce = upForce - gravity;
      newUpForce = newUpForce < 0 ? 0 : newUpForce;
      setUpForce(newUpForce);

      //modificando velocidade
      let newSpeed  = speed + (gravity - (newUpForce / 2)); // não posso usar o upForce porque só altera a state quando terminar o useEffect
      setSpeed(newSpeed);

      //conforme a velocidade setar posicao da bola
      let newPosY = posY - newSpeed;

      if (newPosY < 0){
        newPosY = 0;
        setSpeed(0);
      }

      setPosY(newPosY);

    }

    clearTimeout(timer);
    timer = setTimeout(applyGravity, 30);
  }, [gravity, upForce, speed, posY]); //quando mudar os valores de um destes [gravity, upForce, speed, posY] roda useEffact



  const handleForceButton = () => {
    setUpForce(7);
  }

  return(
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
      
        <View style={styles.area}>
          <Ball PosY={posY}/>
        </View>

        <View style={styles.control}>
          <View>
            <Text style={styles.controlText}>UpForce: {upForce.toFixed(2)}</Text>
            <Text style={styles.controlText}>Speed: {speed.toFixed(2)}</Text>
            <Text style={styles.controlText}>PosY: {posY.toFixed(2)}</Text>
          </View>
          <TouchableOpacity style={styles.controlButton} onPress={handleForceButton}>
            <Text style={[styles.controlText]}>Fazer força</Text>
          </TouchableOpacity>
        </View>
        
      </SafeAreaView>
    </SafeAreaProvider>
  )
  
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222'
  },
  area: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',

  },
  control: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    margin: 20
  },
  controlText: {
    color: '#FFF'
  },
  controlButton: {
    flex: 1,
    height: 100,
    backgroundColor: '#0061FF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
});