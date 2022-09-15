import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Issue {
  title: string;
  body: string;
  number: number;
  updated_at: string;
}

interface IssuesContextType {
  issues: Issue[]
  fetchIssues: (query?: string) => Promise<void>;
}

interface IssuesProviderProps {
  children: ReactNode;
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([])
  
  async function fetchIssues(query: string = "") {
    const response = await api.get(`/search/issues?q=${query}%20repo:guirecordon/github-blog`)

    setIssues(response.data.items);
  }
  
  useEffect(() => {
    fetchIssues()
  }, [])


  return (
    <IssuesContext.Provider value={{ issues, fetchIssues }} >
      {children}
    </IssuesContext.Provider>
  )
}