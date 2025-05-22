import { defineDocumentType, makeSource } from 'contentlayer2/source-files'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import GithubSlugger from "github-slugger"


export const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    description: { type: 'string', required: false },
  },
  computedFields: {
    slug: {
        type: "string",
        resolve: (doc) => `/${doc._raw.flattenedPath}`,
      },
      slugAsParams: {
        type: "string",
        resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
      },
      url: {type: "string", resolve: (doc) => `/${doc._raw.flattenedPath}`},
      // Ref:  https://yusuf.fyi/posts/contentlayer-table-of-contents/
      headings: {
        type: "json",
        resolve: async (doc) => {
          const regXHeader = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
          const slugger = new GithubSlugger()
          const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
              ({ groups }) => {
                const flag = groups?.flag;
                const content = groups?.content;
                return {
                  level: flag?.length,
                  text: content,
                  slug: content ? slugger.slug(content) : undefined
                };
              }
            );
            return headings;
          },
      }
      
  },
}))

export default makeSource({ contentDirPath: './src/content', documentTypes: [Doc], mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug]
}, })