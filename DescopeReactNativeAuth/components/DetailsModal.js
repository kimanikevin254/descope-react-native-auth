import {
    Alert,
    Modal,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { styles } from "../styles";

export default function DetailsModal({
    selectedPost,
    setSelectedPost,
    session,
    togglePostPublish,
}) {
    return (
        <Modal
            animationType="fade"
            visible={selectedPost !== null}
            onRequestClose={() => setSelectedPost(null)}
        >
            {selectedPost && (
                <View style={styles.modalContainer}>
                    {session.user.roleNames.includes("editor") && (
                        <View style={styles.editorActionsContainer}>
                            <Text style={styles.sectionTitle}>
                                Editor Actions
                            </Text>
                            <View style={styles.actionButtonsContainer}>
                                <TouchableOpacity
                                    onPress={() => togglePostPublish()}
                                    style={styles.actionButton}
                                >
                                    <Text style={styles.actionButtonText}>
                                        {selectedPost.published
                                            ? "Unpublish"
                                            : "Publish"}
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.actionButton}
                                    onPress={() =>
                                        Alert.alert(
                                            "Editor alert",
                                            "You are an editor. You can edit this post"
                                        )
                                    }
                                >
                                    <Text style={styles.actionButtonText}>
                                        Edit
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}

                    <View style={styles.modalHeader}>
                        <Text style={styles.modalTitle}>
                            {selectedPost.title}
                        </Text>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setSelectedPost(null)}
                        >
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView contentContainerStyle={styles.scrollContainer}>
                        <Text style={styles.modalBody}>
                            {selectedPost.body}
                        </Text>
                    </ScrollView>
                </View>
            )}
        </Modal>
    );
}