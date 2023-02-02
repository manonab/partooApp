import { LoginForm } from "@/components/login-form";
import React from "react";
import { KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const LoginScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <LoginForm />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
