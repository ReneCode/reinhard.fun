import { ContentfulClientApi, createClient, EntryCollection } from "contentful";
import { PostType } from "../types/post";

export class Cms {
  client: ContentfulClientApi;
  constructor() {
    this.client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID ?? "",
      accessToken: process.env.CONTENTFUL_DELIVERTY_TOKEN ?? "",
    });
  }

  public getEntries = async () => {
    const response = await this.client.getEntries<PostType>();
    const items = response.items.map((item) => {
      return {
        slug: item.fields.slug,
        title: item.fields.title,
        date: item.fields.date,
        content: item.fields.content,
      };
    });
    return items.sort((itemA, itemB) => {
      const dtA = Date.parse(itemA.date);
      const dtB = Date.parse(itemB.date);
      return dtA - dtB;
    });
  };

  public getEntry = async (slug: string) => {
    const posts = await this.getEntries();
    return posts.find((post) => post.slug === slug);
  };
}
