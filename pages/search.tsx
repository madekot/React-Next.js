import { GetStaticProps } from 'next';
import React from 'react';
import axios from 'axios';
import { MenuItem } from '@/interfaces';
import { withLayout } from "@/layout";
import { API } from "@/helpers";

function Search(): JSX.Element {

    return (
        <>
            Search
        </>
    );
}

export default withLayout(Search);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
        firstCategory
    });
    return {
        props: {
            menu,
            firstCategory
        }
    };
};

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
}
