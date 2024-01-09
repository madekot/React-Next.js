import { Noto_Sans_KR } from "next/font/google";

export const noto_sans_kr = Noto_Sans_KR({
    subsets: ['latin', "cyrillic"],
    display: 'swap',
    variable: '--font-noto-sans-kr',
});
