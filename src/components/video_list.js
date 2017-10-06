import React, { Component } from 'react';
import VideoListItem from './video_list_item';


const VideoList = (props) => {
    
    const videoItems = props.videos.map((video) => {
        return <VideoListItem  key={video.etag} video={video} />
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

/*class VideoList extends Component {
    constructor(props) {
        super(props);

        console.log(props);

        this.state = {
            videos: props.videos
        };
    }
    
    render() {
        return (
            <ul className="col-md-4 list-group">
                { this.state.videos.length }
            </ul>
        );
        
    }
}*/

export default VideoList;