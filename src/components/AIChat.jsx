import React, { useState } from 'react';

const AIChat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleInputChange = (event) => setInput(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newMessage = { text: input, sender: 'user' };
        setMessages([...messages, newMessage]);
        setInput('');

        // Simulate AI response
        const aiResponse = { text: `AI: You said, '${input}'`, sender: 'ai' };
        setMessages((prevMessages) => [...prevMessages, aiResponse]);
    };

    return (
        <div className="ai-chat">
            <div className="messages">
                {messages.map((message, index) => (
                    <div key={index} className={message.sender}>{message.text}</div>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="input-form">
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Type a message..."
                    required
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default AIChat;