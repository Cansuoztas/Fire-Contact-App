import firebase from './firebase'
import { getDatabase,ref, push, set} from 'firebase/database'


export const AddUser =(name,phone,gender)=>{
    const db = getDatabase();
    const userRef = ref (db,'baglanti');
    const newUserRef = push(userRef);
    set((newUserRef),{
        userName:name,
        phoneNumber:phone,
        gender:gender
    })

}