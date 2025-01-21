import React, { useState, useEffect, useRef } from "react";
import styles from "./Chatbot.module.css";
import { fetchChatQuestions } from "./ChatbotQuestions";
import axiosInstance from "../../api/axiosInstance";
import TypingAnimation from "../TypingAnimation/TypingAnimation";
import { IoIosSend } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { MdMinimize } from "react-icons/md";

const Chatbot = ({ setIsChatbotOpen }) => {
  const [userMessage, setUserMessage] = useState("");
  const [conversation, setConversation] = useState([]);
  const [selectedCategoryItems, setSelectedCategoryItems] = useState([]);
  const [questionAnswer, setQuestionAnswer] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [show, setShow] = useState("category");
  const [categories, setCategories] = useState([]);
  const [isClicked, setIsClick] = useState(false);
  const [userId, setUserId] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const chatbotRef = useRef();

  const messageHandler = (option) => {
    setUserMessage(option);
  };

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

    if (selectedCategory) {
      setSelectedCategoryItems(selectedCategory.items);
    } else {
      console.log("Category not found:", categoryName);
    }

    if (show === "category") {
      setShow("items");
    }
    const updatedConversation = [
      ...conversation,
      { type: "user", text: categoryName },
    ];
    setConversation(updatedConversation);
    setUserMessage("");
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleQuestionClick = (index) => {
    const selectedQuestion = selectedCategoryItems[index];
    const updatedConversation = [
      ...conversation,
      { type: "user", text: selectedQuestion?.question },
    ];
    setQuestionAnswer(selectedQuestion);
    setConversation(updatedConversation);
    setUserMessage("");
    setCurrentStep((prevStep) => prevStep + 1);
  };

  useEffect(() => {
    if (!isClicked) {
      setConversation((prevConversation) => [
        ...prevConversation,
        {
          type: "chatbot",
          text: "Hi, I'm the Green School Assistant, I'm here to help you get the right quote",
        },
        {
          type: "chatbot",
          text: "Please choose a category that I can help you!",
        },
      ]);
      setIsClick(true);
    } else {
      // Check if questions exist and currentStep is within the valid range
      if (selectedCategoryItems && currentStep > 1) {
        setConversation((prevConversation) => [
          ...prevConversation,
          {
            type: "chatbot",
            text: questionAnswer?.answer,
          },
        ]);
      }
    }
  }, [currentStep, selectedCategoryItems]);

  const minimizeChatbotHandler = () => {
    const chatbotElement = chatbotRef.current;
    const currentHeight = parseFloat(getComputedStyle(chatbotElement).height);
    chatbotElement.style.height = currentHeight === 435 ? "0" : "435px";
  };
  useEffect(() => {
    // Scroll to the bottom of the chat body when the conversation changes
    const chatBody = chatbotRef.current.querySelector(`.${styles.body}`);
    chatBody.scrollTop = chatBody.scrollHeight;
  }, [conversation]);

  const sendMessageHandler = (e) => {
    e.preventDefault();
    const updatedConversation = [
      ...conversation,
      { type: "user", text: userMessage },
    ];
    setConversation(updatedConversation);
    setUserMessage("");
    setCurrentStep((prevStep) => prevStep + 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Chat with us</h2>
        <div className={styles.header_controls}>
          <button onClick={minimizeChatbotHandler}>
            <MdMinimize color="white" size={22} />
          </button>
          <button
            onClick={() => {
              setIsChatbotOpen(false);
            }}
          >
            <MdClose color="white" size={22} />
          </button>
        </div>
      </div>
      <div className={styles.body_container} ref={chatbotRef}>
        <div className={styles.body}>
          {isTyping && <TypingAnimation />}
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
          <form onSubmit={sendMessageHandler}>
            {isLoading ? (
              <span class="loader"></span>
            ) : (
              <div className={styles.choices}>
                {show === "category"
                  ? categories?.map((answer, index) => (
                      <div
                        onClick={() => handleCategoryClick(answer)}
                        key={index}
                        className={styles.choice}
                      >
                        <label for={index}>{answer}</label>
                      </div>
                    ))
                  : selectedCategoryItems?.map((item, index) => (
                      <div
                        onClick={() => handleQuestionClick(index)}
                        key={index}
                        className={styles.choice}
                      >
                        <label for={index}>{item.question}</label>
                      </div>
                    ))}
              </div>
            )}
          </form>
        </div>
        <form onSubmit={sendMessageHandler} className={styles.form}>
          {/* <div className={styles.form_input_section}>
            <input
              type="text"
              placeholder="Type here"
              value={userMessage}
              required
              onChange={messageHandler}
            />
            <button type="submit">
              <IoIosSend color="white" size={22} />
            </button>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
