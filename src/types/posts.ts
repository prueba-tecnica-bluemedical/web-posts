export interface IPostsCount {
    name:      string;
    postCount: number;
}

export interface IPost {
    id:        string;
    createdAt: Date;
    name:      string;
    comment:   string;
}
