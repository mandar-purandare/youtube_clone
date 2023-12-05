import { createContext, useEffect, useReducer } from "react";
import toast, { Toaster } from "react-hot-toast";
import api from "../Config/Axios.config";

export const AuthContext = createContext();

function reducer(loginState, action){
    switch (action.type){
        case "LOGIN":
            return {...loginState, user: action.payload}
        case "LOGOUT":
            return {...loginState, user: null}
        default:
            return loginState;
    }
}

const ParentContext = ({children}) => {

    const initialState = {user:null};

    const [loginState, dispatch] = useReducer(reducer, initialState);

    const Login = (data) => {
        dispatch({type:"LOGIN", payload:data})
    }

    const Logout = () => {
        dispatch({type:"LOGOUT"});
        localStorage.removeItem("yt-user-token");
        toast.success('Logout successfull!')
    }

    useEffect(() => {
        async function getCurrentUser(){
            try{
                const response = await api.get(`/auth/get-current-user?token=${token}`);
                if(response.data.success){
                    Login(response.data.user);
                }
            }catch(error){
                toast.error(error.response.data.message);
            }      
        }

        const token = JSON.parse(localStorage.getItem('yt-user-token'));
        if(token){
            getCurrentUser();
        }
    },[]);


    return(
        <AuthContext.Provider value={{Login, Logout, loginState}}>
            {children}
            <Toaster/>
        </AuthContext.Provider>
    )
}

export default ParentContext