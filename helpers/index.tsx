const priceRu = (price: number): string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽');

export { firstLevelMenu } from './firstLevelMenu';
export { priceRu };
