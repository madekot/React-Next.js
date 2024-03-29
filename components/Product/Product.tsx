import Image from 'next/image';
import { ProductProps } from './Product.props';
import styles from './Product.module.css';
import cn from 'classnames';
import { Button, Card, Rate, Review, ReviewForm, Tag } from '@/components';
import { Divider } from '@/components';
import { ForwardedRef, forwardRef, useRef, useState } from "react";
import { motion } from "framer-motion";
import { declOfNum, priceRu } from "./utils";
import { variants } from "./animation";

export const Product = motion(forwardRef((props: ProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const {
        product,
        className,
        ...rest
    } = props;

    const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);

    const reviewRef = useRef<HTMLDivElement>(null);

    const scrollToReview = () => {
        setIsReviewOpened(true);
        reviewRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    return (
        <div
            className={className}
            ref={ref}
            {...rest}
        >
            <Card className={styles.product}>
                <div className={styles.logo}>
                    <Image
                        src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
                        alt={product.title}
                        width={70}
                        height={70}
                    />
                </div>
                <div className={styles.title}>{product.title}</div>
                <div className={styles.price}>
                    {priceRu(product.price)}
                    {product.oldPrice && <Tag className={styles.oldPrice} color="green">{priceRu(product.price - product.oldPrice)}</Tag>}
                </div>
                <div className={styles.credit}>
                    {priceRu(product.credit)}/<span className={styles.month}>мес</span>
                </div>
                <div className={styles.rating}><Rate rating={product.reviewAvg ?? product.initialRating} /></div>
                <div className={styles.tags}>{product.categories.map(c => <Tag key={c} className={styles.category} color='ghost'>{c}</Tag>)}</div>
                <div className={styles.priceTitle}>цена</div>
                <div className={styles.creditTitle}>кредит</div>
                <div className={styles.rateTitle}>
                    <button
                        className={styles.review}
                        onClick={scrollToReview}
                    >
                        {product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
                    </button>
                </div>
                <Divider className={styles.hr} />
                <div className={styles.description}>{product.description}</div>
                <div className={styles.feature}>
                    {product.characteristics.map(c => (
                        <div className={styles.characteristics} key={c.name}>
                            <span className={styles.characteristicsName}>{c.name}</span>
                            <span className={styles.characteristicsDots}></span>
                            <span className={styles.characteristicsValue}>{c.value}</span>
                        </div>
                    ))}
                </div>
                <div className={styles.advBlock}>
                    {product.advantages && <div className={styles.advantages}>
                      <div className={styles.advTitle}>Преимущества</div>
                      <div>{product.advantages}</div>
                    </div>}
                    {product.disadvantages && <div className={styles.disadvantages}>
                      <div className={styles.advTitle}>Недостатки</div>
                      <div>{product.disadvantages}</div>
                    </div>}
                </div>
                <Divider className={cn(styles.hr, styles.hr2)} />
                <div className={styles.actions}>
                    <Button variant='primary'>Узнать подробнее</Button>
                    <Button
                        variant='ghost'
                        arrow={'right'}
                        className={styles.reviewButton}
                        onClick={
                            () => {setIsReviewOpened(prevState => !prevState);}
                        }
                    >
                        Читать отзывы
                    </Button>
                </div>
            </Card>
            <motion.div
                style={{
                    pointerEvents: isReviewOpened ? 'auto': 'none'
                }}
                animate={isReviewOpened ? 'visible' : 'hidden'}
                variants={variants}
                initial='hidden'
            >
                <Card
                    color='blue'
                    className={cn(styles.reviews)}
                    ref={reviewRef}
                >
                    {product.reviews.map(r =>
                         <div key={r._id}>
                             <Review  review={r} />
                             <Divider />
                         </div>
                    )}
                    <ReviewForm productId={product._id} />
                </Card>
            </motion.div>
        </div>
    );
}));
