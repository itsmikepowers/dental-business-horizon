import React, { useEffect } from 'react';

const Chatbot = () => {
    useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
      script.async = true;
      document.body.appendChild(script);
  
      script.onload = () => {
          window.botpressWebChat.init({
            botId: '454304ae-1bba-43ce-b439-ab2d5e209d09',
            hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
            messagingUrl: 'https://messaging.botpress.cloud',
            clientId: '454304ae-1bba-43ce-b439-ab2d5e209d09',
        });

        // Send the first payload right after initializing the webchat
      }
    }, []);
  
    return <div id="webchat" />;
  }
  
export default Chatbot;
