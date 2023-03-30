import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "maguju5vlzis",
    accessToken: "tmbA8_WSBIPO5nZF08zE2N0TYQ_h68NW5QHQqGhblXI",
    host: "preview.contentful.com"
  });

  const getPhotos = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "photos",
        select: "fields"
      });

      const sanitizedEntries = entries.items.map((item) => {
        const avatar = item.fields.avatar.fields;
        return {
          ...item.fields,
          avatar
        };
      });

      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching authors ${error}`);
    }
  };

  return { getPhotos };
};

export default useContentful;