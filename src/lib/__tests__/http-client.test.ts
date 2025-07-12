import axios from 'axios';
import { HttpClient } from '../http-client';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('HttpClient', () => {
  let httpClient: HttpClient;
  const baseUrl = 'https://api.example.com';

  beforeEach(() => {
    httpClient = new HttpClient(baseUrl);
    jest.clearAllMocks();
  });

  describe('constructor', () => {
    it('deve criar uma instância com baseUrl', () => {
      expect(httpClient).toBeInstanceOf(HttpClient);
    });
  });

  describe('get', () => {
    it('deve fazer uma requisição GET com headers corretos', async () => {
      const mockData = { id: 1, name: 'Test' };
      mockedAxios.get.mockResolvedValue({ data: mockData });

      const result = await httpClient.get('/users');

      expect(mockedAxios.get).toHaveBeenCalledWith(
        `${baseUrl}/users`,
        expect.objectContaining({
          headers: expect.objectContaining({
            'Content-Type': 'application/json',
          }),
        })
      );
      expect(result).toEqual(mockData);
    });

    it('deve incluir headers customizados', async () => {
      const mockData = { success: true };
      mockedAxios.get.mockResolvedValue({ data: mockData });

      await httpClient.get('/test', { headers: { 'Custom-Header': 'value' } });

      expect(mockedAxios.get).toHaveBeenCalledWith(
        `${baseUrl}/test`,
        expect.objectContaining({
          headers: expect.objectContaining({
            'Content-Type': 'application/json',
            'Custom-Header': 'value',
          }),
        })
      );
    });
  });

  describe('post', () => {
    it('deve fazer uma requisição POST com dados e headers', async () => {
      const postData = { name: 'New User' };
      const mockResponse = { id: 2, ...postData };
      mockedAxios.post.mockResolvedValue({ data: mockResponse });

      const result = await httpClient.post('/users', postData);

      expect(mockedAxios.post).toHaveBeenCalledWith(
        `${baseUrl}/users`,
        postData,
        expect.objectContaining({
          headers: expect.objectContaining({
            'Content-Type': 'application/json',
          }),
        })
      );
      expect(result).toEqual(mockResponse);
    });

    it('deve funcionar sem dados no corpo', async () => {
      const mockResponse = { success: true };
      mockedAxios.post.mockResolvedValue({ data: mockResponse });

      const result = await httpClient.post('/action');

      expect(mockedAxios.post).toHaveBeenCalledWith(
        `${baseUrl}/action`,
        undefined,
        expect.objectContaining({
          headers: expect.objectContaining({
            'Content-Type': 'application/json',
          }),
        })
      );
      expect(result).toEqual(mockResponse);
    });
  });

  describe('put', () => {
    it('deve fazer uma requisição PUT com dados', async () => {
      const putData = { id: 1, name: 'Updated User' };
      const mockResponse = { ...putData, updated: true };
      mockedAxios.put.mockResolvedValue({ data: mockResponse });

      const result = await httpClient.put('/users/1', putData);

      expect(mockedAxios.put).toHaveBeenCalledWith(
        `${baseUrl}/users/1`,
        putData,
        expect.objectContaining({
          headers: expect.objectContaining({
            'Content-Type': 'application/json',
          }),
        })
      );
      expect(result).toEqual(mockResponse);
    });
  });

  describe('delete', () => {
    it('deve fazer uma requisição DELETE', async () => {
      const mockResponse = { deleted: true };
      mockedAxios.delete.mockResolvedValue({ data: mockResponse });

      const result = await httpClient.delete('/users/1');

      expect(mockedAxios.delete).toHaveBeenCalledWith(
        `${baseUrl}/users/1`,
        expect.objectContaining({
          headers: expect.objectContaining({
            'Content-Type': 'application/json',
          }),
        })
      );
      expect(result).toEqual(mockResponse);
    });

    it('deve incluir configurações customizadas', async () => {
      const mockResponse = { deleted: true };
      mockedAxios.delete.mockResolvedValue({ data: mockResponse });

      await httpClient.delete('/users/1', { timeout: 5000 });

      expect(mockedAxios.delete).toHaveBeenCalledWith(
        `${baseUrl}/users/1`,
        expect.objectContaining({
          timeout: 5000,
          headers: expect.objectContaining({
            'Content-Type': 'application/json',
          }),
        })
      );
    });
  });

  describe('error handling', () => {
    it('deve propagar erros do axios', async () => {
      const error = new Error('Network Error');
      mockedAxios.get.mockRejectedValue(error);

      await expect(httpClient.get('/error')).rejects.toThrow('Network Error');
    });
  });
});
