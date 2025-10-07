import type { LoginITF } from "@/types/LoginRegister";
import axios from "axios";

export async function Login({ email, password }: LoginITF) {
  try {
    const login = await axios.post("/api/login", { email, password });
    localStorage.setItem("token", login.data.token);

    return login;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function GetMembers() {
  try {
    const members = await axios.get("/api/members");

    return members;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function GetAllStatus() {
  try {
    const status = await axios.get("/api/status");
    return status;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
export async function GetStatus(statusId?: string) {
  try {
    const status = await axios.get(`/api/status/${statusId}`);
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
    });

    return CommentStatus;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function GetProfile() {
  try {
    const profile = await axios.get("/api/profile");
    return profile;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function LikeStatus(statusId: string) {
  try {
    const like = await axios.post(`/api/like`, {statusId});
    return like;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function UnLikeStatus(statusId: string) {
  try {
    const unlike = await axios.delete(`/api/like`, {data: {statusId}});
    return unlike;
  } catch (err) {
    console.error(err);
    throw err;
  }
}