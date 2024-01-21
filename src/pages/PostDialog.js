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
  return (
    <>
      {/* 스타일드 다이얼로그 컴포넌트 */}
      <BootstrapDialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        {/* 다이얼로그의 제목 */}
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {post?.postText}
        </DialogTitle>

        {/* 다이얼로그 상단의 닫기 버튼 */}
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

        {/* 다이얼로그 내용 */}
        <DialogContent dividers>
          {/* 포스트의 이미지 표시 */}
          <img
            src={post?.image}
            alt={post?.postText}
            style={{ width: "100%" }}
          />
        </DialogContent>

        {/* 다이얼로그 하단의 액션 버튼 */}
        <DialogActions>
          <Button autoFocus onClick={onClose}>
            확인
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}
