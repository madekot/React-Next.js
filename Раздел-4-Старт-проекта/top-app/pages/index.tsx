import React from "react";
import { Button, Htag, Tag } from "../components";
import { Paragraph } from "../components";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Hello world</Htag>
      <Button appearance='primary' className="testClass">Кнопка</Button>
      <Button appearance='primary' arrow='right'>Кнопка</Button>
      <Button appearance='ghost' arrow='right'>Кнопка</Button>
      <Paragraph size="big">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Paragraph>
      <Paragraph >Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Paragraph>
      <Paragraph size="small">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Paragraph>
      <Tag size="medium" > большой тег</Tag>
      <Tag href="#test!"> ссылка</Tag>
      <Tag color="red"> тест</Tag>
      <Tag color="grey"> тест</Tag>
      <Tag color="green"> тест</Tag>
      <Tag color="primary"> тест</Tag>
    </>
  );
}
