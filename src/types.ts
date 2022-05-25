interface Link {
  id: string;
  shortUrl: string
}

interface CreatLink {
  shortUrl: string;
}

export interface APIResponse {
  success: boolean,
  code: number,
  data?: Array<Link> | CreatLink,
  errorMessage?: string
}
