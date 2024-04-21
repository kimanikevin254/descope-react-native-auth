import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loggedInContainer: {
        flex: 1,
        backgroundColor: "#fff",
    },
    loggedOutContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    headerText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    logoutButton: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 6,
        backgroundColor: "#f00",
    },
    logoutText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 8,
    },
    scrollView: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 12,
        backgroundColor: "white",
    },
    postContainer: {
        marginBottom: 8,
        padding: 12,
        backgroundColor: "#f9f9f9",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 2,
    },
    postTitle: {
        fontSize: 16,
        fontWeight: "bold",
    },
    editorPostInfo: {
        fontSize: 12,
        marginTop: 2,
        backgroundColor: "green",
        alignSelf: "flex-start",
        paddingHorizontal: 3,
        paddingVertical: 1,
        borderRadius: 5,
        color: "white",
    },
    welcomeText: {
        fontSize: 20,
        marginBottom: 20,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: "#fff",
    },
    modalHeader: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: "bold",
        flex: 1,
    },
    closeButton: {
        backgroundColor: "#f00",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 5,
    },
    closeButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    editorActionsContainer: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },
    actionButtonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 30,
    },
    actionButton: {
        backgroundColor: "#007bff",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    actionButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    scrollContainer: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    modalBody: {
        fontSize: 16,
        lineHeight: 24,
    },
});

export { styles };