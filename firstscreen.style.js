import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex:1,
        width: "100%",
        backgroundColor: "#dbd767",
        justifyContent:"center",
        alignItems: "center"
    },
    header: {
        fontSize: 30,
        fontWeight: "bold"
    },
    inputSection:{
        width: "100%",
        paddingHorizontal: 40
    },
    nameInputContainer: {
        position: "relative",
        marginVertical: 20
    },
    nameInput:{
        borderWidth:1,
        padding: 15,
        paddingLeft: 40,

    },
    nameInputIcon: {
        position: "absolute",
        left: 15,
        top: 12
    },
    passwordInputContainer: {
        position: "relative",
    },
    passwordInput:{
        borderWidth:1,
        padding: 15,
        paddingLeft: 40

    },
    passwordInputIcon: {
        position: "absolute",
        left: 15,
        top: 12
    },
    eyeInputIcon: {
        position: "absolute",
        right: 15,
        top: 12
    },
    buttonSection:{
        marginTop: 30,
        width: "100%",
        paddingHorizontal:40
    },
    button: {
        alignItems:"center",
        backgroundColor: "#6e6e36",
        paddingVertical: 15
        
    }
})

export default style;