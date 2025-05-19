import { MDXContent } from "@/component/mdx-content";
import { allDocs } from "contentlayer2/generated";
import { notFound } from "next/navigation";

interface Params {
  slug: string[]
}
interface DocPageProps {
  params: Params;
}

export async function generateStaticParams(): Promise<DocPageProps["params"][]> {
  return allDocs.map((doc) => ({
    slug: doc.slugAsParams.split("/"), // ["components", "alert"]
  }));
}

async function getDocFromParams({params}: {params: Promise<DocPageProps["params"]>}) {
  const {slug} = await params;
  const slugPath = slug.join("/") || "";
  const doc = allDocs.find((doc) => doc.slugAsParams === slugPath);
  const currentRoute = {
    key: doc?._id,
    title: doc?.title,
    path: `/${doc?._raw?.sourceFilePath}`,
  };

  return {doc, currentRoute};
}

export default async function DocPage({params}: {params: Promise<DocPageProps["params"]>}) {
  const {doc} = await getDocFromParams({params});

  // If no document found, render 404
  if (!doc) {
    return notFound();
  }

  return (
    <div>
      <h1>{doc.title}</h1>
      <div>{doc.description}</div>
      <MDXContent code={doc.body.code} />
    </div>
  );
}