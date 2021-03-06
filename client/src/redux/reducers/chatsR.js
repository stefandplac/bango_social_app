import * as types from '../constants/types';

export const chatsR=(state={chatsList:[],
                            chatToDisplay:{},
                            errors:{}, 
                            serverResponse:{},
                            emoticons:[],
                            showProfile:false,
                        },action)=>{
    switch(action.type){
        case types.LIST_CHATS:
            return {...state,
                    chatsList:action.chatsList,
                    errors:action.errors,
            };
        case types.DISPLAY_CHAT:
            return {...state,
                    chatToDisplay:action.chatToDisplay,
                    errors:action.errors,
            };
        case types.WRITE_CHAT:
            return {...state,
                    chatToDisplay:action.chatToDisplay,
                    chatsList:action.chatsList,
                    errors:action.errors,
            };
        case types.SEARCH_FOR_CHAT:
            return {...state,
                    searchValue:action.searchValue,
            }
        case types.GET_EMOTICONS:
            return {...state,
                    emoticons:action.emoticons,
                    errors:action.errors,
            }
        case types.DELETE_CHAT:
            return {...state,
                    errors:action.errors,
                    chatsList:action.chatsList,
                    chatToDisplay:action.chatToDisplay,
            };
        case types.UPDATE_SCREEN:
            return {...state,
                    showProfile:action.showProfile,
            };
        default: 
            return state;
    }
}