import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrent } from "../Redux/Auth/auth-operations";
import { NavigationContainer } from "@react-navigation/native";
import useRoute from "./Navigation";

export default function Main() {
    const {stateChange} = useSelector((state) => state.user);
    const routes = useRoute(stateChange);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getCurrent())
    }, [dispatch])

  return (
    <NavigationContainer>{routes}</NavigationContainer>
  )
}