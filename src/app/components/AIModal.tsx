import React, {useState, useEffect} from 'react';
import { Button, Typography, Stack, IconButton, FormControl, TextField, TextareaAutosize } from '@mui/material';
import { CloseOutlined, DoneOutlined, Telegram } from '@mui/icons-material';
import { StyledBackdrop , Modal, ModalContent } from './Modal'
import { PostType } from '../page'
import { generateBlogPost } from '../utils/api';
import { formatDate } from '../utils/utils'
import { LoadingDots } from './LoadingDots'
export const AIModal = ({ 
    showAIModal, 
    handleAIModalClose 
  }:{ 
    showAIModal: boolean, 
    handleAIModalClose: ()=> void
  }) => {
  
    const [title, setTitle] = useState<string>('')
    const [body, setBody] = useState<string>('')
    const [loadingText, setLoadingText] = useState(false);
    const [typingText, setTypingText] = useState('');
    const [generatedTextBox, setGeneratedTextBox] = useState(false)
    const [error, setError] = useState('')
  
    const createTypeEffect = () => {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= body.length) {
          setTypingText(body.substring(0, index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 0.1);
  
      return () => clearInterval(interval);
    }

    const handleClose = () => {
        handleAIModalClose()
        setTitle('')
        setBody('')
        setTypingText('')
        setGeneratedTextBox(false)
      }
  
    const saveGeneratedPost = () => {
      try {
        const existingPosts = JSON.parse(localStorage.getItem('posts') || '[]')
        const dateTime = formatDate()
        const newPost: PostType = { 
          id: existingPosts.length+ 1, 
          title, 
          body, 
          date: dateTime.date, 
          time: dateTime.time 
        };
        const updatedPosts = [newPost, ...existingPosts];
        localStorage.setItem('posts', JSON.stringify(updatedPosts))
        handleClose()
      } catch (error) {
        console.error(error);
      }
    }
  
    const generateNew = async () => {
      if(title === ""){ 
        setError('Title cannot be empty!')
        return
      }
      setGeneratedTextBox(true)
      setLoadingText(true)
      setError('')
      const request = {
          "user_input": title
        }
      const generatedContent = await generateBlogPost(request)
        if(generatedContent){
          setBody(generatedContent)
          setLoadingText(false)
        }else{
          setError("Network Error")
        }
    }
  
    useEffect(() => {
      createTypeEffect()
    }, [body]);
  
  
    return (
      <Modal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={showAIModal}
        onClose={handleClose}
        slots={{ backdrop: StyledBackdrop }}
      >
        <ModalContent sx={{ width: '100%', maxWidth: '800px' }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h5" color="primary">Generate New Post</Typography>
            <IconButton size="large" onClick={handleClose}>
              <CloseOutlined />
            </IconButton>
          </Stack>
          <FormControl>
            <TextField 
              label="Title"
              value={title}
              placeholder='Enter Topic here! e.g ("Climate Change", "Inflation", "Human Rights")'
              onChange={(e)=>setTitle(e.target.value)}
              sx={{
                  width:'100%', 
                  '& fieldset': {
                  borderColor: 'lightgray',
              }}}/>
          </FormControl>
          <Stack direction="row" justifyContent='space-between' spacing={2}>
            <Typography color="error">{error}</Typography>
            <Button variant="contained" endIcon={<Telegram />} onClick={generateNew}>
              Generate
            </Button>
          </Stack>
          { generatedTextBox && 
          <Stack direction="column" gap={1}>
            {loadingText ? (
            <LoadingDots /> 
            ):(
            <>
              <TextareaAutosize
                    minRows={5}
                    style={{ 
                      width: '100%', 
                      minHeight: '30px', 
                      maxHeight: '60vh',
                      border: '1px solid lightgray',
                      overflow: 'auto',
                      fontSize:'16px', lineHeight: '1.3', padding: '10px', borderRadius: '5px'}}
                      value={typingText}
                      onChange={(e)=>setBody(e.target.value)}
                  />
              <Stack direction="row" justifyContent='space-between' spacing={2}>
                <Typography color="secondary">{}</Typography>
                  <Button variant="contained" endIcon={<DoneOutlined />} onClick={saveGeneratedPost}>
                    Save
                  </Button>
              </Stack>
              </>
            )}
          </Stack>
          }
        </ModalContent>
      </Modal>
    )
  }

