import React, { useEffect, useState, } from 'react'
import { useRouter } from "next/navigation";
import { Button, Modal, Typography, Box, Grid, TextField, Avatar } from '@mui/material'
import { deepOrange } from '@mui/material/colors';
import { StatusIF } from '@/types/Status';
import { CommentStatus, GetStatus, GetProfile, LikeStatus, UnLikeStatus } from '@/app/lib/Request';


function Status({ _id, content, like, comment, createdBy }: StatusIF) {
    const router = useRouter();

    // comment modal 
    const [open, setOpen] = useState(false);
    // my comment
    const [myComment, setMyComment] = useState('');
    const [isSend, setIsSend] = useState(false);
    // users comments
    const [allComments, setAllComments] = useState(comment);
    // is Liked
    const [isLiked, setIsLiked] = useState(false);
    
    const fetchComment = async () => {
        const res = await GetStatus(_id);
        if (res.status === 200) {
            setAllComments(res.data.data.comment);
            console.log("fetch comment", res.data.data.comment)
        }
    }
    useEffect(() => {


        const fetchLike = async () => {
            const res = await GetProfile();
            if (res.status === 200) {
                const userId = res.data.data._id;
                // check if user already like this post
                const Liked = like.some((item) => item._id === userId);
                setIsLiked(Liked);
                console.log("is liked", isLiked)
            }


        }

        fetchLike();
        fetchComment();


    }, [isSend])

    const handleLike = async () => {
        const next = !isLiked;
        console.log("next", next)
        setIsLiked(next);
        try {
            if (next) {
                const res = await LikeStatus(_id)
                console.log(res)
            }
            else await UnLikeStatus(_id);
} catch (err) {
    setIsLiked(!next);
    console.error(err);
}
    };


const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMyComment(event.target.value);
};
const handleOpen = async () => {
    fetchComment();
    console.log("all comment", allComments)
    setOpen(true);
}

const handleSendComment = async () => {
    if (myComment === '') return;

    setIsSend(!isSend)
    
    const response = await CommentStatus(_id, myComment);

    setMyComment('');
    fetchComment();
    console.log(response)
}
const handleClose = async () => {

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
            <Box className='flex items-center gap-2'>
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
                    <Button onClick={() => handleLike(!isLiked)} variant={isLiked ? "contained" : "outlined"} color={isLiked ? `success` : 'info'} className="text-slate-900 border-slate-900 hover:bg-slate-200">Like</Button>
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
                        <Box className="flex justify-between items-center">
                            <Typography id="modal-modal-title" variant="h6" component="h2" className="text-slate-900">
                                Comment
                            </Typography>
                            <Box className="flex justify-between items-center">
                                <Button onClick={handleSendComment}>Send</Button>
                                <Button onClick={handleClose} variant='contained' color='error'>Close</Button>
                            </Box>
                        </Box>

                        <TextField onChange={handleCommentChange} value={myComment}  id="modal-modal-description" sx={{ mt: 2 }} fullWidth label="Your comment" variant="outlined" className="text-slate-900">
                        </TextField>

                        {/* all comments */}
                        <Box className="mt-2">
                            {/* list comments */}
                            {allComments && allComments.map((val, key) => (
                                <Box className="flex items-center gap-2 my-2" key={key}>
                                    <Avatar sx={{ bgcolor: deepOrange[500] }}></Avatar>
                                    <Typography sx={{ fontSize: 14 }} className="text-slate-900 font-bold">{val.content}</Typography>
                                </Box>
                            ))}

                        </Box>


                    </Box>
                </Modal>

            </Grid >
        </Box >
    </>
)
}

export default Status