"use client"

import { IconHash } from "@tabler/icons-react";
import clsx from "clsx";
import Link from "next/link";
import { JSX } from "react";

export const virtualAnchorEncode = (text?: string) => {
    if (!text) return undefined;
  
    return text.toLowerCase().replace(/ /g, "-");
  };

  type LinkedHeadingProps = {
    as: keyof JSX.IntrinsicElements;
    linked?: boolean;
  } & React.HTMLAttributes<HTMLHeadingElement>;

const linkedLevels: Record<string, number> = {
    h1: 0,
    h2: 1,
    h3: 2,
    h4: 3,
  };

export const LinkedHeading: React.FC<LinkedHeadingProps> = ({as, linked = true, children, className, id: idProp }) => {
    const Component = as;
    const level = linkedLevels[as] ?? 1;
    const id = idProp ?? virtualAnchorEncode(children as string);
    
    return (
    <Component
        className={clsx({"linked-heading": linked}, linked === false ? {} : className)}
        data-id={id}
        data-level={level}
        data-name={children}
        id={id}
    >
        {linked ? <Link  href={`#${id}`} className="relative w-fit flex items-center text-inherit gap-10 group no-underline">
        {children}
        <span className="opacity-0 transition-opacity group-hover:opacity-100">
        <IconHash size={20} />
      </span>
        </Link>: <>{children}</>}
    </Component>)
}