import React from 'react'
import { Paper, Typography } from '@material-ui/core'

const VideoDetail = ({ video }) => {
    if (!video) return <div>Loading...</div>
    console.log(video.id.videoId);

    const videoSrc = `https://www.youtube.com/embed/${video.id.videos}`
    return (
        <React.Fragment>
            <Paper elevation={6} style={{ height: '70%' }}>
                <iframe frameBorder="0" height="100%" width="100%" />
            </Paper>
            <Paper>
                <Typography variant="h4">{video.snippet.title}</Typography>
                <Typography variant="subtitle1">{video.snippet.channels}</Typography>
                <Typography variant="subtitle2">{video.snippet.description}</Typography>
            </Paper>
        </React.Fragment>
    )
}

export default VideoDetail
