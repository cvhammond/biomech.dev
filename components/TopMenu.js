import Link from 'next/link'
import { slugify } from '@/utils/slugify'

const TopMenu = ({postTopics}) => {
    return (
        <div className="menu">
        <Link className="menubtn" href="/"><samp>biomech.dev</samp></Link>
        <div className="topmenu">
        <button className="menubtn topicbtn">Subjects</button>
        <div className="topic-items">
        {postTopics.map((topic) => (
            <Link key={topic} href={`/subjects/${slugify(topic)}`}>{topic}</Link>
        ))}
        </div>
        </div>
        </div>
    )
}

export default TopMenu
