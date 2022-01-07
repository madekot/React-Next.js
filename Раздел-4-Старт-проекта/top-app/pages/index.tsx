import React, { useEffect, useState } from "react";
import { Button, Htag, Rating, Tag } from "../components";
import { Paragraph } from "../components";
import { withLayout } from "../layout/Layout";
import axios from 'axios';
import { MenuItem } from "../interfaces/menu.interface";
import { GetStaticProps } from "next";

function Home({ menu }: HomeProps): JSX.Element {
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
      <ul>
        {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
      </ul>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}

// export const getStaticProps: GetStaticProps<HomeProps> = async () => {
// 	const firstCategory = 0;
// 	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
// 		firstCategory
// 	});
// 	return {
// 		props: {
// 			menu,
// 			firstCategory
// 		}
// 	};
// };

// interface HomeProps extends Record<string, unknown> {
// 	menu: MenuItem[];
// 	firstCategory: number;
// }