import type { LoginITF } from "@/types/LoginRegister";
import axios from "axios";


export async function Login({ email, password }: LoginITF) {

  try {
    const login = await axios.post('/api/login', {email, password})
    localStorage.setItem('token', login.data.token);

    return login
    
  } catch (err) {
    console.error(err)
    throw err
  }

}

export async function GetMembers() {
  try {
    const members = await axios.get('/api/members')

    return members
        
  } catch (err) {
    console.error(err)
    throw err
  }
}

export async function GetStatus() {
  try {

    const status = await axios.get('/api/status')
    return status
  } catch (err) {
    console.error(err)
    throw err
  }
}

export async function PostStatus(content : string) {
  try {

    const post = await axios.post('/api/status', {content})

    return post
    
  } catch (err) {
    console.error(err)
    throw err
  }
}

export async function CommentStatus(statusId: string, comment: string) {
  try {

    const CommentStatus = await axios.post('/api/status/comment', {statusId, comment})

  } catch (err) {
    console.error(err)
    throw err
  }

}