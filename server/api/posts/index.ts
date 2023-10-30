import { posts } from "~/utils/data/getInitialPostsData";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  let data = null;

  data = {
    toJSON() {
      return posts.sort((a, b) =>
        b.date_gmt.toString().localeCompare(a.date_gmt.toString())
      );
    },
  };

  return data;
});