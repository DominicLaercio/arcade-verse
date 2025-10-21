export interface CommentaryProps {
    username: string;
    avatar?: string;
    content: string;
    date: string;
    likes?: number;
    replies?: CommentaryProps[];
}