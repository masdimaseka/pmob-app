import ShowGalleries from "@/components/ShowGalleries";
import globalStyles from "@/styles/globalStyles";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

export default function galleries() {
  return (
    <SafeAreaView style={[globalStyles.container, { flex: 1 }]}>
      <ScrollView>
        <View>
          <Text style={globalStyles.title}>Galleries</Text>
          <ShowGalleries />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
