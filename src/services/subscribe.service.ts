import { API_ENDPOINTS } from '@/constants/api';
import {
  buildWebsiteAuthHeaders,
  clearWebsiteAuth,
  ensureWebsiteAuth,
  getApiErrorStatus,
  getWebsiteDomain,
  readStoredWebsiteAuth,
} from '@/lib/website-auth';
import { apiFetch } from '@/services/apiFetch';

export type SubscribePayload = {
  email: string;
};

export type SubscribeResponse = {
  success: boolean;
  message: string;
  data?: {
    email?: string;
    websiteId?: string;
    subscribedAt?: string;
    id?: string;
    [key: string]: unknown;
  };
  [key: string]: unknown;
};

/**
 * Subscribe user to newsletter
 * Handles website auth token fetching automatically
 */
export async function subscribeToNewsletter(email: string): Promise<SubscribeResponse> {
  if (typeof window === 'undefined') {
    throw new Error('Subscribe is only available in the browser.');
  }

  // Validate email
  if (!email || !email.includes('@')) {
    throw new Error('Please enter a valid email address.');
  }

  const domain = getWebsiteDomain();
  let auth = readStoredWebsiteAuth();

  // Ensure we have valid auth
  if (!auth?.token || !auth.websiteId) {
    try {
      auth = await ensureWebsiteAuth(domain);
    } catch (error) {
      throw new Error('Failed to authenticate. Please try again.');
    }
  }

  if (!auth?.token || !auth.websiteId) {
    throw new Error('Authentication failed. Please refresh and try again.');
  }

  try {
    const payload: SubscribePayload = {
      email,
    };

    const response = await apiFetch<SubscribeResponse>(API_ENDPOINTS.WEBSITE.SUBSCRIBES, {
      method: 'POST',
      requireAuth: false,
      headers: buildWebsiteAuthHeaders(auth),
      body: JSON.stringify(payload),
    });

    return response;
  } catch (error: unknown) {
    const statusCode = getApiErrorStatus(error);

    // If 401, refresh auth and try again
    if (statusCode === 401) {
      clearWebsiteAuth();

      try {
        const freshAuth = await ensureWebsiteAuth(domain);

        const payload: SubscribePayload = {
          email,
        };

        const response = await apiFetch<SubscribeResponse>(
          API_ENDPOINTS.WEBSITE.SUBSCRIBES,
          {
            method: 'POST',
            requireAuth: false,
            headers: buildWebsiteAuthHeaders(freshAuth),
            body: JSON.stringify(payload),
          },
        );

        return response;
      } catch (retryError) {
        throw new Error('Failed to subscribe. Please try again.');
      }
    }

    // Re-throw the original error
    throw error;
  }
}
