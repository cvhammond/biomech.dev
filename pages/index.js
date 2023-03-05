import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import path from 'path'
import Layout from '../components/Layout'
import { postFilePaths, POSTS_PATH } from '../utils/mdxUtils'
import { postTopics } from '../utils/mdxUtils'
import TopMenu from '../components/TopMenu'
import Head from 'next/head'
import { getTitleAndDescription } from '../utils/mdxUtils'

export default function Index({ posts, postTopics }) {
  return (
    <Layout>
      <Head>
        <title>biomech.dev - Information about biomechanics software</title>
      </Head>
      <TopMenu postTopics={postTopics}/>
      <div className="post-header">
        <h1 className="title"><samp>biomech.dev</samp></h1>
          <p className="description">Information about biomechanics software</p>
      <hr/>
      </div>
      <main>
      {postTopics.map((topic) => (
          <div key={topic} className="topic-button-container">
          <Link href={`/subjects/${topic.toLowerCase()}`}>
          <button className="topic-button" >
          {topic}
          </button>
          </Link>
          </div>
        ))}
      <dl>
      {Object.values(posts).map((post) => (
            <div key={post.filePath}>
          <dt>
            <Link
                href={`/${post.filePath.replace(/\.md?$/, '').toLowerCase()}`}
            >
              {post.data.title}
            </Link>
          </dt>
            <dd><span className="post-description">{post.data.description}</span></dd>
            </div>
        ))}
      </dl>
      </main>
    </Layout>
  )
}

export function getStaticProps() {
    let posts = {}
    for (const post of postFilePaths) {
        const source = fs.readFileSync(path.join(POSTS_PATH, post))
        const { content } = matter(source)
        const data = getTitleAndDescription(content)
        posts[post] = { data, filePath: post}
    }
  return { props: { posts, postTopics: postTopics()} }
}

