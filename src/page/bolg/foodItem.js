import React from "react";
import styled from "styled-components";

const FoodItem = (food) => {
  console.log("food", food);
  return (
    <ListReset>
      <AReset href={food.url} target="_blank" rel="noopener noreferrer">
        <BorderLine>
          <div>
            <img src={food.thumbnail} alt={food.thumbnail} />
          </div>
          <div>
            <Content>{food.title}</Content>
            <Content>{food.blogname}</Content>
            <Content>{food.contents}</Content>
          </div>
        </BorderLine>
      </AReset>
    </ListReset>
  );
};

export default FoodItem;

const ListReset = styled.li`
  width: 1000px;
  list-style: none;

  @media (max-width: 485px) {
    width: 100%;
  }
`;

const AReset = styled.a`
  text-decoration: none;
  color: black;
  cursor: pointer;

  height: 170px;
`;

const Content = styled.p`
  margin: 0 0 15px 20px;
  padding: 0;

  @media (max-width: 485px) {
    margin: 0;
    padding: 0 0 10px 0;
  }
`;

const BorderLine = styled.div`
  display: flex;
  border-bottom: 1px solid #ff9843;
  margin-bottom: 30px;

  @media (max-width: 485px) {
    display: block;
    text-align: center;
    border: 1px solid #ff9843;
    border-radius: 10px;
    padding: 20px;
  }
`;
