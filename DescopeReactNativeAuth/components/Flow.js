import { useFlow, useDescope, useSession } from "@descope/react-native-sdk";
import React, { useCallback, useEffect, useState } from "react";
import {
    Alert,
    Button,
    Linking,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import DetailsModal from "./DetailsModal";
import { styles } from "../styles";

export default function Flow() {
    const [posts, setPosts] = useState(null);
    const [selectedPost, setSelectedPost] = useState(null);

    const flow = useFlow();
    const { session, clearSession, manageSession } = useSession();
    const { logout } = useDescope();

    const startFlow = async () => {
        try {
            const resp = await flow.start(
                "https://auth.descope.io/<YOUR-DESCOPE-PROJECT-ID>?flow=sign-up-or-in",
                "<YOUR-APP-LINKING-URL>"
            );
            await manageSession(resp.data);
        } catch (error) {
            console.log("Start flow error:", error);
        }
    };

    useEffect(() => {
        Linking.addEventListener("url", async (event) => {
            if (event.url.includes("<YOUR-APP-LINKING-URL>")) {
                try {
                    await flow.exchange(event.url);
                } catch (error) {
                    console.log(error);
                }
            }
        });
    
        return () => {
            Linking.removeAllListeners("url");
        };
    }, [flow]);

    const handleLogout = useCallback(() => {
        logout();
        clearSession();
    }, [logout]);

    const fetchPosts = async () => {
        try {
            const res = await fetch("http://<YOUR-IP-ADDRESS>:3000", {
                headers: {
                    Authorization: `Bearer ${session.sessionJwt}`,
                },
            });
    
            const data = await res.json();
    
            if (!res.ok) {
                // If the response status is not in the range 200-299, throw an error
                throw new Error(data.message);
            } else {
                setPosts(data.posts);
            }
        } catch (error) {
            console.log("Error", error.message);
    
            if (error.message === "Session expired") {
                Alert.alert("Session expired", "Please log in", [
                    // Redirect to the unathenticated user's screen
                    {
                        text: "Cancel",
                        onPress: () => {
                            logout();
                            clearSession();
                        },
                        style: "cancel",
                    },
                    // Start the login flow
                    {
                        text: "LOG IN",
                        onPress: () => {
                            logout();
                            clearSession();
                            startFlow();
                        },
                        style: "default",
                    },
                ]);
            }
        }
    };

    useEffect(() => {
        if (session) {
            fetchPosts();
        }
    }, [session]);

    const togglePostPublish = async () => {
        try {
            const res = await fetch("http://<YOUR-IP-ADDRESS>:3000/toggle-publish", {
                headers: {
                    Authorization: `Bearer ${session.sessionJwt}`,
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({ postId: selectedPost.id }),
            });
    
            const data = await res.json();
    
            if (!res.ok) {
                throw new Error(data.message);
            }
    
            // Update selected post with the new data. This will help to update the editor actions buttons.
            setSelectedPost(data.updatedPost);
    
            // Fetch updated posts
            fetchPosts();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            {session ? (
                <View style={styles.loggedInContainer}>
                    <DetailsModal
                        selectedPost={selectedPost}
                        setSelectedPost={setSelectedPost}
                        session={session}
                        togglePostPublish={togglePostPublish}
                    />

                    <View style={styles.header}>
                        <Text style={styles.headerText}>
                            Hello, {session.user.name.split(' ')[0]}
                        </Text>
                        <TouchableOpacity
                            style={styles.logoutButton}
                            onPress={handleLogout}
                        >
                            <Text style={styles.logoutText}>Log out</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.sectionTitle}>Available Posts</Text>

                    <ScrollView style={styles.scrollView}>
                        {posts &&
                            posts.map((post) => (
                                <TouchableOpacity
                                    key={post.id}
                                    onPress={() => setSelectedPost(post)}
                                    style={styles.postContainer}
                                >
                                    <Text style={styles.postTitle}>
                                        {post.title}
                                    </Text>
                                    {session.user.roleNames.includes(
                                        "editor"
                                    ) && (
                                        <Text style={styles.editorPostInfo}>
                                            {post.published
                                                ? "Published"
                                                : "Not published"}
                                        </Text>
                                    )}
                                </TouchableOpacity>
                            ))}
                    </ScrollView>
                </View>
            ) : (
                <View style={styles.loggedOutContainer}>
                    <Text style={styles.welcomeText}>Welcome!</Text>
                    <Button onPress={startFlow} title="LOG IN" />
                </View>
            )}
        </SafeAreaView>
    );
}