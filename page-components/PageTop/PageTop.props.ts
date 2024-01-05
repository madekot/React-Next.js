import { TopLevelCategory, TopPageModel, ProductModel } from '@/interfaces';

export interface PageTopProps {
    firstCategory: TopLevelCategory;
    page?: TopPageModel;
    products: ProductModel[];
}
