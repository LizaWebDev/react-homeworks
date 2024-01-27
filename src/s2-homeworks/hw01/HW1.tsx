import React from 'react';
import Message from './message/Message';
import MessageSender from './message-sender/MessageSender';
import s2 from '../../s1-main/App.module.css';
import FriendMessage from './friend-message/FriendMessage';
import avatar from './avatar.png';

export type MessageType = {
    id: number;
    user: {
        avatar: string;
        name: string;
    };
    message: {
        text: string;
        time: string;
    };
};

export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar,
        name: 'Me',
    },
    message: {
        text: 'Hello, how are you, what did you do yesterday?',
        time: '9:00',
    },
};

export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatar,
        name: 'My friend',
    },
    message: {
        text: 'Hello, I did not do anything and had a rest all day, what about you?',
        time: '9:01',
    },
};

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={s2.hw}>
                <div>
                    <Message message={message0} />
                    <FriendMessage message={friendMessage0} />
                </div>
                <MessageSender M={Message} />
            </div>
        </div>
    );
};

export default HW1;