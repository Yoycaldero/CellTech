export interface Products {
    id: number;
    name: string;
    description1: string;
    description2: string;
    description3: string;
    price1: number;
    price2: number;
    price3: number;
    image1: string;
    image2: string;
    image3: string;
    [key: string]: any;
}

export interface ProductsResponse {
    map(arg0: (item: any) => {}): unknown;
    value: Products[];
}