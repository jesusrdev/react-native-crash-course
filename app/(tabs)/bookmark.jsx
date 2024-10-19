import { View, Text, FlatList, RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import SearchInput from "../../components/SearchInput";
import EmptyState from "../../components/EmptyState";
import { getBookmarks } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";
import VideoCard from "../../components/VideoCard";
import SearchBookmarsInput from "../../components/SearchBookmarksInput";

const Bookmark = () => {
  const { data: posts, refetch } = useAppwrite(getBookmarks);
  
  const [postsToShow, setPostsToShow] = useState(null);

  useEffect(() => {
    if (posts) setPostsToShow(posts);
  }, [posts]);
  
  const [refreshing, setRefreshing] = useState(false);

  const filterBookmarks = (query) => {
    if (!query) return posts;

    const filteredPosts = posts.filter((post) => post.title.includes(query));

    setPostsToShow(filteredPosts);
  };

  const onRefresh = async () => {
    setRefreshing(true);

    await refetch();
    setRefreshing(false);
  };

  return (
    <SafeAreaView className="h-full bg-primary">
      <FlatList
        data={postsToShow}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="px-4 my-6">
            <Text className="text-2xl text-white font-psemibold">Saved Videos</Text>

            <View className="mt-6 mb-8">
              <SearchBookmarsInput submit={filterBookmarks} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Saved"
            subtitles="Save videos to your bookmarks"
          />
        )}
        
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="white" />
        }
      />
    </SafeAreaView>
  );
};

export default Bookmark;
