import { Account, Client, ID } from 'appwrite';
import conf from "../conf/conf.js";
export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
                  .setEndpoint(conf.appwriteUrl)
                  .setProject(conf.appwriteProjectId);
                this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                // call another method to log in the user account
                return this.login(email, password);
            }
            else{
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }
    
    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
         throw error;   
        }
    }

    async getCurrentUser(){
        try {
            
            return await this.account.get();
        } catch (error) {
            console.log("appwrite service :: getCurrentUser :: error", error);
            
            
        }
    
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error;
            
        }
    }

    async updateUser({name, email}){
        try {
            return await this.account.update(email, name);
        } catch (error) {
            throw error;
            
        }
    }

}

const authService = new AuthService();

export default authService;