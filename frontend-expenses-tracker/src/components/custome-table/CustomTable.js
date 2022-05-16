import React from "react";
import { ListGroup } from "react-bootstrap";

export const CustomTable = ({ expenses }) => {
  return (
    <div className="mt-5 custom-list fs-3">
      <ListGroup>
        {expenses.map((item, i) => (
          <ListGroup.Item>
            <span className="title">{item.name}</span>
            <span className="cost">${item.amount}</span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};
