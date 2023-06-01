import {useCallback, useEffect, useState} from "react";
import Button from "../../common/components/Buttons/Button/Button";

const Post = ({id,title,selftext,media}) => {
    return (
        <div>
            <p>{id}</p>
            <p>{title}</p>
            <p>{selftext}</p>
            <p>{media}</p>
        </div>
    )
};

const Posts = () => {
    const [post,setPost] = useState({});


    useEffect( () => {
        fetchData(setPost).catch(console.error);
    },[])

    const getPosts = () => {
        //fetchData().catch(console.error)
    };

    return (
        <>
            <Post id={post.id} title={post.title} selftext={post.selftext} media={post.media} />
            <Button onClick={getPosts}>Random</Button>
        </>
    )
};

const fetchData = async (setterFunction) => {

    const url = `https://api.reddit.com/api/info/?id=t3_${"c93rdt"}`
    const headers = {};
    const response = await fetch(url, {headers});
    const json = await response.json()
    const postData = json.data.children[0].data
    //postData.map(post => finalData.push(postData[post]))
    // json.map(post => finalData.push(...(json[post].data.children)))
    console.log(postData)
    setterFunction(postData)
}

export default Posts;