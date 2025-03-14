import { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  View,
} from "react-native";
import * as MediaLibrary from "expo-media-library";
import globalStyles from "@/styles/globalStyles";

function AlbumEntry({ album }: any) {
  const [assets, setAssets] = useState<any>([]);

  useEffect(() => {
    async function getAlbumAssets() {
      const albumAssets = await MediaLibrary.getAssetsAsync({ album });
      setAssets(albumAssets.assets);
    }
    getAlbumAssets();
  }, [album]);

  return (
    <View key={album.id}>
      <Text style={globalStyles.subTitle}>
        {album.title} - {album.assetCount ?? "no"} Picture
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        {assets &&
          assets.map((asset: any) => (
            <Image
              key={asset.id}
              source={{ uri: asset.uri }}
              width={110}
              height={110}
            />
          ))}
      </View>
    </View>
  );
}

export default function ShowGalleries() {
  const [albums, setAlbums] = useState<MediaLibrary.AlbumRef[] | null>(null);
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();

  async function getAlbums() {
    if (!permissionResponse || permissionResponse.status !== "granted") {
      const { status } = await requestPermission();
      if (status !== "granted") {
        console.log("Permission denied");
        return;
      }
    }

    const fetchedAlbums: MediaLibrary.AlbumRef[] =
      await MediaLibrary.getAlbumsAsync({
        includeSmartAlbums: true,
      });

    setAlbums(fetchedAlbums);
  }

  getAlbums();

  return (
    <SafeAreaView>
      <ScrollView>
        {albums &&
          albums.map((album) => (
            <AlbumEntry key={JSON.stringify(album)} album={album} />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}
