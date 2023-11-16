import { useState } from "react";
import { Album, PaginationOptions } from "types/album";
// import { api } from 'services/api';
import { ComponentCard } from "components/card/Card";
import { Pagination, Spin } from "antd";
import albumService from "services/album.service";
import { useQuery, keepPreviousData } from "@tanstack/react-query";

export const Cardist = () => {
  const [paginationOptions, setPaginationOptions] = useState<PaginationOptions>(
    {
      page: 0,
      limit: 20,
    }
  );

  const { data: albumsCount } = useQuery({
    queryKey: ["albumcounts"],
    queryFn: () => albumService.getAlbums(),
  });

  const { isLoading, data: albums } = useQuery({
    queryKey: ["albumsWithpaginations", paginationOptions],
    queryFn: () => albumService.getAlbumsWithPagination(paginationOptions),
    placeholderData: keepPreviousData,
  });

  if (isLoading) {
    return <Spin />;
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        {albums?.map((album: Album, index) => (
          <ComponentCard
            key={`album-${index}`}
            id={album.id}
            title={album.title}
            userId={album.userId}
          />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Pagination
          defaultCurrent={paginationOptions.page}
          onChange={(page) =>
            setPaginationOptions((prev) => ({
              ...prev,
              page: page,
            }))
          }
          total={
            Math.round(
              (albumsCount?.length ?? 100) / (paginationOptions.limit ?? 1)
            ) * 10
          }
          showSizeChanger={false}
        />
      </div>
    </>
  );
};
