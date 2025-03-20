export interface Apidata {
  _id: string;
  _createdAt: string;
  title: string;
  description: string;
  slug?: {
      current: string;
  }
  image: {
  asset: {
      url: string;
      };
  };
  position?: number;
}