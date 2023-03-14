import React, { useState } from "react";
import styled from "@emotion/styled";
import { createsongStart } from "../songsSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const MainContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 20px;
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Heading = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin: 0;
  color: white;
`;
const Button = styled.button`
  background-color: #1db954;

  color: #fff;
  border: none;
  border-radius: 30px;
  padding: 5px 20px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #1ed760;
  }
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: px;
  color: white;
`;

const StyledInput = styled.input`
  margin-top: 20px;
  margin-right: 350px;
  height: 40px;
  width: 350px;
  border: none;
  color: black;
  border-radius: 4px;
  padding: 0 16px;

  font-size: 16px;
  background-color: #f4f4f4;
  transition: background-color 0.2s ease-in-out;

  &:focus {
    outline: none;
    background-color: #e0e0e0;
  }
`;
const HeadingF = styled.h1`
  margin-top: 25px;
  margin-right: 360px;
  margin-bottom: 15px;
  color: white;
  font-size: 24px;
  font-family: cursive;
  font-style: italic;
`;
const Message = styled.h1`
  margin-top: 7px;
  margin-right: 360px;
  margin-bottom: 10px;
  color: white;
  font-size: 18px;
  font-family: cursive;
  font-style: italic;
`;
const StyledButton = styled.button`
  align-self: center;
  background-color: #1db954;
  margin-top: 15px;
  width: 200px;
  color: black;
  margin-left: -180px;
  border: none;
  border-radius: 30px;
  padding: 5px 20px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #1ed760;
  }
`;
const SongImage = styled.img`
  width: 500px;
  height: 600px;
  object-fit: cover;
  border-radius: 10px;
  margin-left: 50px;
`;
const Form = () => {
  const dispatch = useDispatch();
  const [showMessage, setShowMessage] = useState();
  const handleCreate = (title, artist, genre, imgUrl) => {
    dispatch(createsongStart({ title, artist, genre, imgUrl }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let imgurl = e.target.imgUrl.value;
    if (imgurl.startsWith("https://")) {
      handleCreate(
        e.target.title.value,
        e.target.genre.value,
        e.target.artist.value,
        e.target.imgUrl.value
      );
      e.target.reset();
      setShowMessage("new song is added");
    } else {
      setShowMessage("check again the image url  ");
    }

    setTimeout(() => {
      setShowMessage("");
    }, 3000);
  };

  return (
    <div>
      <MainContainer>
        <HeaderContainer>
          <Heading>Add a new song to your list</Heading>

          <Button>
            {" "}
            <Link to={"/"} className="text-decoration-none text-black">
              {" "}
              Home
            </Link>
          </Button>
        </HeaderContainer>
      </MainContainer>
      <HeaderContainer>
        <SongImage
          src="https://media.istockphoto.com/id/1138180800/photo/black-wireless-headphones-isolated-on-a-black-background.jpg?s=612x612&w=0&k=20&c=Ug7Rwl2o5ev-x3t2nsdQvoJ23exuIuIyPGsKZisniA0="
          alt=""
        />

        <StyledForm onSubmit={handleSubmit}>
          <HeadingF>Insert your song information</HeadingF>
          <Message>{showMessage}</Message>

          <StyledInput type="text" name="title" required placeholder="Title" />

          <StyledInput
            type="txet"
            name="artist"
            required
            placeholder="Artist"
          />

          <StyledInput type="text" name="genre" required placeholder="Genre" />

          <StyledInput
            type="text"
            name="imgUrl"
            required
            placeholder="Image URl from somewhere online"
          />

          <StyledButton type="submit">Submit</StyledButton>
        </StyledForm>
      </HeaderContainer>
    </div>
  );
};

export default Form;
