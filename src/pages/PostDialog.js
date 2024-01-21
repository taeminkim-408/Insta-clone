import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function PostDialog({ open, onClose, post }) {
  const [comments, setComments] = React.useState([]);

  const addComment = (newComment) => {
    setComments([...comments, { text: newComment, username: "User" }]);
  };

  const deleteComment = (commentIndex) => {
    const updatedComments = [...comments];
    updatedComments.splice(commentIndex, 1);
    setComments(updatedComments);
  };

  const editComment = (commentIndex, editedComment) => {
    const updatedComments = [...comments];
    updatedComments[commentIndex].text = editedComment;
    setComments(updatedComments);
  };
//
  return (
    <>
      <BootstrapDialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="md"
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          <div>
            <span>{post?.username}</span>
          </div>
        </DialogTitle>

        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent dividers>
          <img src={post?.image} alt={post?.postText} style={{ maxWidth: "100%", height: "auto" }} />
          <p>{post?.postText}</p>

          <ul>
            {comments.map((comment, index) => (
              <li key={index}>
                <span>{comment.username}:</span> {comment.text}
                <Button onClick={() => deleteComment(index)}>삭제</Button>
                <Button onClick={() => editComment(index, prompt("댓글 수정", comment.text))}>수정</Button>
              </li>
            ))}
          </ul>
        </DialogContent>

        <DialogActions>
          <Button autoFocus onClick={onClose}>
            닫기
          </Button>
          <Button onClick={() => addComment(prompt("댓글 추가"))}>
            댓글 달기...
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}
