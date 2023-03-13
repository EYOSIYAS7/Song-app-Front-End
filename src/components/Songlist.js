import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { getsongsStart, deletesongStart } from "../songsSlice";
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
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
const UpdateBtn = styled.button`
  background-color: rgb(167, 167, 167);

  color: black;
  border: none;
  border-radius: 30px;
  padding: 5px 20px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: rgb(107, 107, 107);
  }
`;
const DeleteBtn = styled.button`
  display: inline-block;
  background-color: rgb(167, 21, 21);
  color: #fff;
  border: none;
  margin-left: 5px;
  border-radius: 30px;
  padding: 5px 10px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: red;
  }
`;
const SongsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  grid-gap: 20px;
`;

const SongItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 390px;
  padding: 20px;
  background-color: #282828;
  color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;
const Div = styled.div`
  margin-top: 25px;
  color: white;
`;
const SongImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 10px;
`;

const SongTitle = styled.h3`
  margin: 10px 0 5px 0;
  font-size: 18px;
  font-weight: 700;
`;

const SongArtist = styled.p`
  margin: 5px;
  font-size: 14px;
`;

const SongList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const songs = useSelector((state) => state.songs.songs);
  const loading = useSelector((state) => state.songs.loading);
  const error = useSelector((state) => state.songs.error);

  useEffect(() => {
    dispatch(getsongsStart());
  }, [dispatch]);

  if (loading) {
    return <Div>Loading...</Div>;
  }

  if (error) {
    return <Div>Error: {error}</Div>;
  }
  const handleDelete = (id) => {
    console.log("handle delete is called");
    dispatch(deletesongStart(id));
    setTimeout(() => {
      window.location.reload(true);
      history.push("/");
    }, 1000);
  };
  return (
    <MainContainer>
      <HeaderContainer>
        <Heading>List of your songs</Heading>

        <Button>
          {" "}
          <Link to={"/add"} className="text-decoration-none text-black">
            {" "}
            Add new song
          </Link>
        </Button>
      </HeaderContainer>
      <SongsContainer>
        {songs.map((song) => (
          <SongItem key={song._id}>
            <SongImage src={song.imgUrl} alt={song.title} />
            <SongTitle>{song.title}</SongTitle>
            <SongArtist>{song.artist}</SongArtist>
            <SongArtist>{song.genre}</SongArtist>

            <ButtonContainer>
              <UpdateBtn>
                {" "}
                <Link
                  to={`/update/${song._id}`}
                  className="text-decoration-none text-black"
                >
                  update
                </Link>{" "}
              </UpdateBtn>
              <DeleteBtn onClick={() => handleDelete(song._id)}>
                {" "}
                delete
              </DeleteBtn>
            </ButtonContainer>
          </SongItem>
        ))}
      </SongsContainer>
    </MainContainer>
  );
};

export default SongList;
