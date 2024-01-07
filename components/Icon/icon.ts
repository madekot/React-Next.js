import { SVGAttributes } from "react";
import { Name } from "./types";

import Book from './svg/books.svg';
import Course from './svg/courses.svg';
import Logo from './svg/logo.svg';
import Product from './svg/products.svg';
import Service from './svg/services.svg';

const Icon: Record<Name, React.FunctionComponent<SVGAttributes<SVGAElement>>> = {
    Book,
    Course,
    Logo,
    Product,
    Service,
};

export { Icon };
