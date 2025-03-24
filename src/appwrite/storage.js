import config from '../config/config';
import { Client, Storage, ID } from "appwrite";

export class StorageService{
    client = new Client();
    storage;

    constructor(){
        this.client.setEndpoint(config.appwriteURL)
        .setProject(config.appwriteProjectId);
        this.storage = new Storage(this.client);
    }

    async uploadFile(file){
        try {
            return await this.storage.createFile(
                config.appwriteBucketId,
                ID.unique(),
            )
        } catch (error) {
            console.log('Appwrite service error :: uploadFile', error)
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.storage.deleteFile(
                config.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log('Appwrite service error :: deleteFile', error)
            return false;
        }
    }

    async getFilePreview(fileId){
        try {
            return await this.storage.getFilePreview(
                config.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log('Appwrite service error :: getFilePreview', error)
            return false;
        }
    }
}

const storageService = new StorageService();

export default storageService;