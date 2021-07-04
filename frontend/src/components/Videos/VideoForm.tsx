import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Video from "./Video";
import * as videoService from "./VideoService";

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Params {
  id: string;
}

const VideoForm = () => {
  const initialState = {
    title: "",
    url: "",
    description: "",
  };

  const [video, setVideo] = useState<Video>(initialState);
  const history = useHistory();
  const params = useParams<Params>();

  const getVideo = async (id: string) => {
    const res = await videoService.getVideo(id);
    const { title, description, url } = res.data;
    setVideo({ title, description, url });
  };

  const handleInputChange = (e: InputChange) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!params.id) {
      await videoService.createVideo(video);
      toast.success("New video added");
    } else {
      await videoService.updateVideo(params.id, video);
      toast.success("Video updated");
    }
    // setVideo(initialState);
    history.push("/");
  };

  useEffect(() => {
    if (params.id) getVideo(params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-body">
            <h3>New Video</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group my-2">
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
              <div className="form-group my-2">
                <input
                  className="form-control"
                  type="text"
                  name="url"
                  placeholder="https://something.com"
                  onChange={handleInputChange}
                  value={video.url}
                />
              </div>
              <div className="form-group my-2">
                <textarea
                  className="form-control"
                  rows={3}
                  name="description"
                  placeholder="Write a description for the video"
                  onChange={handleInputChange}
                  value={video.description}
                />
              </div>
              {params.id ? (
                <button className="btn btn-info">Update Video</button>
              ) : (
                <button className="btn btn-primary">Create Video</button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoForm;
