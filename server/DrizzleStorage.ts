import { and, eq } from "drizzle-orm";
import {
  users,
  collections,
  projects,
  biography,
  news,
  contacts,
  User,
  InsertUser,
  Collection,
  InsertCollection,
  Project,
  InsertProject,
  Biography,
  InsertBiography,
  News,
  InsertNews,
  Contact,
  InsertContact,
} from "@shared/schema";
import { db } from "./drizzle";
import { IStorage } from "./storage";

export class DrizzleStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    return db.query.users.findFirst({ where: eq(users.id, id) });
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return db.query.users.findFirst({ where: eq(users.username, username) });
  }

  async createUser(user: InsertUser): Promise<User> {
    const [newUser] = await db.insert(users).values(user).returning();
    return newUser;
  }

  async getCollections(): Promise<Collection[]> {
    return db.query.collections.findMany();
  }

  async getFeaturedCollections(): Promise<Collection[]> {
    return db.query.collections.findMany({ where: eq(collections.featured, true) });
  }

  async getCollection(id: string): Promise<Collection | undefined> {
    return db.query.collections.findFirst({ where: eq(collections.id, id) });
  }

  async getCollectionBySlug(slug: string): Promise<Collection | undefined> {
    return db.query.collections.findFirst({ where: eq(collections.slug, slug) });
  }

  async createCollection(collection: InsertCollection): Promise<Collection> {
    const [newCollection] = await db.insert(collections).values(collection).returning();
    return newCollection;
  }

  async updateCollection(id: string, collection: Partial<InsertCollection>): Promise<Collection | undefined> {
    const [updatedCollection] = await db.update(collections).set(collection).where(eq(collections.id, id)).returning();
    return updatedCollection;
  }

  async deleteCollections(): Promise<void> {
    await db.delete(collections);
  }

  async getProjects(): Promise<Project[]> {
    return db.query.projects.findMany();
  }

  async getFeaturedProjects(): Promise<Project[]> {
    return db.query.projects.findMany({ where: eq(projects.featured, true) });
  }

  async getProjectsByCollection(collectionId: string): Promise<Project[]> {
    return db.query.projects.findMany({ where: eq(projects.collectionId, collectionId) });
  }

  async getProject(id: string): Promise<Project | undefined> {
    return db.query.projects.findFirst({ where: eq(projects.id, id) });
  }

  async createProject(project: InsertProject): Promise<Project> {
    const [newProject] = await db.insert(projects).values(project).returning();
    return newProject;
  }

  async updateProject(id: string, project: Partial<InsertProject>): Promise<Project | undefined> {
    const [updatedProject] = await db.update(projects).set(project).where(eq(projects.id, id)).returning();
    return updatedProject;
  }

  async getBiography(): Promise<Biography | undefined> {
    return db.query.biography.findFirst();
  }

  async updateBiography(bio: InsertBiography): Promise<Biography> {
    const [updatedBio] = await db.insert(biography).values(bio).returning();
    return updatedBio;
  }

  async getNews(): Promise<News[]> {
    return db.query.news.findMany();
  }

  async getPublishedNews(): Promise<News[]> {
    return db.query.news.findMany({ where: eq(news.published, true) });
  }

  async getNewsItem(id: string): Promise<News | undefined> {
    return db.query.news.findFirst({ where: eq(news.id, id) });
  }

  async getNewsBySlug(slug: string): Promise<News | undefined> {
    return db.query.news.findFirst({ where: eq(news.slug, slug) });
  }

  async createNews(newsItem: InsertNews): Promise<News> {
    const [newNews] = await db.insert(news).values(newsItem).returning();
    return newNews;
  }

  async updateNews(id: string, newsItem: Partial<InsertNews>): Promise<News | undefined> {
    const [updatedNews] = await db.update(news).set(newsItem).where(eq(news.id, id)).returning();
    return updatedNews;
  }

  async createContact(contact: InsertContact): Promise<Contact> {
    const [newContact] = await db.insert(contacts).values(contact).returning();
    return newContact;
  }

  async getContacts(): Promise<Contact[]> {
    return db.query.contacts.findMany();
  }
}
