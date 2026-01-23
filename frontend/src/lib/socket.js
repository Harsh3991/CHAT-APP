import { io } from "socket.io-client";

// Determine socket URL based on environment
const SOCKET_URL = import.meta.env.PROD 
  ? window.location.origin  // Use same origin in production
  : import.meta.env.VITE_SOCKET_URL || "http://localhost:5001";

export const socket = io(SOCKET_URL, {
  path: "/socket.io",
  transports: ["websocket", "polling"],
  autoConnect: true,
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionAttempts: 5,
  withCredentials: true,
});

socket.on("connect", () => {
  console.log("Connected to socket server:", socket.id);
});

socket.on("disconnect", () => {
  console.log("Disconnected from socket server");
});

socket.on("connect_error", (error) => {
  console.error("Socket connection error:", error);
});
