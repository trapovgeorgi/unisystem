import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

export function useApi() {
	const [auth, setAuth] = useContext(AuthContext);

	const api = axios.create({
		baseURL: "http://192.168.123.109:8000",
	});

	api.interceptors.request.use(
		(config) => {
			const token = auth;
			if (token) {
				config.headers.Authorization = `Bearer ${token}`;
			}
			return config;
		},
		(error) => Promise.reject(error)
	);

	return api;
}
