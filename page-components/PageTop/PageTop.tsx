import { useEffect, useReducer } from "react";
import { JobOffers, Tag, Typography, Advantages, Sort, SortEnum, Product } from '@/components';
import { TopLevelCategory } from "@/interfaces";
import { PageTopProps } from './PageTop.props';
import { sortReducer } from "./sort.reducer";
import s from './PageTop.module.css';

const { Title } = Typography;

export const PageTop = ({ products, page, firstCategory }: PageTopProps): JSX.Element => {
    const [{ products: sortedProducts, sort }, dispathSort] = useReducer(sortReducer, { products, sort: SortEnum.Rating });

    const setSort = (sort: SortEnum) => {
        dispathSort({ type: sort });
    };

    useEffect(() => {
        dispathSort({type: 'reset', initialState: products});
    }, [products]);

    if (!page) return <></>;

    return (
        <>
            <div className={s.wrapper}>
                <div className={s.title}>
                    <Title tag='h1'>{page.title}</Title>
                    {products && <Tag
                      color='grey'
                      size='m'
                    >{products.length}</Tag>}
                    <Sort sort={sort} setSort={setSort} />
                </div>
                <div>
                    {sortedProducts && sortedProducts.map(p => (<Product layout key={p._id} product={p} />))}
                </div>
                <div className={s.hhTitle}>
                    <Title tag='h2'>Вакансии - {page.category}</Title>
                    <Tag
                        color='red'
                        size='m'
                    >hh.ru</Tag>
                </div>
                {firstCategory == TopLevelCategory.Courses && page.hh && <JobOffers {...page.hh} />}
                {page.advantages && page.advantages.length > 0 && <>
                  <Title tag='h2'>Преимущства</Title>
                  <Advantages advantages={page.advantages} />
                </>
                }
                {page.seoText && <div className={s.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}
                <Title tag='h2'>Получаемые навыки</Title>
                {page.tags.map(t => <Tag key={t} color='primary'>{t}</Tag>)}
            </div>
        </>
    );
};
