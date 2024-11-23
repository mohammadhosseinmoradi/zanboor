export type PaginationParams = {
  take: number;
  skip: number;
};

export type Pagination = {
  take: number;
  skip: number;
  /**
   * Total number of items available
   */
  count: number;
};
