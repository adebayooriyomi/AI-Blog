import React, { useEffect, useState } from 'react';
import { 
  TextField,
  TextareaAutosize,
  Modal as BaseModal,
  FormControl,
  Divider,
  Typography,
  IconButton,
  Button,
  Stack
} from '@mui/material';
import { PostType } from '../page';
import { CloseOutlined, DoneOutlined, Close, Delete } from '@mui/icons-material';
import { Modal, ModalContent, StyledBackdrop } from './Modal'


export const EditModal = ({selectedPost, showEditModal, handleEditClose}:{selectedPost: PostType, showEditModal: boolean, handleEditClose: ()=> void}) => {

  const [title, setTitle] = useState<string>('')
  const [body, setBody] = useState<string>('')
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const handleSave = async () => {

    const existingPosts = JSON.parse(localStorage.getItem('posts') || '[]');
    const postIndex = existingPosts.findIndex((post: PostType) => post.id === selectedPost.id);
    if (postIndex !== -1) {
      existingPosts[postIndex].title = title;
      existingPosts[postIndex].body = body;
      localStorage.setItem('posts', JSON.stringify(existingPosts));
      handleEditClose()
    }
  }

  const handleDeleteClose = () => {
    setShowDeleteModal(!showDeleteModal)
    handleEditClose()
  }


  useEffect(()=> {
    setTitle(selectedPost.title)
    setBody(selectedPost.body)
  },[selectedPost.title, selectedPost.body])
    
    return (
      <>
        <Modal
          aria-labelledby="unstyled-modal-title"
          aria-describedby="unstyled-modal-description"
          open={showEditModal}
          onClose={handleEditClose}
          slots={{ backdrop: StyledBackdrop }}
        >
          <ModalContent sx={{ width: '100%', maxWidth: '800px' }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography variant={'h5'} color="primary">Edit Post</Typography>
              <IconButton size="large" onClick={handleEditClose}>
                <CloseOutlined />
              </IconButton>
            </Stack>
            <FormControl>
              <TextField 
                label="Title"
                value={title}
                onChange={(e)=> setTitle(e.target.value)} 
                sx={{
                    width:'100%', 
                    '& fieldset': {
                    borderColor: 'lightgray',
                }}}/>
              <TextareaAutosize
                minRows={5}
                style={{ 
                  width: '100%', 
                  minHeight: '30px', 
                  maxHeight: '60vh',
                  overflow: 'auto',
                  border: '1px solid lightgray',
                  fontSize:'16px', lineHeight: '1.3', padding: '10px', borderRadius: '5px', marginTop: '10px'}}
                  value={body}
                  onChange={(e)=>setBody(e.target.value)}
              />
            </FormControl>
            <Stack direction="row" justifyContent='space-between' spacing={2}>
              <Button variant="outlined" color="error" startIcon={<Delete />} onClick={()=>setShowDeleteModal(true)}>
                Delete
              </Button>
              <Button variant="contained" endIcon={<DoneOutlined />} onClick={handleSave}>
                Save
              </Button>
            </Stack>
          </ModalContent>
        </Modal>
        <DeleteModal selectedPost={selectedPost} showDeleteModal={showDeleteModal} handleDeleteClose={handleDeleteClose} />
      </>
    )
}

const DeleteModal = ({selectedPost, showDeleteModal, handleDeleteClose}:{selectedPost: PostType, showDeleteModal: boolean, handleDeleteClose: ()=> void}) => {

  const deletePost = async ()=> {
      const existingPosts = JSON.parse(localStorage.getItem('posts') || '[]');
      const updatedPosts = existingPosts.filter((post: PostType) => post.id !== selectedPost.id);
      localStorage.setItem('posts', JSON.stringify(updatedPosts));
      handleDeleteClose()
  }

  return(
    <Modal
      aria-labelledby="unstyled-modal-title"
      aria-describedby="unstyled-modal-description"
      open={showDeleteModal}
      onClose={handleDeleteClose}
      slots={{ backdrop: StyledBackdrop }}
    >
    <ModalContent sx={{ width: '100%', maxWidth: '400px' }}>
    <h3>Delete Post</h3>
    <Divider/>
     <Typography p={1} align={'center'}>Are you sure you want to delete<br/> <b>"{selectedPost.title}"</b>?</Typography>
     <Divider/>
     <Stack direction={'row'} justifyContent={'space-between'}>
        <Button variant='outlined' endIcon={<Close />} onClick={handleDeleteClose}>
          No
        </Button>
        <Button variant="outlined" color="error" endIcon={<DoneOutlined/>} onClick={deletePost}>
          Yes
        </Button>
     </Stack>
    </ModalContent>
  </Modal>
  )
}
