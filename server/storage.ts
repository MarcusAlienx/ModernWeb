import { 
  type User, 
  type InsertUser,
  type Collection,
  type InsertCollection,
  type Project,
  type InsertProject,
  type Biography,
  type InsertBiography,
  type News,
  type InsertNews,
  type Contact,
  type InsertContact
} from "@shared/schema";
import { DrizzleStorage } from "./DrizzleStorage";

export interface IStorage {
  // User methods
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Collection methods
  getCollections(): Promise<Collection[]>;
  getFeaturedCollections(): Promise<Collection[]>;
  getCollection(id: string): Promise<Collection | undefined>;
  getCollectionBySlug(slug: string): Promise<Collection | undefined>;
  createCollection(collection: InsertCollection): Promise<Collection>;
  updateCollection(id: string, collection: Partial<InsertCollection>): Promise<Collection | undefined>;
  deleteCollections(): Promise<void>;
  
  // Project methods
  getProjects(): Promise<Project[]>;
  getFeaturedProjects(): Promise<Project[]>;
  getProjectsByCollection(collectionId: string): Promise<Project[]>;
  getProject(id: string): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  updateProject(id: string, project: Partial<InsertProject>): Promise<Project | undefined>;
  
  // Biography methods
  getBiography(): Promise<Biography | undefined>;
  updateBiography(biography: InsertBiography): Promise<Biography>;
  
  // News methods
  getNews(): Promise<News[]>;
  getPublishedNews(): Promise<News[]>;
  getNewsItem(id: string): Promise<News | undefined>;
  getNewsBySlug(slug: string): Promise<News | undefined>;
  createNews(news: InsertNews): Promise<News>;
  updateNews(id: string, news: Partial<InsertNews>): Promise<News | undefined>;
  
  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
}

export const storage = new DrizzleStorage();