import { PageTopProps } from './PageTop.props';
import s from './PageTop.module.css';
import { JobOffers, Tag, Typography } from '@/components';
import { TopLevelCategory } from "@/interfaces";

const { Title } = Typography;

export const PageTop = ({ products, page, firstCategory }: PageTopProps): JSX.Element => {
    return (
        <>
            <div className={s.wrapper}>
                <div className={s.title}>
                    <Title tag='h1'>{page.title}</Title>
                    {products && <Tag
                      color='grey'
                      size='m'
                    >{products.length}</Tag>}
                    <span>Сортировка</span>
                </div>
                <div>
                    {products && products.map(p => (<div key={p._id}>{p.title}</div>))}
                </div>
                <div className={s.hhTitle}>
                    <Title tag='h2'>Вакансии - {page.category}</Title>
                    <Tag
                        color='red'
                        size='m'
                    >hh.ru</Tag>
                </div>
                {firstCategory == TopLevelCategory.Courses && <JobOffers {...page.hh} />}
            </div>
        </>
    );
};
