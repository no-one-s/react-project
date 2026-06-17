import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

class Service {
    client = new Client();
    databases;
    buket;
    constructor() {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.buket = new Storage(this.client);
    }
    async createPost({ title, slug, featuredImage, status, content, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    featuredImage,
                    status,
                    content,
                    userId
                }
            );
        } catch (error) {
            console.error("Error creating post:", error);
            return false;
        }
    }
    async updatePosts(slug, { title, featuredImage, status, content }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    featuredImage,
                    status,
                    content,
                }
            );
        }
        catch (error) {
            console.error("Error updating post:", error);
            return false;
        }
    }
    async deletePost(slug) {
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
        }
        catch (error) {
            console.error("Error deleting post:", error);
            return false;
        }
    }
    async getPost(slug) {
        try{
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        }
        catch (error) {
            console.error("Error fetching posts:", error);
            return false;
        }
    }
    async getPosts(queries=[Query.equal('status','active')]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            );
        }
        catch (error) {
            console.error("Error fetching posts:", error);
            return false;
        }
    }


    //files service
    async uploadFile(file) {
        try{
            return await this.buket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
        }
        catch (error) {
            console.error("Error uploading file:", error);
            return false;
        }
    }
    async deleteFile(fileId) {
        try {
            await this.buket.deleteFile(
                conf.appwriteBucketId,
                fileId
            );
            return true;
        }
        catch (error) {
            console.error("Error deleting file:", error);
            return false;
        }
    }
    async getFilePreview(fileId) {
        try {
            return this.buket.getFilePreview(
                conf.appwriteBucketId,
                fileId
            );
        }
        catch (error) {
            console.error("Error fetching file preview:", error);
            return false;
        }
    }
}

const service = new Service();
export default service;