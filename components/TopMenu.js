import Link from 'next/link'

const TopMenu = ({postTopics}) => {
    return (
        <div className="menu">
        <Link className="menubtn" href="/">biomech.dev</Link>
        <div className="topmenu">
        <button className="menubtn topicbtn">Subjects</button>
        <div className="topic-items">
        {postTopics.map((topic) => (
            <Link key={topic} href={`/subjects/${topic.toLowerCase()}`}>{topic}</Link>
        ))}
        </div>
        </div>
        </div>
    )
}

export default TopMenu
