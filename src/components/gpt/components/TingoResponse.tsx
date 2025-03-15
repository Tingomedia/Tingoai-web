import CodeBlock from "./replies/CodeBlock";

export default function TingoResponse({ response }: { response: any }) {
  switch (response.type) {
    case "code":
      return (
        <CodeBlock
          msg={response.msg}
          code={response.code}
          name={response.name}
        />
      );
  }
}
