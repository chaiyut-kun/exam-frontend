"use client"

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Modal, Typography, Box, TextField, Grid, Link } from '@mui/material'
import NavHeader from "@/components/NavHeader";
import Status from "@/components/Status";
import { GetStatus } from "./lib/Request";
import { StatusIF } from "@/types/Status";

export default function Home() {

  const router = useRouter();
  const [statusContent, setStatusContent] = useState([]);

  // useEffect(() => {

  //   if (!localStorage.getItem("token")) {
  //     router.push('/login')

  //   }
  // }, [])

  const fetchStatus = async () => {
    const res = await GetStatus();
    if (res.status === 200) {
      setStatusContent(res.data.data);
      console.log(res.data)
    }
  }

  fetchStatus();
  console.log("fetch status")

  


  return (
    <>

      <NavHeader />

      {/* contents */}
      <Box className='bg-blue-50 border border-0.5 border-slate-500 rounded py-8 px-64 mt-4'>

        {statusContent.map((status : StatusIF, key) => (
          <Status key={key} statusId={status.statusId} comments={status.comments} content={status.content} createdBy={status.createdBy} likes={status.likes}/>
        ))}

      </Box >

    </>
  );
}

