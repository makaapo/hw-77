export interface MessageMutation {
  message: string;
  author: string;
  image: string | null,
}

export interface Message {
  id: string;
  message: string;
  author: string;
  image: string | null,
}