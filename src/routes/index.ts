interface Routing {
  [key: string]: string;
}

const r: Routing = {
  Home: "/",
  Characters: "/characters",
  Episodes: "/episodes",
  Locations: "/locations",
  My_Watch_List: "/my-watch-list",
};

export default r;
