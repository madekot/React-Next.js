import { Icon } from "components";
import { FirstLevelMenuItem } from "interfaces/menu.interface";
import { TopLevelCategory } from "interfaces/page.interface";

export const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'courses', name: 'Курсы', icon: <Icon.Course />, id: TopLevelCategory.Courses },
    { route: 'services', name: 'Сервисы', icon: <Icon.Service />, id: TopLevelCategory.Services },
    { route: 'books', name: 'Книги', icon: <Icon.Book />, id: TopLevelCategory.Books },
    { route: 'products', name: 'Продукты', icon: <Icon.Product />, id: TopLevelCategory.Products }
];
