import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex:1,
        width: "100%",
        justifyContent:"center",
        alignItems: "center",
    
    },
    productSection: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        gap: 20,
        paddingHorizontal: 20
    },
    productDescription: {
        flexWrap:"wrap",
        flexShrink: 1,
    },
    ratingSection: {
        alignItems: "center",
        marginTop: 40
    },
    ratingText: {
        fontWeight: "bold",
        fontSize: 20
    },
    starSection: {
        marginTop: 15,
        flexDirection:"row",
        justifyContent: "center",
        alignItems: "center",
        gap: 20
    },
    addPictureSection: {
        marginTop: 30
    },
    addPictureContainer: {
        flexDirection: "row",
        gap: 20,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "blue",
        borderRadius: 10,
        paddingHorizontal: 50,
        paddingVertical: 20
    }
})


export default style