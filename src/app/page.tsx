"use client"
import React, {useEffect, useState} from 'react';
import styles from "./page.module.css";
import {
  List, ListItem, Card, CardContent, Typography, CardActionArea, Divider, Avatar, Box,
  CircularProgress, Button, Stack, IconButton
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { EditModal } from './components/EditModal';
import { DetailModal } from './components/DetailModal'
import {AIModal} from './components/AIModal';
import { Telegram } from '@mui/icons-material';


export type PostType = {
  id: number;
  title: string;
  body: string;
  date: string;
  time: string;
}

const initialPostData: PostType = {
  id: 0,
  title: '',
  body: '',
  date: '',
  time: ''
}

export default function Home() {

  const [posts, setPosts] = useState<PostType[]>([initialPostData])
  const [selectedPost, setSelectedPost] = useState<PostType>(initialPostData)
  const [open, setOpen] = useState(false)
  const [showAIModal, setShowAIModal] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [showDetailModal, setShowDetailModal] = useState(false)

  const getData = ()=> {
    setError('')
    setLoading(false)
    try{
      const data = JSON.parse(localStorage.getItem('posts') || '[]')
      if(data.length <= 0){
        setError('No Post Found. Click "Generate With AI" to Create a new Post')
      }else{
        setPosts(data)
        setLoading(false)
      }
    }catch (error) {
      console.error(error)
      setError("Network Error, please try again")
      setLoading(false)
    }
  }

  const handleOpen = () => setOpen(true);

  const handleEditClose = () => {
    setOpen(false)
    getData()
  }

  const handleEdit = (selectedPost: PostType) => {
    setSelectedPost(selectedPost)
    handleOpen()
  }

  const handleShowAIModal = () => {
    setShowAIModal(true)
  }

  const handleAIModalClose = () => {
    setShowAIModal(false)
    getData()
  }

  const handleDetailClose = () => {
    setShowDetailModal(false)
  }

  const createParagraphs = (text: string) => {
    return text.split('\n\n\n');
  }

  const handlePostSelected = (item: PostType)=> {
    setShowDetailModal(true)
    setSelectedPost(item)
  }

  useEffect(()=> {
    getData()
  },[])
  
  return (
    <main className={styles.main}>
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{padding: '0 1rem'}}>
        <Typography variant="h4" color="primary" sx={{fontWeight: 'bold'}}>AI BLOG</Typography>
        <Button variant="contained" endIcon={<Telegram />} onClick={handleShowAIModal}>
          Generate with AI 
        </Button>
      </Stack>
      { error ? (
          <Box sx={{ textAlign: 'center', marginTop: '40vh' }}>
            <Typography color={'error'}>{error}</Typography>
          </Box>
      ):(
          <List sx={{ width: '100%' }}>
              {loading ? (
                <Box sx={{ textAlign: 'center', marginTop: '40vh' }}>
                  <CircularProgress />
                </Box>
              ):(
                posts.map((item, idx)=> 
                <ListItem key={idx} alignItems="flex-start">
                <Card sx={{ width: '100%' }} onClick={()=>handlePostSelected(item)}>
                  <CardActionArea>
                    <CardContent sx={{padding: '30px 20px'}}>
                      <Stack direction="row" alignItems="center" gap={3}>
                        <Avatar 
                          sx={{
                            textTransform: 'capitalize', 
                            '@media (max-width: 600px)': {
                              display: 'none'
                            }
                          }} 
                          src="/static/images/avatar/1.jpg" />
                        <Stack width={1}>
                          <Typography sx={{textTransform: 'Capitalize'}} color="primary" variant="h5">
                            {item.title}
                          </Typography>
                          <Typography gutterBottom variant="subtitle2" color="text.secondary">
                            {`Posted on ${item.date} at ${item.time}`}  
                          </Typography>
                          <Divider/>
                          <Typography mt={2} variant="body1" sx={{whiteSpace: 'pre-line'}}>
                            {createParagraphs(item.body)}
                          </Typography>
                        </Stack>
                      </Stack>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <IconButton sx={{position: 'absolute', top: '15px', right:'20px'}} onClick={()=>handleEdit(item)}>
                  <EditIcon />
                </IconButton>
              </ListItem>
            )
          )}
        </List>
      )}
     <EditModal selectedPost={selectedPost} open={open} handleEditClose={handleEditClose}/>
     <AIModal showAIModal={showAIModal} handleAIModalClose={handleAIModalClose}/>
     <DetailModal showDetailModal={showDetailModal} handleDetailClose={handleDetailClose} selectedPost={selectedPost}/>
    </main>
  );
}
