import conf from '../conf/conf.js' // importing conf to access appwrite database.
import { Client, Account, ID } from 'appwrite'
//Clint: it help in setting end points and it act as a secure bridge in between appwrite and frontend
//Account: it provide identity to current loggedin user and and manages his authentication and personal profile
//ID:it is use to provide A unique ID
class AuthService {  //we use class to create a js object which contains all our function{mehtod}. it cat as blue print
    client = new Client(); //provide Client output to class to create a new and unique object using it. 
    account;              //default syntex
    constructor() {    //it is a special function we use in class it help in it help us in creating js object in class   
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);   // these two function are default. these are used to set connection with appwrite
        //we are using this to provide access variable in object created inside constructor.
    }
    //creating basic function like createAccount, Login....
    async createAccount({ email, password, name }) {// create account creates a new account
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({ email, password });
            }
            else {
                return userAccount
            }
        }
        catch (error) {
            throw error
        }
    };
    async login({ email, password }) {//check if you account is present in database and let you login
        try {

            return await this.account.createEmailPasswordSession(email, password);

        } catch (error) {
            throw error
        }
    }
    async getCurrentUser() {//get information of curreent user loggedin
        try {
            return await this.account.get();
        }
        catch (error) {
            if (error.code === 401) {
                return null;
            }
            console.log("Appwrite service :: getCurrentUser :: error", error);
            return null;
        }
        return null;
    }
    async logout() {//let you logout
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);

        }
    }

};

async function login() {

}
const authService = new AuthService();// this is done so that the new object is created in this file and we dont have to create object in every file
export default authService;


// this file is created like this such that if we later have to change backend we just have to chance these function here not in every file.
//this file provide access to all user authentication and login/signup related stuff