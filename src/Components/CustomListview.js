import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import CustomRow from './CustomRow';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


const CustomListview = ({ itemList }) => (
    <View style={styles.container}>
        <FlatList
        
                data={itemList}
                renderItem={({ item }) => <CustomRow
                    title={item.id}
                    description={item.title}
                />}
                keyExtractor={item => `key-${item.id}`}


            />

    </View>
);

export default CustomListview;