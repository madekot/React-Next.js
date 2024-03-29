import { Button, Input, Rate, Tag, Textarea, Typography } from "@/components";
import { useState } from "react";
import { withLayout } from "@/layout";
import { GetStaticProps } from "next";
import axios from 'axios';
import { MenuItem } from '@/interfaces';

const { Paragraph, Title } = Typography;

function Home(): JSX.Element {
    const [rating, setRating] = useState<number>(4);

    return (
        <div>
            <Title tag={"h1"}>Заголовок</Title>
            <Button variant={"ghost"}>ghost</Button>
            <Button
                variant={"primary"}
                arrow={"down"}
            >primary</Button>
            <div>
                <Paragraph size={"s"}>hello Paragraph</Paragraph>
                <Paragraph>hello Paragraph</Paragraph>
                <Paragraph size={'l'}>hello Paragraph</Paragraph>
                <Tag>Ghost</Tag>
                <Tag
                    size='m'
                    color='red'
                >Red</Tag>
                <Tag color='green'>Green</Tag>
                <Tag color='primary'>Green</Tag>
                <Rate
                    isEditable
                    rating={rating}
                    handleRatingChange={setRating}
                />
                <Input placeholder='тест' />
                <Textarea placeholder={'тест area'}/>
            </div>
        </div>
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
