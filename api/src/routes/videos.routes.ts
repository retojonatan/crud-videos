import { Router } from "express";
import * as videoCtrl from "./videos.controllers";
const router = Router();

router.post("/videos", videoCtrl.createVideos);
router.get("/videos", videoCtrl.getVideos);
router.get("/videos/:id", videoCtrl.getVideo);
router.put("/videos/:id", videoCtrl.updateVideos);
router.delete("/videos/:id", videoCtrl.deleteVideos);

export default router;
