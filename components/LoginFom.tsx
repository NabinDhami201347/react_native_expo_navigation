import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Controller, useForm } from "react-hook-form";
import Feather from "@expo/vector-icons/Feather";
import SizedBox from "./SizedBox";

interface FormData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const emailInput = React.useRef<TextInput>(null);
  const passwordInput = React.useRef<TextInput>(null);

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = handleSubmit((data) => {
    console.log(data, "ok");
    reset();
  });

  return (
    <View style={styles.root}>
      <SafeAreaView style={styles.safeAreaView}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.content}
        >
          <Text style={styles.title}>Welcome back!</Text>

          <SizedBox height={8} />

          <Text style={styles.subtitle}>Sign in to your account</Text>

          <SizedBox height={32} />

          <Pressable onPress={() => emailInput.current?.focus()}>
            <View style={styles.form}>
              <Feather name="mail" size={22} color="#EEE2DE" />
              <Controller
                control={control}
                name="email"
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="Email"
                    placeholderTextColor="#ebebf599"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    onSubmitEditing={() => passwordInput.current?.focus()}
                    ref={emailInput}
                    style={styles.textInput}
                    value={value}
                  />
                )}
              />
              {errors.email && (
                <Text style={{ color: "red" }}>Email is required.</Text>
              )}
            </View>
          </Pressable>

          <SizedBox height={16} />

          <Pressable onPress={() => passwordInput.current?.focus()}>
            <View style={styles.form}>
              <Feather name="key" size={20} color="#EEE2DE" />
              <Controller
                control={control}
                name="password"
                rules={{ minLength: 6, required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    autoCapitalize="none"
                    placeholder="Password"
                    placeholderTextColor="#ebebf599"
                    autoCorrect={false}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    onSubmitEditing={onSubmit}
                    ref={passwordInput}
                    returnKeyType="done"
                    secureTextEntry
                    style={styles.textInput}
                    textContentType="password"
                    value={value}
                  />
                )}
              />
              {errors.password?.type === "minLength" && (
                <Text style={{ color: "red" }}>
                  Password must be more than 6 characters
                </Text>
              )}
              {errors.password?.type === "required" && (
                <Text style={{ color: "red" }}>Password cannot be empty</Text>
              )}
            </View>
          </Pressable>

          <SizedBox height={16} />

          <TouchableOpacity style={styles.forgotPasswordContainer}>
            <Text style={styles.textButton}>Forgot password?</Text>
          </TouchableOpacity>

          <SizedBox height={16} />

          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={[
              styles.button,
              (!!errors.email || !!errors.password) && {
                backgroundColor: "red",
              },
            ]}
          >
            <Text style={styles.buttonTitle}>Continue</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "rgb(93, 95, 222)",
    borderRadius: 8,
    height: 48,
    justifyContent: "center",
  },

  buttonTitle: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "600",
    lineHeight: 22,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  forgotPasswordContainer: {
    alignItems: "flex-end",
  },
  form: {
    alignItems: "center",
    backgroundColor: "rgb(58, 58, 60)",
    borderRadius: 8,
    flexDirection: "row",
    height: 48,
    paddingHorizontal: 16,
    gap: 10,
  },
  label: {
    color: "rgba(235, 235, 245, 0.6)",
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 20,
    width: 80,
  },
  root: {
    backgroundColor: "#000000",
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
  },
  subtitle: {
    color: "rgba(235, 235, 245, 0.6)",
    fontSize: 17,
    fontWeight: "400",
    lineHeight: 22,
  },
  textButton: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 20,
  },
  textInput: {
    color: "#FFFFFF",
    flex: 1,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "700",
    lineHeight: 34,
  },
});
