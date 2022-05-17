/* eslint-disable */
import axios from 'axios';
const FAPI_KEY = 'AIzaSyAmaoT9l169lBI1CskAQpUQr0083EmkqP0';

const userModule = {
    namespaced:true,
    state(){
        return {
            email:'',
            token:'',
            refresh:''
        }
    },
    mutations:{
        authUser(state,payload){
            state.email = payload.email;
            state.token = payload.idToken;
            state.refresh = payload.refreshToken;
        }
    },
    actions:{
        setToken(context,payload){
            localStorage.setItem("token",payload.idToken);
            localStorage.setItem("refresh",payload.refreshToken);
        },
        signup(context,payload){
            axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FAPI_KEY}`,{
                ...payload,
                returnSecureToken:true
            })
            .then( response => {
                context.commit('authUser',response.data);
                context.dispatch('setToken',response.data)
            })
            .catch( error => console.log(error))
        }
    }
}

export default userModule;