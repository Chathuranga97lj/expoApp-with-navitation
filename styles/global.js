import { StyleSheet } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export const global = StyleSheet.create({
    container: {
        padding: 15,
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 15,
        borderStyle: "solid",
        backgroundColor: 'lightgreen'
    }
})