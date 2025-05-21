import NextImage from "next/image";
import type {MDXComponents as MDXComponentsType} from "mdx/types";
import { LinkedHeading } from "./linked-heading";

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
  