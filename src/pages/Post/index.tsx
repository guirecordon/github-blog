import { PostTop } from "../../Components/PostTop";
import { PostBody } from "./styles";

export function Post() {
  return (
    <>
      <PostTop />
      <PostBody>
        <p>
          <strong>Programming languages all have built-in data structures, but these often differ from one language to another.</strong> This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
        </p>
        <h2>Dynamic typing</h2>
        <p>
          JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
        </p>
      </PostBody>
    </>
  )
}