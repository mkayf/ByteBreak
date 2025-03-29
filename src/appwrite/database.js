import { data } from 'react-router-dom';
import config from '../config/config';
import { Client, Databases, Query, ID } from "appwrite";

export class DatabaseService{
    client = new Client();
    databases;

    constructor(){
        this.client.setEndpoint(config.appwriteURL)
        .setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client);
    }

    async createPost({title, content, slug, featuredImg, status}){
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteArticlesCollectionId,
                slug,
                {title, content, slug, featuredImg, status}
            )
        } catch (error) {
            console.log('Appwrite service error :: createPost', error)
            return false;
        }
    }

    async updatePost(slug, {title, content, featuredImg, status}){
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteArticlesCollectionId,
                slug,
                {title, content, featuredImg, status}
            )
        } catch (error) {
            console.log('Appwrite service error :: updatePost', error)
            return false;
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteArticlesCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log('Appwrite service error :: deletePost', error)
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteArticlesCollectionId,
                slug
            );
        } catch (error) {
            console.log('Appwrite service error :: getPost', error)
            return false;
        }
    }

    async getAllPosts(queries = [Query.equal('status', 'active')]){
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteArticlesCollectionId,
                queries
            );
        } catch (error) {
            console.log('Appwrite service error :: getAllPosts', error)
            return false;
        }
    }

}

const databaseService = new DatabaseService();

export default databaseService;