"use client";

import Cookies from "js-cookie";
import { axios_auth } from "@/src/shared/api/interceptors/lib/axios/model";
import { socket_auth } from "@/src/shared/api/interceptors/lib/socket/model";

const accessToken = Cookies.get("accessToken");

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

const SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:81";

export const $axios = axios_auth(accessToken || "", API_URL);
export const $socket = socket_auth(accessToken || "", SOCKET_URL);
