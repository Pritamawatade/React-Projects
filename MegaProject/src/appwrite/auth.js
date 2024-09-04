import conf from '../conf'

export class AuthService{
    client = new Client();
    accout;

    constructor(){
        this.client
                  .setEndpoint(conf.appwriteUrl)
                  .setProject(conf.appwriteProjectId);
                this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.accout.create(ID.unique(), email, password, name);
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
            
            return await this.account.getUser();
        } catch (error) {
            throw error;
            
        }
        return null;
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