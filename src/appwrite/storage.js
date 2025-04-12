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
                file
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

    getFilePreview(fileId){
        try {
            // using getFileView instead of getFilePreview because getFilePreview is not working for free tier plan:
            const filePreview = this.storage.getFileView(
                config.appwriteBucketId,
                fileId
            )
            return filePreview;
        } catch (error) {
            console.log('Appwrite service error :: getFilePreview', error)
            return false;
        }
    }
}

const storageService = new StorageService();

export default storageService;