import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import Layout from '@/components/Layout'
import { postFilePaths, POSTS_PATH } from '@/utils/mdxUtils'
import TopMenu from '@/components/TopMenu'
import { postTopics } from '@/utils/mdxUtils'
import Code from '@/components/Code'
import { arraysEqual } from '@/utils/arrayUtils'
import Head from 'next/head'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { getTitleAndDescription } from '@/utils/mdxUtils'
import Link from '@/components/MarkdownLink'
import rehypeSlug from 'rehype-slug'
import { h1Link, h2Link, h3Link, h4Link, h5Link, h6Link } from '@/components/HeaderLink'
import rehypeCitation from 'rehype-citation'
import remarkGfm from 'remark-gfm'
import jargon from '@/components/jargon'
import jargonDictionary from '@/utils/jargonDict'

const bibliography = "public/references.bib"

const components = {
    h1: h1Link,
    h2: h2Link,
    h3: h3Link,
    h4: h4Link,
    h5: h5Link,
    h6: h6Link,
    a: Link,
    code: Code
}

export default function PostPage({ source, frontMatter, postTopics}) {
    const pageTitle = `${frontMatter.title} - biomech.dev`
  return (
    <Layout>
      <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={frontMatter.description} />
      </Head>
      <TopMenu postTopics={postTopics} />
      <main>
        <MDXRemote {...source} components={components} />
      </main>
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
    for (const post of postFilePaths) {
        const slugArray = post.replace('.md', '').split('/')
            .map((part) => part.toLowerCase())
        if(arraysEqual(slugArray, params.slug)) {
    const postFilePath = path.join(POSTS_PATH, post)
  const source = fs.readFileSync(postFilePath)
  let { content } = matter(source)
    if (content.includes(' @') || content.includes('[@')) {
        content = content + '\n\n ## References \n\n'
    }
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkMath, remarkGfm],
      rehypePlugins: [
          [rehypeCitation, {bibliography, linkCitations: true, }],
          rehypeKatex,
          rehypeSlug,
          [jargon, {jargon: jargonDictionary(params.slug[params.slug.length - 1])}],
      ],
    },
  })
    const data = getTitleAndDescription(content)
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
        postTopics: postTopics(),
    },
  }
        }
    }
}

export const getStaticPaths = async () => {
    const paths = postFilePaths
    .map((path) => path.replace(/\.md?$/, ''))
    .map((slug) => slug.split('/'))
    .map((slug) => ({ params:
        { slug: slug.map((part) => part.toLowerCase())}
    }))

  return {
    paths,
    fallback: false,
  }
}

