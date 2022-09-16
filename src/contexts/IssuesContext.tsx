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
  loadIssue: () => Promise<void>;
  issuePage: issuePage;
}

interface IssuesProviderProps {
  children: ReactNode;
}

interface issuePage {
  title: string;
  body: string;
  html_url: string;
  user: {
    login: string;
  }
  created_at: string;
  comments: number;
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([])
  
  async function fetchIssues(query: string = "") {
    const response = await api.get(`/search/issues?q=${query}%20repo:guirecordon/github-blog`)

    setIssues(response.data.items);
  }

  const [issuePage, setIssuePage] = useState<issuePage>({} as issuePage)

  const issueId = 1;

  async function loadIssue() {
    const response = await api.get(`repos/guirecordon/github-blog/issues/${issueId}`)
    setIssuePage(response.data)
  }
  
  useEffect(() => {
    fetchIssues()
  }, [])


  return (
    <IssuesContext.Provider value={{ issues, fetchIssues, loadIssue, issuePage }} >
      {children}
    </IssuesContext.Provider>
  )
}