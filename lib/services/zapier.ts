import axios from 'axios';

const ZAPIER_MCP_URL = 'https://actions.zapier.com/mcp/sk-ak-ZenZprnEjABtFN5z1wA6JlaeuB/sse';

export interface ZapierMCPResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export class ZapierMCPService {
  static async sendEvent(data: any): Promise<ZapierMCPResponse> {
    try {
      const response = await axios.post(ZAPIER_MCP_URL, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      console.error('Error sending event to Zapier MCP:', error);
      return {
        success: false,
        error: 'Failed to send event to Zapier MCP',
      };
    }
  }
} 