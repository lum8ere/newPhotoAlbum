import { Avatar, Card } from "antd";
import { useNavigate } from "react-router-dom";
import { Album } from "../../types/album";
import { api } from "../../service/api";
import { useEffect, useState } from "react";
import { UserType } from "../../types/user";

const { Meta } = Card;

export const ComponentCard = ({ id, title, userId }: Album) => {
  const [user, setUser] = useState<UserType>();
  const [lastPicture] = useState<string>();
  const navigate = useNavigate();

  const handleOpenAlbum = () => {
    navigate(`/album/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await api.get(`users/${userId}`);
        // const pictureData = await api.get(`photos?albumId=${id}`);

        setUser(userData.data);
        // setLastPicture(pictureData.data[pictureData.data.length - 1]);
      } catch (error) {
        console.error("Failed to load user:", error);
      }
    };

    fetchData();
    console.log("Fetching");
  }, [userId]);

  return (
    <Card
      key={`card-${id}`}
      style={{ width: 300 }}
      cover={<img alt="example" src={lastPicture} />}
      hoverable
      onClick={() => handleOpenAlbum}
    >
      <Meta
        avatar={
          <Avatar>
            {user && user.email ? user.name[0].toUpperCase() : null}
          </Avatar>
        }
        title={title}
      />
    </Card>
  );
};
