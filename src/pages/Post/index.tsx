import { useContext } from "react";
import { PostTop } from "../../Components/PostTop";
import { IssuesContext } from "../../contexts/IssuesContext";
import { PostBody } from "./styles";
import ReactMarkdown from 'react-markdown';

export function Post() {
  const { issuePage } = useContext(IssuesContext)

  const { body } = issuePage;

  return (
    <>
      <PostTop />
      <PostBody>
        <ReactMarkdown children={body} />
      </PostBody>
    </>
  )
}