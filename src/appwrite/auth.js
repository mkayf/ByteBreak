import config from '../config/config';
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client.setEndpoint(config.appwriteURL)
        .setProject(config.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                // login user
                return this.login({email, password});
            } else{
                return userAccount;
            }
        }
        catch(error){
            console.log('Appwrite service error :: createAccount', error);
            return false;
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log('Appwrite service error :: login', error);
            return false;
        }
    }

    async getLoggedInUser(){
        try{
            return await this.account.get();
        }
        catch(error){   
            console.log('Appwrite service error :: getLoggedInUser', error);
        }
        return null;
    }

    async logout(){
        try{
            await this.account.deleteSessions();
        }
        catch(error){
            console.log('Appwrite service error :: logout', error);
            return false;
        }
    }
}

const authService = new AuthService();

export default authService;