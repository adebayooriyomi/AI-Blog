import React from 'react';
import { Divider, Typography, Stack, IconButton } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';
import { StyledBackdrop , Modal, ModalContent } from './Modal'
import { PostType } from '../page'

export const DetailModal = ({
    showDetailModal, 
    handleDetailClose, 
    selectedPost
}: {
    showDetailModal: boolean; 
    handleDetailClose: ()=>void; 
    selectedPost: PostType;
}) => {

    return(
        <Modal
            aria-labelledby="unstyled-modal-title"
            aria-describedby="unstyled-modal-description"
            open={showDetailModal}
            onClose={handleDetailClose}
            slots={{ backdrop: StyledBackdrop }}
        >
        <ModalContent sx={{ width: '100%', maxWidth: '1000px', padding:'50px', height: '90vh' }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Stack>
                <Typography variant="h4" color="primary">{selectedPost.title}</Typography>
                <Typography variant="subtitle2" color="text.secondary"> {`Posted on ${selectedPost.date} at ${selectedPost.time}`}  </Typography>
            </Stack>
            <IconButton size="large" onClick={handleDetailClose}>
                <CloseOutlined />
            </IconButton>
            </Stack>
            <Divider />
            <Typography sx={{whiteSpace: 'pre-line', overflowY: 'auto', padding: '10px 0'}}>{selectedPost.body}</Typography>
        </ModalContent>
        </Modal>
    )
} 