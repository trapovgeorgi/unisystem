import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import * as Device from 'expo-device';

export function useApi() {
	const [auth, setAuth] = useContext(AuthContext);
	const api = axios.create({
		baseURL: "https://hristo.trapov.pro",
		//baseURL: "http://192.168.123.104:8000",
		headers:{
			"User-Agent": Device.deviceName
		}
		
	});

	api.interceptors.request.use(
		(config) => {
			const token = auth?.api_token;
			if (token) {
				config.headers.Authorization = `Bearer ${token}`;
			}
			return config;
		},
		(error) => Promise.reject(error)
	);

	return api;
}
