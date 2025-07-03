// src/components/WatsonAssistant.tsx
import { useEffect } from "react";

const WatsonAssistant = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `
      window.watsonAssistantChatOptions = {
        integrationID: "cc040df2-bfe6-4e47-a53b-df748349f39e",
        region: "us-south",
        serviceInstanceID: "efa176b1-ece6-47d9-a789-da78cf38e6df",
        onLoad: async (instance) => { await instance.render(); }
      };
      setTimeout(function(){
        const t = document.createElement('script');
        t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
                (window.watsonAssistantChatOptions.clientVersion || 'latest') +
                "/WatsonAssistantChatEntry.js";
        document.head.appendChild(t);
      });
    `;
    document.body.appendChild(script);
  }, []);

  return null;
};

export default WatsonAssistant;
