import React, { ChangeEvent, FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Video from "./Video";
import * as videoService from "./VideoService";

const VideoForm = () => {
  const initialState = {
    title: "",
    url: "",
    description: "",
  };

  const [video, setVideo] = useState<Video>(initialState);

  type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

  const history = useHistory();

  const handleInputChange = (e: InputChange) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await videoService.createVideo(video);
    toast.success("New video added");
    history.push("/");
  };

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3>New Video</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="title"
                  placeholder="Add title for this video"
                  onChange={handleInputChange}
                  value={video.title}
                  autoFocus
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="url"
                  placeholder="https://something.com"
                  onChange={handleInputChange}
                  value={video.url}
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  rows={3}
                  name="description"
                  placeholder="Write a description for the video"
                  onChange={handleInputChange}
                  value={video.description}
                />
              </div>
              <button className="btn btn-primary">Create Video</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoForm;
