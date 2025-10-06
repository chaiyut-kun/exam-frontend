import React, { useState, } from 'react'
import { useRouter } from "next/navigation";
import { Button, Modal, Typography, Box, Grid, TextField, Avatar } from '@mui/material'
import { deepOrange } from '@mui/material/colors';
import { StatusIF } from '@/types/Status';
import { CommentStatus } from '@/app/lib/Request';

function Status({ statusId, content, likes, comments, createdBy }: StatusIF) {
    const router = useRouter();

    // comment modal 
    const [open, setOpen] = useState(false);
    const [comment, setComment] = useState('');
    const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setComment(event.target.value);
    };
    const handleOpen = () => setOpen(true);
    const handleClose = () => {

        // const response = CommentStatus("statusId", comment);

        setOpen(false);
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
    }
    return (
        <>

            {/* content 1 */}
            < Box className='p-4 my-2 bg-slate-200 rounded-2xl' >
                {/* user */}
                <Box>
                    <Avatar sx={{ bgcolor: deepOrange[500] }}></Avatar>
                    < Typography variant="h6" component="h2" className="text-slate-900 font-bold" >
                        {createdBy.email}
                    </Typography>
                </Box>
                {/* status */}
                < Typography id="modal-modal-description" sx={{ mt: 2 }
                } className="text-slate-900" >
                    {content}
                </Typography >
                {/* Action Button */}
                < Grid container spacing={2} sx={{ mt: 2 }}>
                    <Grid >
                        <Button variant="outlined" className="text-slate-900 border-slate-900 hover:bg-slate-200">Like</Button>
                    </Grid>
                    <Grid >
                        <Button onClick={handleOpen} variant="outlined" className="text-slate-900 border-slate-900 hover:bg-slate-200">Comment</Button>
                    </Grid>

                    {/* modal for comment */}
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2" className="text-slate-900">
                                Comment
                            </Typography>
                            <TextField onChange={handleCommentChange} id="modal-modal-description" sx={{ mt: 2 }} fullWidth label="Your comment" variant="outlined" className="text-slate-900">
                            </TextField>

                            {/* all comments */}
                            <Box sx={{ mt: 2, maxHeight: 200, overflow: 'auto' }}>
                                u
                            </Box>

                            <Button sx={{ mt: 2 }} onClick={handleClose}>Send</Button>
                        </Box>
                    </Modal>

                </Grid >
            </Box >
        </>
    )
}

export default Status