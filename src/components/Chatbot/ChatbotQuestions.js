import axiosInstance from '../../api/axiosInstance'



const chatbotQuestion= [
    {
        id:100,
        question:'Hello! Please choose a category.',
        questionNumber:100,
        questionType:'subjective'

    },
    {
        id:101,
        question:'Thank you! Please enter your phone number.',
        questionNumber:101,
        questionType:'subjective'

    },
    {
        id:102,
        question:'Thank you for providing your phone number. Please enter your email.',
        questionNumber:102,
        questionType:'subjective'

    },
    {
        id:103,
        question:'Thank you for providing your email. Please provide your preferred mode of contact',
        questionNumber:103,
        questionType:'subjective'

    }
]


export const fetchChatQuestions = async (setQuestions) => {
  try {
    const response = axiosInstance.get('chatquestions/list');
    const newChatbotQuestion = [...chatbotQuestion, ...response.data.chatQuestions]
    setQuestions(newChatbotQuestion);
    console.log("hiiiiii",response);
  } catch (error) {
    console.error(error);
  }
};


// export const fetchChatQuestions = async (setQuestions) => {
//   try {
//     const response = await fetch('https://admin.goldenwoods.in/api/chatquestion/list');
//     if (!response.ok) {
//       throw new Error('Failed to fetch chat questions');
//     }
//     const responseData = await response.json(); // Assuming response is JSON
//     const newChatbotQuestions = [...chatbotQuestion, ...responseData.chatQuestions]; // Adjust this according to the actual structure of the response
//     setQuestions(newChatbotQuestions);
//     console.log(responseData);
//   } catch (error) {
//     console.error(error);
//   }
// };



