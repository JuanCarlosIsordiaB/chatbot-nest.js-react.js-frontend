import { useState } from "react";
import { GptMessage } from "../../components/chat-bubbles/GptMessage";
import { MyMessage } from "../../components/chat-bubbles/MyMessage";
import TextMessageBox from "../../components/chat-input-boxes/TextMessageBox";
import TypingLoader from "../../components/loaders/TypingLoader";
import TextMessageBoxFile from "../../components/chat-input-boxes/TextMessageBoxFile";
import TextMessageBoxSelect from "../../components/chat-input-boxes/TextMessageBoxSelect";

interface Message {
  text: string;
  isBot: boolean;
}

const OrthographyPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const handlePost = async (text: string) => {
    setIsLoading(true);
    setMessages((prev) => [...prev, { text: text, isBot: false }]);

    //TODO: useCase
    setIsLoading(false);

    //TODO: añadir el mensaje de isBot en true
  };

  return (
    <div className="chat-container ">
      <div className="chat-messages ">
        <div className="grid grid-cols-12 gap-y-2 ">
          {/* Mensaje del bot */}
          <GptMessage text="Hola, soy tu asistente virtual, te ayudarea a cualquier tarea que necesites" />
          {messages.map((message, index) =>
            message.isBot ? (
              <GptMessage key={index} text="Esto es de OpenAI" />
            ) : (
              <MyMessage key={index} text={message.text} />
            )
          )}

          {isLoading && <TypingLoader className="fade-in" />}
        </div>
      </div>
      <TextMessageBox
        onSendMessage={handlePost}
        placeholder="Write here what you want to ask"
        disableCorrections
      />
      {/*
      <TextMessageBoxFile
        onSendMessage={handlePost}
        placeholder="Write here what you want to ask"
      />
      <TextMessageBoxSelect
        options={[
          { id: "1", text: "Option 1" },
          { id: "2", text: "Option 2" },
          { id: "3", text: "Option 3" },
        ]}
        onSendMessage={handlePost}
        placeholder="Write here what you want to ask"
      /> */}
    </div>
  );
};

export default OrthographyPage;
