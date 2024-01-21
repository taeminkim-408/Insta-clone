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
    display: "flex",
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const LeftContent = styled("div")({
  flex: "0 0 50%",
});

const RightContent = styled("div")({
  flex: "0 0 50%",
  paddingLeft: "16px",
});

const UserInformation = styled("div")({
  display: "flex",
  alignItems: "center",
  marginBottom: "16px",
  fontWeight: "bold",
});

const UserImage = styled("img")({
  width: "32px",
  height: "32px",
  marginRight: "8px",
  borderRadius: "50%",
});

export default function PostDialog({ open, onClose, post }) {
  const [comments, setComments] = React.useState(post ? post.comments : []);
  const [newComment, setNewComment] = React.useState("");

  React.useEffect(() => {
    setComments(post ? post.comments : []);
  }, [post]);

  const addComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, { text: newComment, username: "User" }]);
      setNewComment("");
    }
  };

  const deleteComment = (commentIndex) => {
    const updatedComments = [...comments];
    updatedComments.splice(commentIndex, 1);
    setComments(updatedComments);
  };
  
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
        <LeftContent>
          <img src={post?.image} alt={post?.postText} style={{ maxWidth: "100%", height: "auto" }} />
          <p>{post?.postText}</p>
        </LeftContent>
        <RightContent>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>
                {comment.u_image}<span>{comment.username}</span> {comment.text}
                <Button onClick={() => deleteComment(index)}>삭제</Button>
              </li>
            ))}
          </ul>
        </RightContent>
      </DialogContent>

      <DialogActions style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingRight: "16px" }}>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="댓글 달기..."
          style={{ flex: "1", marginRight: "8px" }}
        />
        <Button onClick={addComment}>게시</Button>
      </DialogActions>

      </BootstrapDialog>
    </>
  );
}
