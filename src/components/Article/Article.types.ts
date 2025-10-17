interface ArticleProps {
    children: React.ReactNode;

    mainImageUrl?: string;

    articleTitle?: string;
    articleDescription?: string;
    authorName?: string;
    publishDate?: string;
}

export type { ArticleProps as default };