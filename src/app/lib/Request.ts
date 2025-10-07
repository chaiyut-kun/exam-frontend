import type { LoginITF } from "@/types/LoginRegister";
import axios from "axios";

export async function Login({ email, password }: LoginITF) {
  try {
    const login = await axios.post("/api/login", { email, password });
    const response = login.data;
    console.log("response:", response);
    localStorage.setItem("token", response.data.token);

    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function GetMembers() {
  try {
    const members = await axios.get("/api/members?t=" + localStorage.getItem("token"));

    return members;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function GetAllStatus() {
  try {
    const status = await axios.get("/api/status/?t=" + localStorage.getItem("token"));
    const response = status.data;
    console.log("status", response.data);
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
export async function GetStatus(statusId?: string) {
  try {
    const status = await axios.get(`/api/status/${statusId}?t=` + localStorage.getItem("token"));
    const response = status.data;
    console.log("status", response);
    return status;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function PostStatus(content: string) {
  try {
    const post = await axios.post("/api/status", { content });

    return post;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function CommentStatus(statusId: string, content: string) {
  try {
    const CommentStatus = await axios.post("/api/status/comment", {
      content,
      statusId,
      token: localStorage.getItem("token"),
    });

    const response = CommentStatus.data;
    console.log("comment", response);

    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function GetProfile() {
  try {
    const profile = await axios.get("/api/profile?t=" + localStorage.getItem("token"));
    const response = profile.data;
    console.log("profile", response);
    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function LikeStatus(statusId: string) {
  try {
    const token = localStorage.getItem('token')
    const like = await axios.post(`/api/like`, { statusId, token});
    const response = like.data;
    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function UnLikeStatus(statusId: string) {
  try {
    const unlike = await axios.delete(`/api/like`, { data: { statusId, token: localStorage.getItem('token') } });
    return unlike;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
