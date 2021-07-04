import React from "react";
import ReactPlayer from "react-player";
import { useHistory } from "react-router-dom";
import Video from "./Video";
import "./VideoItem.css";
import * as videoService from "./VideoService";

interface Props {
  video: Video;
  loadVideos: () => void;
}

const VideoItem = ({ video, loadVideos }: Props) => {
  const history = useHistory();

  const handleUpdate = (video: Video) => {
    history.push(`/update-video/${video._id}`, video);
  };

  const handleDelete = async (id: string) => {
    await videoService.deleteVideo(id);
    loadVideos();
  };

  return (
    <div className="col-md-4">
      <div className="card card-body video-card">
        <div className="d-flex justify-content-between">
          <h4 onClick={() => handleUpdate(video)}>{video.title}</h4>
          <span
            className="text-danger"
            onClick={() => video._id && handleDelete(video._id)}
          >
            x
          </span>
        </div>
        <p>{video.description}</p>
        <div className="ratio ratio-1x1">
          <ReactPlayer url={video.url} width="100%" height="100%" />
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
