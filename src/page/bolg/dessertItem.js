import React from "react";
import styled from "styled-components";

const DessertItem = (props) => {
  console.log("dessert", props);
  return (
    <ListReset>
      <AReset href={props.url} target="_blank" rel="noopener noreferrer">
        <BorderLine>
          <div>
            <img src={props.thumbnail} alt={props.thumbnail} />
          </div>
          <div>
            <Content>{props.title}</Content>
            <Content>{props.blogname}</Content>
            <Content>{props.contents}</Content>
          </div>
        </BorderLine>
      </AReset>
    </ListReset>
  );
};

export default DessertItem;

const ListReset = styled.li`
  width: 1000px;
  list-style: none;
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
`;

const BorderLine = styled.div`
  display: flex;
  border-bottom: 1px solid #ff9843;
  margin-bottom: 30px;
`;
