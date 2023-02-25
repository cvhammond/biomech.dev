import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import Layout from '@/components/Layout'
import TopMenu from '@/components/TopMenu'
import { postTopics, postFilePaths, POSTS_PATH } from '@/utils/mdxUtils'
import Link from 'next/link'
import Head from 'next/head'

export default function topicPage({ slug, posts, postTopics}) {
  return (
    <Layout>
      <Head>
        <title>{slug} - biomech.dev</title>
      </Head>
      <TopMenu postTopics={postTopics} />
      <div className="post-header">
        <h1 className="title">{slug}</h1>
      <hr/>
      </div>
      <main>
      <dl>
      {Object.entries(posts).map(([title, data]) => (
          <>
        <dt key={title}>
          <Link className="post-link" href={data.slug}> {title} </Link>
        </dt>
          <dd><span className="post-description">{data.description}</span></dd>
          </>
        ))}
      </dl>
      </main>
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
    let posts = {}
    let slug = ''
    for (const post of postFilePaths) {
        if (post.split('/')[0].toLowerCase() == params.slug) {
            if (slug == '') {
                slug = post.split('/')[0]
            }
            const source = fs.readFileSync(path.join(POSTS_PATH, post))
            const { content, data } = matter(source)
            await serialize(content, {
                mdxOptions: {
                    remarkPlugins: [],
                    rehypePlugins: [],
                },
                scope: data,
            })
            if (data.title) {
                posts[data.title] = {
                    description: data.description ?? '',
                    slug: post.replace('.md', '').toLowerCase(),
                }
            }
        }
    }
        return {
            props: {
                slug,
                posts,
                postTopics: postTopics(),
            }
    }
}

export const getStaticPaths = async () => {
    const paths= postTopics().map((topic) => (
       "/subjects/" + topic.toLowerCase()
    ))
  return {
      paths,
    fallback: false,
}
}
