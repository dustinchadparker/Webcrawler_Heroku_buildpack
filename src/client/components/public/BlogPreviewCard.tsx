import * as React from "react";
import "../../scss/app";

export default class BlogPreviewCard extends React.Component<
  IBlogPreviewCardProps,
  IBlogPreviewCardState
> {
  render() {
    const { price, comment, time, index } = this.props;

    return (
      <div className="input-group mb-1 justify-content: space-between">
        <span className="input-group-text col-1 text-white bg-dark">
          {index}
        </span>
        <span className="input-group-text col-1">{price}</span>

        <span className="input-group-text col-8 text-white bg-dark">
          {comment}
        </span>
        <span className="input-group-text col-2 text-white bg-dark">
          {time} ago
        </span>
      </div>
    );
  }
}

interface IBlogPreviewCardProps {
  price: number;
  comment: string;
  time: string;
  index: number;
}

interface IBlogPreviewCardState {}
