export type InstagramImage = {
  id: string;
  src: string;
};

export type InstagramFeedProps = {
  username: string;
  images: InstagramImage[];
};