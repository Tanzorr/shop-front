export interface Product {
  id: number;
  name: string;
  description: string;
  salePrice: number;
  stock: number;
  categoryId: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductResponse {
  currentPage: number;
  data: Product[];
  firstPageUrl: string;
  from: number;
  lastPage: number;
  lastPageUrl: string;
  links: PageLinks[];
  total: number;
  to: number;
  error: string | null;
}

export interface ProductsState {
  productsResponse: ProductResponse | null;
  loading: boolean;
  error: any;
}

export interface PageLinks {
  url: string | null;
  label: string;
  active: boolean;
}
