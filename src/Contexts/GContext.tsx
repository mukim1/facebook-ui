import React, { useState } from "react";
import { createContext } from "react";
import { Post } from "../components/Types/Post";
import data from "../Data/posts.json";

export const Context = createContext<ContextProps | null>({} as ContextProps);
export const useContext = () => React.useContext(Context) as ContextProps;

const GContext = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState(data.posts);
  const values = { posts, setPosts };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default GContext;

interface ContextProps {
  posts: Post[];
  setPosts: any;
}
