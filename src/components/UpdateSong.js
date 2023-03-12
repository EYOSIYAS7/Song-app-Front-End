import React from "react";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updatesongStart } from "../songsSlice";

import { Link, useHistory } from "react-router-dom";
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
  margin-top: 0px;
  color: white;
`;
const Div = styled.div`
  margin-top: 25px;
  margin-right: 550px;
  margin-bottom: 15px;
  color: white;
  font-size: 26px;
  font-family: cursive;
  font-style: italic;
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
const UpdateForm = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const handleUpdate = (id, title, artist, genre) => {
    console.log("handle update is called ");
    dispatch(updatesongStart({ id, title, artist, genre }));
  };

  const handleSubmit = (e) => {
    console.log("handle submit is called");
    handleUpdate(
      id,
      e.target.title.value,
      e.target.genre.value,
      e.target.artist.value
    );
    e.target.reset();
    setTimeout(() => {
      window.location.reload(true);
      history.push("/");
    }, 1000);
  };

  return (
    <div>
      <MainContainer>
        <HeaderContainer>
          <Heading>Update song</Heading>

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
          <Div>update form</Div>
          <StyledInput
            type="text"
            name="title"
            //   value={formData.name}
            placeholder="Title"
            required
          />

          <StyledInput
            type="text"
            name="artist"
            //   value={formData.email}
            placeholder="Artists"
            required
          />

          <StyledInput
            type="text"
            name="genre"
            //   value={formData.message}
            placeholder="Genre"
            required
          />

          <StyledInput
            type="text"
            name="imgUrl"
            placeholder="Image Url"
            required
          />

          <StyledButton type="submit">Submit</StyledButton>
        </StyledForm>
      </HeaderContainer>
    </div>
  );
};

export default UpdateForm;
