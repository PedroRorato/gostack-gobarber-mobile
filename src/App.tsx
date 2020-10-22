import React from 'react';
import {StatusBar, Text, View} from 'react-native';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#312e38" />
      <View style={{backgroundColor: '#312e38', flex: 1}}>
        <Text>Bom dia</Text>
      </View>
    </>
  );
};

export default App;
