import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { useNavigate, useParams } from "react-router-dom";

const ModifyPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/entries/${id}/`)
      .then((response) => {
        const initValue = response.data;
        setAuthor(initValue.author);
        setComment(initValue.comment);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const onChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const onChangeComment = (e) => {
    setComment(e.target.value);
  };

  const modifyComment = () => {
    axios
      .put(`http://127.0.0.1:8000/entries/${id}/`, {
        author: author,
        comment: comment,
      })
      .then((response) => {
        console.log(response);
        alert("수정이 완료되었습니다.");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert("수정에 실패했습니다.");
      });
  };

  return (
    <Wrapper>
      <Title>방명록 수정하기</Title>
      <InputTitle>이름</InputTitle>
      <StyledInput value={author} onChange={onChangeAuthor} />
      <InputTitle>내용</InputTitle>
      <StyledTxtarea value={comment} onChange={onChangeComment} />
      <BtnDiv>
        <Button txt={"수정하기"} onBtnClick={modifyComment} />
      </BtnDiv>
    </Wrapper>
  );
};

export default ModifyPage;

const Wrapper = styled.div`
  margin-top: 50px;
  //padding: 0 100px 0 0;
`;

const Title = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  padding: 10px 20px;
  border-radius: 15px;
  color: white;
  /* text-align: center; */
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const InputTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
`;
const StyledInput = styled.input`
  border: none;
  outline: none;
  background-color: white;
  padding: 10px 30px;
  border-radius: 15px;
  width: 300px;
  height: 50px;
  font-size: 18px;
  font-weight: 700;
  margin: 10px 0 30px 0;
  &::placeholder {
    color: #acacac;
    font-weight: 700;
  }
`;
const StyledTxtarea = styled.textarea`
  border: none;
  outline: none;
  width: calc(100% - 60px);
  height: 200px;
  background-color: white;
  padding: 30px;
  border-radius: 15px;
  font-size: 18px;
  font-weight: 700;
  margin-top: 10px;
  resize: none;
  &::placeholder {
    color: #acacac;
    font-weight: 700;
  }
`;
const BtnDiv = styled.div`
  margin-top: 50px;
  display: flex;
  > Button {
    margin-left: auto;
  }
`;
