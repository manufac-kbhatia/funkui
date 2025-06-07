"use client";

import {useMDXComponent} from "next-contentlayer2/hooks";
import type {MDXComponents as MDXComponentsType} from "mdx/types";
import { MDXComponents } from "./mdx-components";

interface MDXContentProps {
  code: string;
} 

export function MDXContent({code}: MDXContentProps) {
  // Ref: https://contentlayer.dev/docs/reference/next-contentlayer-e6e7eb3a#usemdxcomponent
  // Parse the MDX file via the useMDXComponent hook.
  const Component = useMDXComponent(code);

  return (
    <div className="mdx prose"> {/* prose is plugin in tailwind that adds default properties back to all html elements like headings */}
      <Component components={MDXComponents as MDXComponentsType} /> {/* <= Include your custom MDX components here */}
    </div>
  );
}
