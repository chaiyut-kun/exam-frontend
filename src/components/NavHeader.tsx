import React, { useState } from 'react'
import { Box, Button, Modal, Typography, TextField, Link } from '@mui/material'
import { useRouter } from 'next/navigation';
import { PostStatus } from '@/app/lib/Request';

function NavHeader({fetchStatus}: {fetchStatus: () => void}) {
    const router = useRouter();
    
    // content
    const [content, setContent] = useState('');
    const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value);
    };

    // modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = async () => {

        const response = await PostStatus(content);
        if (response.status === 200) {
            console.log("post", response.data.data)
            setOpen(false);
            fetchStatus();
        }
        
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <>

            {/* header */}
            <Box className='bg-slate-200 border border-0.5 border-slate-500 rounded p-2 flex justify-between items-center'>
                {/* post data */}
                <Box>
                    <Button
                        className="text-xl font-bold bg-blue-600 p-2 rounded hover:cursor-pointer hover:bg-blue-500"
                        variant="contained"
                        onClick={handleOpen}
                    >
                        Post your status
                    </Button>

                    {/* modal for post */}
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2" className="text-slate-900">
                                Text in a modal
                            </Typography>
                            <TextField id="modal-modal-description" sx={{ mt: 2 }} fullWidth onChange={handleContentChange} label="Your status" variant="outlined" className="text-slate-900">
                            </TextField>
                            <Button sx={{ mt: 2 }} onClick={handleClose}>Post</Button>
                        </Box>
                    </Modal>
                </Box>

                {/* navigation */}
                <Box className="mr-8 flex gap-4">
                    <Link onClick={() => router.push('/')} className="hover:cursor-pointer">Home</Link>
                    <Link onClick={() => router.push('/members')} className="hover:cursor-pointer">View Members</Link>
                </Box>
            </Box>

        </>
    )
}

export default NavHeader