type Theme = "news" | "people" | "other" | "sport" | "hobbies";

export interface IPost {
  idPost: string;
  info: string;
  theme: Theme;
  timestamp: number;
  title: string;
  userId: string;
  userName: string;
  visible: boolean;
}

export interface IPostUpdate {
  title: string;
  theme: string;
  visible: boolean;
  info: string;
  userName: string | undefined;
  userId: string | undefined;
  timestamp: {
    ".sv"?: string;
  };
  idPost: string | null;
}
