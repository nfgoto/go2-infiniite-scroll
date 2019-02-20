import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';

import Image from './image';

export class Images extends Component {
    state = {
        images: [],
        count: 30,
        start: 1
    }

    async componentDidMount() {
        const { count, start } = this.state;

        const res = await fetch(`/api/photos?start=${start}&count=${count}`);
        const data = await res.json();
        console.log(data)
        this.setState({ images: [...data] });

    }

    fetchNextImages = async () => {
        const { count, start } = this.state;
        // increase start value
        this.setState({ start: this.state.start + this.state.count })

        const res = await fetch(`/api/photos?start=${start}&count=${count}`);
        const data = await res.json();
        // add the new images
        this.setState((prevState) => {
            return {
                images: [...prevState.images, ...data]
            };
        });
    }


    render() {
        return (
            <div className="images">
                <InfiniteScroll
                    dataLength={this.state.images.length}
                    next={this.fetchNextImages}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                >
                    {
                        this.state.images.map(
                            img =>
                                <Image key={img.id} image={img} />
                        )
                    }
                </InfiniteScroll>
            </div>
        )
    }
}


export default Images;
