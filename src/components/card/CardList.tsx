import { useEffect, useState } from "react";
import { api } from "../../service/api";
import { Album } from "../../types/album";
import { ComponentCard } from "./Card";

export const Cardist = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const albumsPerPage = 10;

  const loadAlbums = async () => {
    try {
      const response = await api.get("albums");
      setAlbums(response.data);
    } catch (error) {
      console.error("Failed to load albums:", error);
    }
  };

  useEffect(() => {
    loadAlbums();
  }, []);

  return (
    <div
      key="test"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "10px",
        paddingTop: "10px",
        paddingBottom: "10px",
      }}
    >
      {albums.map((album: Album, index) => (
        <ComponentCard
          key={`album-${index}`}
          id={album.id}
          title={album.title}
          userId={album.userId}
        />
      ))}
      {/* TODO: pagination */}
    </div>
  );
};
