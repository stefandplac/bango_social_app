import axios from 'axios';
import * as types from '../../constants/types';

//@ import constants urls
import { writeChatURL } from '../../../constants/constants';

export const writeChat=(chatBody,chatToDisplay,chatsList)=> async(dispatch)=>{
        
        console.log(`chatBody inside writeChat action`, chatBody);
       
        try{
            const configHeaders={
                headers:{
                    'Content-Type':'application/json',
                }
            };
            
            const response = await axios.post(`${writeChatURL}`,
                                                chatBody,
                                                configHeaders,
            );
            console.log('response from server for posting chat',response.data);
            if((response.data._id&&chatBody.id)&&(response.data._id===chatBody.id)){
                console.log(`inside writechat chatid`,response.data._id);
                dispatch({
                    type:types.WRITE_CHAT,
                    chatToDisplay:response.data,
                    chatsList:chatsList,
                    errors:{},
                })
            }
            else{
                    dispatch({
                        type:types.WRITE_CHAT,
                       
                        chatToDisplay:chatToDisplay,
                        chatsList:response.data,
                        errors:{},
                    });
                    console.log('response.data ',response.data);
                }

        }
        catch(err){
            dispatch({
                type:types.WRITE_CHAT,
                chatToDisplay:chatToDisplay,
                chatsList:chatsList,
                errors:err,
            });

        }
};