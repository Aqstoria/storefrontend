import { botbleAPI } from './api'

export interface BlogPost {
  id: number
  name: string
  description?: string
  content?: string
  image?: string
  slug: string
  created_at?: string
  updated_at?: string
  // Add more fields as needed
}

export class BlogService {
  static async getPosts(params?: Record<string, any>): Promise<BlogPost[]> {
    try {
      const response = await botbleAPI.getBlogPosts(params)
      return response.data || []
    } catch (error) {
      console.error('Error fetching blog posts:', error)
      return []
    }
  }
} 