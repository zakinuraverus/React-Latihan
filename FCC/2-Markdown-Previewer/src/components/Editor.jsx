import { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { data } from "../data/markdown";

export default function Editor() {
  const [input, setInput] = useState(data);
  return (
    <div className="container mx-auto grid grid-cols-12 gap-2 pb-1">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="col-span-6 resize-none h-screen border rounded-md border-neutral-500 px-1"
        placeholder="Type here..."
      ></textarea>
      <section className="prose rounded-md col-span-6 border border-neutral-500 px-1 overflow-scroll h-screen">
        <Markdown remarkPlugins={[remarkGfm]} className="markdown">
          {input}
        </Markdown>
      </section>
    </div>
  );
}
