import { Text, View,StyleSheet } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const MenuOption = ({ item }) => {
  return (
    <View style={styles.optionRow}>
      {/* Icon */}
      <MaterialCommunityIcons name={item.iconName} size={26} color="gray" />

      {/* Text */}
      <Text style={styles.optionText}>{item.name}</Text>

      {/* Icon */}
      <MaterialIcons
        name="keyboard-arrow-right"
        size={24}
        color="gray"
        style={{ marginLeft: 'auto' }}
      />
    </View>
  );
};

export default MenuOption;


const styles = StyleSheet.create({
    optionRow: {
      flexDirection: 'row',
      marginVertical: 20,
      alignItems: 'center',
    },
    optionText: {
      color: '#eee',
      fontWeight: 18,
      fontWeight: 'bold',
      marginLeft: 10,
    },
  });
  