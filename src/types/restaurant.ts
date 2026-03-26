export type Restaurant = {
    id: string;
    name: string;
    rating: number;
    price: string;
    is_open: boolean;
    categories: string[];
    photos: string[];
    reviews: Review[];
};

export type Review = {
    name: string;
    rating: number;
    text: string;
    image: string;
};