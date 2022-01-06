import React, { useEffect, useState } from "react";
import { Button, Htag, Rating, Tag } from "../components";
import { Paragraph } from "../components";

export default function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  const [rating, setRating] = useState<number>(4);

  useEffect(() => {
    console.log('Counter ' + counter);
  }, []);
  
  return (
    <>
      <Htag tag='h1'>{counter}</Htag>
      <Button appearance='primary' className="testClass" onClick={() => setCounter((x) => x + 1)}>Кнопка увеличиния</Button>
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
      <Rating rating={rating} isEditable={true} setRating={setRating}/>
    </>
  );
}
