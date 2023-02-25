import fs from 'fs'
import path from 'path'

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), 'posts/')

function walkSync (dir, filelist = []) {
    fs.readdirSync(dir).forEach(file => {
        const dirFile = path.join(dir, file);
        try {
            filelist = walkSync(dirFile, filelist);
        }
        catch (err) {
            if (err.code === 'ENOTDIR' || err.code === 'EBUSY') filelist = [...filelist, dirFile];
            else throw err;
        }
    });
    return filelist.filter(file => file.endsWith('.md')).map(file => file.replace(POSTS_PATH, ''));
}

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = walkSync(POSTS_PATH)

export const postTopics = () => {
    const topics = postFilePaths.map((path) => {
    const topic = path.split('/')[0]
    return topic
    })
    return [...new Set(topics.filter((topic) => !topic.endsWith('.md')))]
}
