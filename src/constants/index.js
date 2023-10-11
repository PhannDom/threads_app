export const sidebarLinks = [
  {
    imgURL: "/assets/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/search.svg",
    route: "/search",
    label: "Search",
  },
  {
    imgURL: "/assets/heart.svg",
    route: "/activity",
    label: "Activity",
  },
  {
    imgURL: "/assets/create.svg",
    route: "/create-thread",
    label: "Create Thread",
  },
  {
    imgURL: "/assets/community.svg",
    route: "/communities",
    label: "Communities",
  },
  {
    imgURL: "/assets/user.svg",
    route: "/profile",
    label: "Profile",
  },
];

export const profileTabs = [
  { id: 0, value: "threads", label: "Threads", icon: "/assets/reply.svg" },
  { id: 1, value: "replies", label: "Replies", icon: "/assets/members.svg" },
  { id: 2, value: "tagged", label: "Tagged", icon: "/assets/tag.svg" },
];

export const communityTabs = [
  { id: 0, value: "threads", label: "Threads", icon: "/assets/reply.svg" },
  { id: 1, value: "members", label: "Members", icon: "/assets/members.svg" },
  { id: 2, value: "requests", label: "Requests", icon: "/assets/request.svg" },
];
