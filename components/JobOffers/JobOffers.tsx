import RateIcon from './rate.svg';
import React from 'react';
import s from './JobOffers.module.css';
import { Card } from "@/components";
import { JobOffersProps } from './JobOffers.props';
import { priceRu } from "@/helpers";

export const JobOffers = ({ count, juniorSalary, middleSalary, seniorSalary }: JobOffersProps): JSX.Element => {
    return (
        <div className={s.jobOffers}>
            <Card className={s.count}>
                <div className={s.title}>Всего вакансий</div>
                <div className={s.countValue}>{count}</div>
            </Card>
            <Card className={s.salary}>
                <div>
                    <div className={s.title}>Начальный</div>
                    <div className={s.salaryValue}>{priceRu(juniorSalary)}</div>
                    <div className={s.rate}>
                        <RateIcon className={s.filled} />
                        <RateIcon />
                        <RateIcon />
                    </div>
                </div>
                <div>
                    <div className={s.title}>Средний</div>
                    <div className={s.salaryValue}>{priceRu(middleSalary)}</div>
                    <div className={s.rate}>
                        <RateIcon className={s.filled} />
                        <RateIcon className={s.filled} />
                        <RateIcon />
                    </div>
                </div>
                <div>
                    <div className={s.title}>Профессионал</div>
                    <div className={s.salaryValue}>{priceRu(seniorSalary)}</div>
                    <div className={s.rate}>
                        <RateIcon className={s.filled} />
                        <RateIcon className={s.filled} />
                        <RateIcon className={s.filled} />
                    </div>
                </div>
            </Card>
        </div>
    );
};
