"use client";

import {useMDXComponent} from "next-contentlayer2/hooks";
import type {MDXComponents as MDXComponentsType} from "mdx/types";
import { MDXComponents } from "./mdx-components";



interface MDXContentProps {
  code: string;
} 

export function MDXContent({code}: MDXContentProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx prose"> {/* prose is plugin in tailwind that adds default properties back to all html elements like headings */}
      <Component components={MDXComponents as MDXComponentsType} />
    </div>
  );
}
