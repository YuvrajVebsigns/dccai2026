import { API_ENDPOINTS } from '@/constants/api';
import { apiFetch } from '@/services/apiFetch';
import { buildWebsiteAuthHeaders, ensureWebsiteAuth, getWebsiteDomain } from '@/lib/website-auth';

export interface WebsitePageContentBlock {
  id?: string;
  type?: string;
  data?: Record<string, unknown>;
}

export interface WebsitePageContent {
  time?: number;
  blocks?: WebsitePageContentBlock[];
  version?: string;
}

export interface WebsitePageSection {
  id?: string;
  type?: string;
  data?: Record<string, unknown>;
}

export interface WebsitePage {
  id?: string;
  siteId?: string;
  title?: string;
  slug?: string;
  shortDescription?: string;
  pageType?: string;
  status?: string;
  isHomepage?: boolean;
  publishedAt?: string;
  seo?: Record<string, unknown>;

  content?: WebsitePageContent;
  sections?: WebsitePageSection[];

  createdAt?: string;
  updatedAt?: string;
  createdBy?: string;
  updatedBy?: string;
}

export interface WebsitePageResponse {
  success: boolean;
  message: string;
  data: WebsitePage;
}

/**
 * Fetch a website page by slug.
 * Example:
 * fetchWebsitePageBySlug('speaker')
 */
export async function fetchWebsitePageBySlug(slug: string) {
  const domain = getWebsiteDomain();
  const auth = await ensureWebsiteAuth(domain);

  const headers = {
    ...buildWebsiteAuthHeaders(auth),
    'x-website-domain': domain,
  };

  return apiFetch<WebsitePageResponse>(API_ENDPOINTS.WEBSITE.PAGES.BY_SLUG(slug), {
    method: 'GET',
    requireAuth: false,
    headers,
  });
}
