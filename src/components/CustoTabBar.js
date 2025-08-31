import { Text, TouchableOpacity, View } from 'react-native';

export default function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row', backgroundColor: '#F4AF5F', borderRadius: 20 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({ type: 'tabPress', target: route.key });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={{
              flex: 1,
              padding: 10,
              alignItems: 'center',
              backgroundColor: isFocused ? '#fff' : '#F4AF5F',
              borderRadius: 10,
              margin: 5,
            }}
          >
            <Text style={{ color: isFocused ? '#000' : '#fff' }}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
