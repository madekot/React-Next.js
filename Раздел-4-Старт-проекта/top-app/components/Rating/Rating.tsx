import { useEffect, useState } from 'react';
import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import StarIcon from './star.svg';

export const Rating = ({ isEditable = false, rating, setRating, className, ...props }: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    counstructRating(rating);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating]);

  const counstructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <StarIcon 
          className={cn(styles.start, {
            [styles.filled]: i < currentRating
          })

        }
        />
      );
    });
    setRatingArray(updatedArray);
  };

  return (
    <div {...props}>
      {ratingArray.map((r, i) => <span key={i}>{r}</span>)}
    </div>
  );
};