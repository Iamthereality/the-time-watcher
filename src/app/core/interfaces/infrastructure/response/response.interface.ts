export interface IResponse<T> {
  success: boolean;
  data?: T;
  code?: number;
  message?: string;
  meta: IPageMetaData;
}

export interface IPageMetaData {
  limit: number;
  offset: number;
  count: number;
}
