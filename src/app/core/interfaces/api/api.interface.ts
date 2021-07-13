import { UserInterface } from '../user/user.interface';

export interface ApiResponse {
  success: boolean;
  data?: any;
  code?: number;
  message?: string;
}

interface Meta {
  limit: number;
  offset: number;
  count: number;
}

interface ApiListResponse extends ApiResponse {
  meta: Meta;
}

export interface UsersResponse extends ApiListResponse {
  data: Array<UserInterface>;
}

export interface UserResponse extends ApiResponse {
  data: UserInterface;
}
