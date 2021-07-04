import React, { useEffect, useState } from "react";
import Video from "./Video";
import VideoItem from "./VideoItem";
import * as videoService from "./VideoService";

const VideoList = () => {
  const loadVideoList = async () => {
    const res = await videoService.getVideos();
    const sortedVideos = res.data
      .map((video) => {
        return {
          ...video,
          createdAt: video.createdAt ? new Date(video.createdAt) : new Date(),
          updatedAt: video.updatedAt ? new Date(video.updatedAt) : new Date(),
        };
      })
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    setVideos(sortedVideos);
  };

  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    loadVideoList();
  }, []);

  return (
    <div className="row">
      {videos.map((video) => {
        return (
          <VideoItem video={video} key={video._id} loadVideos={loadVideoList} />
        );
      })}
    </div>
  );
};

export default VideoList;
