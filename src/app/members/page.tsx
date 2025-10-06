'use client'

import React, { useEffect, useState } from 'react'
import { Box, Grid, Avatar, Typography } from '@mui/material'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Grid3x3SharpIcon from '@mui/icons-material/Grid3x3Sharp';
import { GetMembers } from '../lib/Request';
import type { Member, MemberCard } from '@/types/Members';
import NavHeader from '@/components/NavHeader';

function Members() {

    // api to get members profile
    const [members, setMembers] = useState<Member[]>([])

    useEffect(() => {
        const fetchMembers = async () => {
            const response = await GetMembers();
            if (response.status === 200) {

                setMembers(response.data.data);
            }
        }
        fetchMembers();

    }, [])



    return (
        <>
            <NavHeader />

            <Box className='bg-blue-50 border border-0.5 border-slate-500 rounded py-8 px-20 mt-4'>

                <Grid container>
                    {members.map((member, key) => (
                        <Grid className="p-4 bg-slate-200 rounded-2xl m-2" key={key}>
                            <MemberInfo email={member.email} firstname={member.firstname} lastname={member.lastname} studentId={member.education.studentId} />
                        </Grid>
                    ))}

                </Grid>

            </Box >
        </>
    )
}


function stringAvatar(name: string) {
    return {
        sx: {
            bgcolor: '#f44336',
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

function MemberInfo({ email, firstname, lastname, studentId }: MemberCard) {
    return (
        <>
            {/* avatar & firstname */}
            <Box className='flex gap-4 items-center mb-2'>
                <Avatar {...stringAvatar(`${firstname} ${lastname}`)} />
                <Typography variant="caption" component="h2" className="text-slate-900 font-bold">
                    {firstname} {lastname}
                </Typography>
            </Box>
            {/* email */}
            <Box className='flex gap-2 items-center'>
                <AlternateEmailIcon color='info' />
                <Typography variant="body1" component="p" className="text-slate-700">
                    {email}
                </Typography>
            </Box>
            {/* student id */}
            <Box className='flex gap-2 items-center'>
                <Grid3x3SharpIcon color='info' />
                <Typography variant="body1" component="p" className="text-slate-700">
                    {studentId}
                </Typography>
            </Box>

        </>
    )
}

export default Members