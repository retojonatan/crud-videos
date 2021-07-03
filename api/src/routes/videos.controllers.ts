import { RequestHandler } from "express";
import Video from "./video";

export const getVideos: RequestHandler = async (req, res) => {
  try {
    const videos = await Video.find();
    return res.json(videos);
  } catch (error) {
    return res.json(error);
  }
};

export const getVideo: RequestHandler = async (req, res) => {
  try {
    const videoFound = await Video.findById(req.params.id);
    if (!videoFound) {
      return res.status(204).json({ message: "no encontrado" });
    } else {
      return res.json(videoFound);
    }
  } catch (error) {
    return res.json(error);
  }
};

export const createVideos: RequestHandler = async (req, res) => {
  try {
    const videoFound = await Video.findOne({ url: req.body.url });
    if (videoFound) {
      return res.status(204).json({ message: "url exists" });
    } else {
      const video = new Video(req.body);
      const savedVideo = await video.save();
      return res.json(savedVideo);
    }
  } catch (error) {
    return res.json(error);
  }
};

export const updateVideos: RequestHandler = async (req, res) => {
  try {
    const videoUpdated = await Video.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!videoUpdated) return res.status(204).json();
    return res.json(videoUpdated);
  } catch (error) {
    return res.json(error);
  }
};

export const deleteVideos: RequestHandler = async (req, res) => {
  try {
    const videoDeleted = await Video.findByIdAndDelete(req.params.id);
    if (!videoDeleted) {
      return res.status(204).json();
    } else {
      return res.json(videoDeleted);
    }
  } catch (error) {
    return res.json(error);
  }
};
