import { createContext, ReactNode, useEffect, useState } from "react";

interface Issue {
  title?: string;
  body?: string;
  number?: number;
  updated_at?: string;
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
    let url = new URL(`https://api.github.com/search/issues?q=repo:guirecordon/github-blog%20${query}`)

    const response = await fetch(url);
    const data = await response.json();

    const filteredData = data.items;

    console.log(filteredData)

    setIssues(filteredData);
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