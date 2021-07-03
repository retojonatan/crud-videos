import React, { useEffect, useState } from "react";
import Video from "./Video";
import VideoItem from "./VideoItem";
import * as videoService from "./VideoService";

const VideoList = () => {
  const loadVideoList = async () => {
    const res = await videoService.getVideos();
    setVideos(res.data);
  };

  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    loadVideoList();
  }, []);
  return (
    <div>
      {videos.map((video) => {
        return <VideoItem video={video} />;
      })}
    </div>
  );
};

export default VideoList;
