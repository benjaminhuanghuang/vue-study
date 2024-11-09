
import type { IMenu } from "../../../models/index";

export const menus: IMenu[] = [
  {
    name: "在线音乐",
    children: [
      {
        name: "推荐",
        path: "discover",
      },
      {
        name: "Music",
        path: "music",
      },
      {
        name: "Video",
        path: "video",
      },
      {
        name: "DJ",
        path: "dj",
      },
    ],
  },
  {
    name: "我的音乐",
  },
];
