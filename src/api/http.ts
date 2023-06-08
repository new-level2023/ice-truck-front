// http.ts

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { prefix } from 'api';

enum StatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  TooManyRequests = 429,
  InternalServerError = 500,
}
class Http {
  private instance: AxiosInstance | null = null;

  private get http(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp();
  }

  public initHttp(): AxiosInstance {
    const http = axios.create({
      baseURL: prefix,
    });

    this.instance = http;
    return http;
  }

  public request<R>(config: AxiosRequestConfig): Promise<AxiosResponse<R>> {
    return this.http.request(config);
  }

  public get<R>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<R>> {
    return this.http.get<R>(url, config);
  }

  public post<T, R>(url: string, data?: T, config?: AxiosRequestConfig): Promise<AxiosResponse<R>> {
    return this.http.post<R>(url, data, config);
  }

  public put<T, R>(url: string, data?: T, config?: AxiosRequestConfig): Promise<AxiosResponse<R>> {
    return this.http.put<R>(url, data, config);
  }

  public patch<T, R>(url: string, data?: T, config?: AxiosRequestConfig): Promise<AxiosResponse<R>> {
    return this.http.patch<R>(url, data, config);
  }

  public delete<R>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<R>> {
    return this.http.delete<R>(url, config);
  }

  // Handle global app errors
  // We can handle generic app errors depending on the status code
  // TODO: we have to change this when we define the way to handle the errors
  private handleError(error): Promise<AxiosResponse> {
    const { status } = error;

    switch (status) {
      case StatusCode.InternalServerError: {
        // Handle InternalServerError
        break;
      }
      case StatusCode.Forbidden: {
        // Handle Forbidden
        break;
      }
      case StatusCode.Unauthorized: {
        // Handle Unauthorized
        break;
      }
      case StatusCode.TooManyRequests: {
        // Handle TooManyRequests
        break;
      }
    }
    return Promise.reject(error);
  }
}

export const http = new Http();
