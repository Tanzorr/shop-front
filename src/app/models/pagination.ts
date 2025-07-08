export interface PageLinks {
  url: string | null;
  label: string;
  active: boolean;
}

export interface PageQueryParams {
  page?: number;
  perPage?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  search?: string;
  categoryId?: number;
  minPrice?: number;
  maxPrice?: number;
  paginationLinkUrl?: string;
}
