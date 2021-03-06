import React, { Component } from 'react';
import { connect } from 'react-redux';

//@ import redux actions....
import {deleteChat} from '../../redux/actions/chats/deleteChat';
import {listChats} from '../../redux/actions/chats/listChats';


class DeleteChat extends Component {
    handleClick=async ()=>{
        console.log('inside DElete chat component>>chatId>>chatToDisplay>>chatsList',
                    this.props.chatId,this.props.chatToDisplay,this.props.chatsList
        );
        await this.props.deleteChat(this.props.chatId,this.props.chatToDisplay,this.props.chatsList);
       
    }
    componentDidUpdate(){
        if(this.props.chatsList[0]){
           this.props.listChats(localStorage.publicUserId);
        }
    }
  render() {
    return (
        <div onClick={this.handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" className="showDeleteButton" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
        </div>
    )
  }
}
const mapStateToProps=(state)=>{
    return {
        chatsList:state.chatsR.chatsList,
        chatToDisplay:state.chatsR.chatToDisplay,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        deleteChat:(chatId)=>{dispatch(deleteChat(chatId))},
        listChats:(userId)=>{dispatch(listChats(userId))},
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DeleteChat);
