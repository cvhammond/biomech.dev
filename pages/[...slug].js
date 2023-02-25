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

const components = {
    code: Code
}

export default function PostPage({ source, frontMatter, postTopics}) {
  return (
    <Layout>
      <Head>
      <title>{frontMatter.title} - biomech.dev</title>
      </Head>
      <TopMenu postTopics={postTopics} />
      <div className="post-header">
        <h1 className="title">{frontMatter.title}</h1>
        {frontMatter.description && (
          <p className="description">{frontMatter.description}</p>
        )}
      <hr/>
      </div>
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
  const { content, data } = matter(source)
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  })
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

