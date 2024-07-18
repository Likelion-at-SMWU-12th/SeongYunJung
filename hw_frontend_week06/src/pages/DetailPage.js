import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const DetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const [detail, setDetail] = useState({});

  const getDetail = () => {
    axios
      .get(`http://127.0.0.1:8000/entries/${id}/`)
      .then((response) => {
        console.log(response);
        setDetail(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getRemove = () => {
    axios
      .delete(`http://127.0.0.1:8000/entries/${id}/`)
      .then((response) => {
        console.log(response);
        alert("방명록이 삭제되었습니다.");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert("삭제에 실패했습니다.");
      });
  };

  useEffect(() => {
    getDetail();
    // eslint-disable-next-line
  }, []);

  const [comments, setComments] = useState([]);
  const [commentContent, setCommentContent] = useState("");

  const onChange = (e) => {
    setCommentContent(e.target.value);
  };

  const onCreate = () => {
    setComments([
      ...comments,
      {
        id: comments.length + 1,
        content: commentContent,
      },
    ]);
    setCommentContent("");
  };

  return (
    <Wrapper>
      <Button txt={"방명록 작성하기"} onBtnClick={() => navigate("/write")} />
      <DetailWrapper>
        <DetailDiv>
          <Author>{detail.author}</Author>
          <Time>{detail.timestamp}</Time>
          <Comment>{detail.comment}</Comment>
          <BtnLine>
            <Button
              txt={"수정"}
              fontSize={"30px"}
              onBtnClick={() => navigate(`/modify/${id}/`)}
            />
            <Button txt={"삭제"} fontSize={"30px"} onBtnClick={getRemove} />
          </BtnLine>
        </DetailDiv>
      </DetailWrapper>
      <CommentForm>
        <InputComment
          placeholder="댓글을 남겨보세요!"
          value={commentContent}
          onChange={onChange}
        />
        <Button txt={"댓글달기"} onBtnClick={onCreate} />
      </CommentForm>
      <CommentList>
        {comments.map((comment) => (
          <CommentElement key={comment.id}>{comment.content}</CommentElement>
        ))}
      </CommentList>
    </Wrapper>
  );
};

export default DetailPage;

const Wrapper = styled.div`
  margin-top: 20px;
`;
const DetailWrapper = styled.div`
  width: calc(100% - 200px);
  height: fit-content;
  background-color: white;
  border-radius: 20px;
  padding: 100px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 50px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const DetailDiv = styled.div``;
const Author = styled.div`
  font-size: 50px;
  font-weight: 700;
`;
const Time = styled.div`
  color: #c8c8c8;
  font-weight: 600;
  font-size: 30px;
`;
const Comment = styled.div`
  font-size: 40px;
  font-weight: 700;
  margin: 50px 0;
`;
const BtnLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 20px;
`;

const CommentForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InputComment = styled.input`
  border: none;
  outline: none;
  background-color: white;
  padding: 10px 30px;
  border-radius: 15px;
  width: 1000px;
  height: 40px;
  font-size: 18px;
  font-weight: 700;
  margin: 30px 20px 30px 0;
  &::placeholder {
    color: #acacac;
    font-weight: 700;
  }
`;
const CommentList = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const CommentElement = styled.div``;
