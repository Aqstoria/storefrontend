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
  categories?: Array<{
    id: number
    name: string
    slug: string
  }>
  tags?: Array<{
    id: number
    name: string
    slug: string
  }>
  author?: {
    id: number
    name: string
    avatar?: string
  }
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

  static async getPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
      // For now, we'll fetch all posts and find the one with matching slug
      // In the future, we can add a getPostBySlug method to the API
      const posts = await this.getPosts()
      const post = posts.find(p => p.slug === slug)
      return post || null
    } catch (error) {
      console.error('Error fetching blog post by slug:', error)
      return null
    }
  }

  static async getRecentPosts(limit: number = 5): Promise<BlogPost[]> {
    try {
      const posts = await this.getPosts({ per_page: limit })
      return posts.slice(0, limit)
    } catch (error) {
      console.error('Error fetching recent blog posts:', error)
      return []
    }
  }

  static async searchPosts(query: string, limit: number = 10): Promise<BlogPost[]> {
    try {
      const posts = await this.getPosts({ search: query, per_page: limit })
      return posts
    } catch (error) {
      console.error('Error searching blog posts:', error)
      return []
    }
  }
} 