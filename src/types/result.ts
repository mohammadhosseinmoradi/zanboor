export type Some<Data = any, Meta = undefined> = Meta extends undefined
  ? { data: Data }
  : { data: Data; meta: Meta };

export type Err = {
  data: null;
  error: {
    name: string;
    message: string;
  };
};

export type Pagination = {
  /**
   * Number of items to retrieve
   */
  take: number;
  /**
   * Number of items to skip
   */
  skip: number;
  /**
   * Total number of items available
   */
  count: number;
};

export type Result<Data = any, Meta = undefined> = Some<Data, Meta> | Err;
