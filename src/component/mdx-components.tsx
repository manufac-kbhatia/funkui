import NextImage from "next/image";
import type {MDXComponents as MDXComponentsType} from "mdx/types";
import { LinkedHeading } from "./linked-heading";

// Ref: https://contentlayer.dev/docs/sources/files/mdx-d747e46d#custom-mdx-components
// 1. Make components globally available in MDX without importing them in every file
// 2. Override <h1>–<h4> in MDX to use custom LinkedHeading with optional anchor links
export const MDXComponents: MDXComponentsType = {
    /**
     * Next.js components
     */
    NextImage,

    // Headings
      h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <LinkedHeading as="h1" linked={false} {...props} />
      ),
      h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <LinkedHeading as="h2" {...props} />,
      h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => <LinkedHeading as="h3" {...props} />,
      h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => <LinkedHeading as="h4" {...props} />,

  } ;
  