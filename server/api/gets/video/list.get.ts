import { videoList } from "~~/server/data/video";

export default defineEventHandler(async (event) => {
  return videoList;
});
