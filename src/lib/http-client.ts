import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Cliente HTTP para realizar requisições REST
 * Facilita a comunicação com APIs através de métodos CRUD
 */
export class HttpClient {
  private baseUrl: string;

  /**
   * Cria uma nova instância do cliente HTTP
   * @param baseUrl URL base da API
   */
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  /**
   * Obtém os headers de autenticação e configuração padrão
   * @returns Headers com token de autorização e content-type
   */
  private getAuthHeaders(): Record<string, string> {
    const token = "Your logic here";
    const headers: Record<string, string> = {};

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    headers["Content-Type"] = 'application/json'

    return headers;
  }

  /**
   * Realiza uma requisição GET para o endpoint especificado
   * @param url - URL do endpoint (será combinada com a baseUrl)
   * @param config - Configurações opcionais da requisição
   * @returns Promise com os dados da resposta
   */
  async get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const headers = { ...this.getAuthHeaders(), ...(config?.headers || {}) };
    const response: AxiosResponse<T> = await axios.get(
      `${this.baseUrl}${url}`,
      {
        ...config,
        headers,
      }
    );

    return response.data;
  }

  /**
   * Realiza uma requisição POST para o endpoint especificado
   * @param url - URL do endpoint (será combinada com a baseUrl)
   * @param data - Dados a serem enviados no corpo da requisição
   * @param config - Configurações opcionais da requisição
   * @returns Promise com os dados da resposta
   */
  async post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const headers = { ...this.getAuthHeaders(), ...(config?.headers || {}) };
    const response: AxiosResponse<T> = await axios.post(
      `${this.baseUrl}${url}`,
      data,
      {
        ...config,
        headers,
      }
    );

    return response.data;
  }

  /**
   * Realiza uma requisição PUT para o endpoint especificado
   * @param url - URL do endpoint (será combinada com a baseUrl)
   * @param data - Dados a serem enviados no corpo da requisição
   * @param config - Configurações opcionais da requisição
   * @returns Promise com os dados da resposta
   */
  async put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const headers = { ...this.getAuthHeaders(), ...(config?.headers || {}) };
    const response: AxiosResponse<T> = await axios.put(
      `${this.baseUrl}${url}`,
      data,
      {
        ...config,
        headers,
      }
    );
    return response.data;
  }

  /**
   * Realiza uma requisição DELETE para o endpoint especificado
   * @param url - URL do endpoint (será combinada com a baseUrl)
   * @param config - Configurações opcionais da requisição
   * @returns Promise com os dados da resposta
   */
  async delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const headers = { ...this.getAuthHeaders(), ...(config?.headers || {}) };
    const response: AxiosResponse<T> = await axios.delete(
      `${this.baseUrl}${url}`,
      {
        ...config,
        headers,
      }
    );
    return response.data;
  }
}
