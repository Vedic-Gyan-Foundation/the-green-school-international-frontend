import { useState, useEffect, useRef } from "react";
import styles from "./Chatbot.module.css";
import axiosInstance from "../../api/axiosInstance";
import TypingAnimation from "../TypingAnimation/TypingAnimation";
import { MdClose, MdMinimize } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const Chatbot = ({ setIsChatbotOpen }) => {
  const [, setUserMessage] = useState("");
  const [conversation, setConversation] = useState([]);
  const [selectedCategoryItems, setSelectedCategoryItems] = useState([]);
  const [questionAnswer, setQuestionAnswer] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [show, setShow] = useState("category");
  const [categories, setCategories] = useState([]);
  const [isClicked, setIsClick] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [isTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [minimized, setMinimized] = useState(false);

  const chatbotRef = useRef();

  const extractCategoryFromQuestions = (questionsData) => {
    return questionsData.map((category) => category.category);
  };

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        setIsLoading(true);
        const response = await axiosInstance.get("chatquestions/list");
        setQuestions(response.data.data.data);
        const data = extractCategoryFromQuestions(response.data.data.data);
        setCategories(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchQuestion();
  }, []);

  const handleCategoryClick = (categoryName) => {
    const selectedCategory = questions.find(
      (category) => category.category === categoryName
    );
    if (selectedCategory) setSelectedCategoryItems(selectedCategory.items);
    if (show === "category") setShow("items");
    setConversation([...conversation, { type: "user", text: categoryName }]);
    setUserMessage("");
    setCurrentStep((prev) => prev + 1);
  };

  const handleQuestionClick = (index) => {
    const selectedQuestion = selectedCategoryItems[index];
    setQuestionAnswer(selectedQuestion);
    setConversation([
      ...conversation,
      { type: "user", text: selectedQuestion?.question },
    ]);
    setUserMessage("");
    setCurrentStep((prev) => prev + 1);
  };

  useEffect(() => {
    if (!isClicked) {
      setConversation((prev) => [
        ...prev,
        {
          type: "chatbot",
          text: "Hi 👋, I'm the Green School Assistant — here to help you find answers quickly.",
        },
        { type: "chatbot", text: "Choose a category to get started:" },
      ]);
      setIsClick(true);
    } else if (selectedCategoryItems && currentStep > 1) {
      setConversation((prev) => [
        ...prev,
        { type: "chatbot", text: questionAnswer?.answer },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep, selectedCategoryItems]);

  useEffect(() => {
    if (!chatbotRef.current) return;
    const chatBody = chatbotRef.current.querySelector(`.${styles.body}`);
    if (chatBody) chatBody.scrollTop = chatBody.scrollHeight;
  }, [conversation]);

  return (
    <div className={`${styles.container} ${minimized ? styles.minimized : ""}`}>
      <div className={styles.header}>
        <div className={styles.header_title}>
          <span className={styles.avatar}>
            <IoChatbubbleEllipsesOutline size={18} />
          </span>
          <div>
            <h2>Green Assistant</h2>
            <span className={styles.status}>● Online</span>
          </div>
        </div>
        <div className={styles.header_controls}>
          <button
            onClick={() => setMinimized((m) => !m)}
            aria-label="Minimize chat"
          >
            <MdMinimize color="white" size={18} />
          </button>
          <button
            onClick={() => setIsChatbotOpen(false)}
            aria-label="Close chat"
          >
            <MdClose color="white" size={20} />
          </button>
        </div>
      </div>

      {!minimized && (
        <div className={styles.body_container} ref={chatbotRef}>
          <div className={styles.body}>
            {conversation?.map((message, index) => (
              <p
                key={index}
                className={
                  message.type === "chatbot"
                    ? styles.chatbot_msg
                    : styles.user_msg
                }
              >
                {message.text}
              </p>
            ))}
            {isTyping && <TypingAnimation />}

            {isLoading ? (
              <span className={styles.spinner} />
            ) : (
              <div className={styles.choices}>
                {show === "category"
                  ? categories?.map((answer, index) => (
                      <button
                        type="button"
                        onClick={() => handleCategoryClick(answer)}
                        key={index}
                        className={styles.choice}
                      >
                        {answer}
                      </button>
                    ))
                  : selectedCategoryItems?.map((item, index) => (
                      <button
                        type="button"
                        onClick={() => handleQuestionClick(index)}
                        key={index}
                        className={styles.choice}
                      >
                        {item.question}
                      </button>
                    ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
