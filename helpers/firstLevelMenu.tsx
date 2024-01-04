import { Icon } from "@/components/Icon";
import { FirstLevelMenuItem, TopLevelCategory } from "@/interfaces";

export const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'courses', name: 'Курсы', icon: <Icon.Course/>, id: TopLevelCategory.Courses },
    { route: 'services', name: 'Сервисы', icon: <Icon.Service/>, id: TopLevelCategory.Services },
    { route: 'books', name: 'Книги', icon: <Icon.Book/>, id: TopLevelCategory.Books },
    { route: 'products', name: 'Продукты', icon: <Icon.Product/>, id: TopLevelCategory.Products }
];
