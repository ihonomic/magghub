import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const HomeScreen = () => {
  const navigation = useNavigation<any>();

  const [formData, setFormData] = useState({
    image: "",
    name: "",
    email: "",
    age: "",
  });
  const [errors, setErrors] = useState({
    imageError: "",
    nameError: "",
    emailError: "",
    ageError: "",
  });

  const { image, name, email, age } = formData;
  const { imageError, nameError, emailError, ageError } = errors;

  const uploadPhoto = async () => {
    setErrors({ ...errors, imageError: "" });

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const asset = result.assets[0];
      setFormData({ ...formData, image: asset.uri });
    }
  };

  const onSubmit = () => {
    const failEmail = !email || !isEmail(email);
    const failName = !name;
    const failAge = !age;
    const failImage = !image;

    setErrors({
      emailError: failEmail ? "Email is not valid" : "",
      nameError: failName ? "Full name is required" : "",
      ageError: failAge ? "Age is not valid" : "",
      imageError: failImage ? "Photo is required" : "",
    });

    if (failEmail || nameError || ageError || imageError) {
      return;
    }

    navigation.navigate("DetailScreen", formData);
  };

  const isEmail = (emailAdress: string) => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAdress.match(regex)) return true;
    else return false;
  };
  return (
    <ImageBackground
      style={styles.image}
      source={{
        uri: "https://source.unsplash.com/random/?dark",
      }}
      resizeMode="cover"
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Image
            source={{
              uri: "https://magghub.com/assets/images/MaggHub-Logo-Tall.png",
            }}
            width={100}
            height={100}
            style={[styles.avatar, { alignSelf: "center" }]}
            resizeMode="contain"
          />

          <>
            {!nameError ? (
              <Text style={styles.text}>Full name</Text>
            ) : (
              <Text style={[styles.text, { color: "red" }]}>{nameError}</Text>
            )}
            <View
              style={[
                styles.inputContainer,
                nameError ? { borderColor: "red" } : null,
              ]}
            >
              <AntDesign name="user" size={22} color={"gray"} />
              <TextInput
                placeholder="Enter full name"
                style={{ marginLeft: 12 }}
                value={name}
                onChangeText={(text) => {
                  setErrors({ ...errors, nameError: "" });
                  setFormData({ ...formData, name: text });
                }}
              />
            </View>
          </>

          <>
            {!emailError ? (
              <Text style={styles.text}>Email</Text>
            ) : (
              <Text style={[styles.text, { color: "red" }]}>{emailError}</Text>
            )}
            <View
              style={[
                styles.inputContainer,
                emailError ? { borderColor: "red" } : null,
              ]}
            >
              <MaterialIcons name="alternate-email" size={22} color={"gray"} />
              <TextInput
                placeholder="Enter Email"
                style={{ marginLeft: 12 }}
                value={email}
                onChangeText={(text) => {
                  setErrors({ ...errors, emailError: "" });
                  setFormData({ ...formData, email: text });
                }}
              />
            </View>
          </>

          <>
            {!ageError ? (
              <Text style={styles.text}>Age</Text>
            ) : (
              <Text style={[styles.text, { color: "red" }]}>{ageError}</Text>
            )}
            <View
              style={[
                styles.inputContainer,
                ageError ? { borderColor: "red" } : null,
              ]}
            >
              <AntDesign name="addusergroup" size={22} color={"gray"} />
              <TextInput
                placeholder="Enter your age"
                style={{ marginLeft: 12 }}
                value={age}
                onChangeText={(text) => {
                  setErrors({ ...errors, ageError: "" });
                  setFormData({ ...formData, age: text });
                }}
                keyboardType="numeric"
              />
            </View>
          </>

          {!imageError ? (
            <Text style={styles.text}>Upload Photo</Text>
          ) : (
            <Text style={[styles.text, { color: "red" }]}>{imageError}</Text>
          )}
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={uploadPhoto}
            style={styles.avatarContainer}
          >
            <Image
              source={{
                uri: image
                  ? image
                  : "https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg",
              }}
              width={70}
              height={70}
              style={[styles.avatar, {}]}
            />
          </TouchableOpacity>

          <View style={{ alignItems: "center" }}>
            <TouchableOpacity onPress={onSubmit} style={styles.btn}>
              <Text style={styles.text}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: "center",
  },
  avatar: {
    borderRadius: 50,
    borderColor: "white",
    borderWidth: 1,
  },
  image: {
    flex: 1,
  },
  btn: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    //   position: "absolute",
    //   bottom: 20,
    width: 300,
    height: 50,
    backgroundColor: "#4f3d6b",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  text: {
    color: "white",
    fontWeight: "700",
    marginVertical: 8,
    fontSize: 15,
  },
  avatarContainer: {
    // alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "gray",
    height: 50,
    alignItems: "center",
    paddingHorizontal: 12,
    // width: "80%",
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: "#f0f3fa",
    // alignSelf: "center",
  },
});
