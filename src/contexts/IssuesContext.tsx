import { createContext, ReactNode, useEffect, useState } from "react";

interface Issue {
  title: string;
  body: string;
  number: number;
  updated_at: string;
}

interface IssuesContextType {
  issues: Issue[]
}

interface IssuesProviderProps {
  children: ReactNode;
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([])
  
  async function loadIssues() {
    const response = await fetch("https://api.github.com/repos/guirecordon/github-blog/issues");
    const data = await response.json()

    setIssues(data);
  }
  
  useEffect(() => {
    loadIssues()
  }, [])


  return (
    <IssuesContext.Provider value={{ issues }} >
      {children}
    </IssuesContext.Provider>
  )
}