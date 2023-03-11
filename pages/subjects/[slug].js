import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import Layout from '@/components/Layout'
import TopMenu from '@/components/TopMenu'
import { postTopics, postFilePaths, POSTS_PATH } from '@/utils/mdxUtils'
import Link from 'next/link'
import Head from 'next/head'
import { getTitleAndDescription } from '@/utils/mdxUtils'
import { slugify } from '@/utils/slugify'

export default function topicPage({ slug, posts, postTopics}) {
    const pageTitle = `${slug} - biomech.dev`
  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <TopMenu postTopics={postTopics} />
      <div className="post-header">
        <h1 className="title">{slug}</h1>
      <hr/>
      </div>
      <main>
      <dl>
      {Object.entries(posts).map(([title, data]) => (
          <div key={title} >
        <dt>
          <Link className="post-link" href={'/' + data.slug}> {title} </Link>
        </dt>
          <dd><span className="post-description">{data.description}</span></dd>
          </div>
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
        if (slugify(post.split('/')[0]) == params.slug) {
            if (slug == '') {
                slug = post.split('/')[0]
            }
            const source = fs.readFileSync(path.join(POSTS_PATH, post))
            const { content } = matter(source)
            const data = getTitleAndDescription(content)
            if (data.title) {
                posts[data.title] = {
                    description: data.description ?? '',
                    slug: post.split('/')[1].replace('.md', '').toLowerCase(),
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
       "/subjects/" + slugify(topic)
    ))
  return {
      paths,
    fallback: false,
}
}


