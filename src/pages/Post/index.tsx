import { useContext } from "react";
import { PostTop } from "../../Components/PostTop";
import { IssuesContext } from "../../contexts/IssuesContext";
import { PostBody } from "./styles";

export function Post() {
  const { issuePage } = useContext(IssuesContext)

  const { body } = issuePage;

  return (
    <>
      <PostTop />
      <PostBody>
        <p>
          {body}
        </p>
      </PostBody>
    </>
  )
}