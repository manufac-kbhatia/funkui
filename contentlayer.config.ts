import { defineDocumentType, makeSource } from 'contentlayer2/source-files'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

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
  },
}))

export default makeSource({ contentDirPath: './src/content', documentTypes: [Doc], mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug]
}, })