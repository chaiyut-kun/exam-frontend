"use client"

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Modal, Typography, Box, TextField, Grid, Link } from '@mui/material'
import NavHeader from "@/components/NavHeader";
import Status from "@/components/Status";
import { GetAllStatus } from "./lib/Request";
import { StatusIF } from "@/types/Status";

export default function Home() {

  const router = useRouter();
  const [statusContent, setStatusContent] = useState([]);

  useEffect(() => {

    if (!localStorage.getItem("token")) {
      router.push('/login')

    }
    fetchStatus();
  }, [])

  const fetchStatus = async () => {
    const res = await GetAllStatus();
    console.log("res", res.data)
    if (res.data) {
      setStatusContent(res.data);
    }
  }

  console.log("fetch status")
  console.log(statusContent)

  


  return (
    <>

      <NavHeader fetchStatus={fetchStatus} />

      {/* contents */}
      <Box className='bg-blue-50 border border-0.5 border-slate-500 rounded py-8 px-64 mt-4'>

        {statusContent.map((status : StatusIF, key) => (
          console.log("comment",status.comment),
          <Status  key={key} _id={status._id} comment={status.comment} content={status.content} createdBy={status.createdBy} like={status.like}/>
        ))}

      </Box >

    </>
  );
}

