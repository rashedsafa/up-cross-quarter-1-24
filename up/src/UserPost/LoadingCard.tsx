import React from "react";
import { Card, Skeleton } from "antd";

interface LoadingCardProps {
  count: number;
}

const LoadingCard: React.FC<LoadingCardProps> = ({ count }) => {
  const cards = () => {
    let totalCards: React.ReactNode[] = [];

    for (let i = 0; i < count; i++) {
      totalCards.push(
        <Card className="col-md-12" key={i}>
          <Skeleton active />
        </Card>
      );
    }
    return totalCards;
  };
  return <div className="row pb-5">{cards()}</div>;
};

export default LoadingCard;
