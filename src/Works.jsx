import React from 'react'
import './works.css'; // Make sure this file exists
import logo from './assets/find-my-dr.png';
import logo1 from './assets/ibm.jpg'
import logo2 from './assets/e-commerce.png'
import logo3 from './assets/tic-tac-toe.png'
import logo4 from './assets/bace.png'
import logo5 from './assets/youtube.png'
import logo6 from './assets/text_to_sql.png'
import logo7 from './assets/medical_chatbot.png'
import logo8 from './assets/invoice_extractor.png'
import logo9 from './assets/mcq_generator.png'



function Works() {
  return (
    <div id="about" className="about-section" style={{ marginTop: "20px" }} data-aos="fade-down">
      <h2 className="section-title" data-aos="fade-down">Works</h2>
      <div className="works-container" >

        <div className="work-card" data-aos="fade-down">
          <div className="work-image">
            <img src={logo6} alt="Text To SQL GenAI" />
          </div>
          <div className="work-content">
            <h3 className="work-title">Text To SQL GenAI</h3>
            <p className="work-description">
              Text To SQL Gen AI & Database Architect is a python-based web application that translates natural language English questions into executable SQL queries using Google's modern Gemini 2.5 Flash model. Powered by Streamlit, the application serves as a complete database manager, featuring dynamic schema detection to query any table, a visual table designer to construct custom schemas, a dynamic row inserter form, and a drag-and-drop CSV dataset uploader—bridging the gap between non-technical users and database administration.
              <br />
              GitHub: <a href='https://github.com/ShreyaP-19/TextToSQLGenAI'>Text To SQL GenAI</a> | Live Link: <a href='https://huggingface.co/spaces/ShreyaP1908/TextToSQLGenAI' target='_blank' rel='noopener noreferrer'>Live Link</a>
            </p>
          </div>
        </div>

        <div className="work-card" data-aos="fade-down">
          <div className="work-image">
            <img src={logo7} alt="Medical Chatbot using Llama2" />
          </div>
          <div className="work-content">
            <h3 className="work-title">Medical Chatbot using Llama2</h3>
            <p className="work-description">
              An End-to-End medical chatbot web application built with Llama2, LangChain, and Flask that retrieves relevant medical information from a Pinecone vector database to answer user queries. It uses a quantized Llama-2-7B model to generate responses based on context retrieved from medical documents. When a user asks a question, the system retrieves relevant context from the database and feeds it into a quantized model to generate a precise, natural response, delivering an interactive health-assistant interface.
              <br />
              GitHub: <a href='https://github.com/ShreyaP-19/Medical-Chatbot-using-Llama2'>Medical-Chatbot-using-Llama2</a>
            </p>
          </div>
        </div>

        <div className="work-card" data-aos="fade-down">
          <div className="work-image">
            <img src={logo8} alt="Invoice Extractor using Gemini" />
          </div>
          <div className="work-content">
            <h3 className="work-title">Invoice Extractor using Gemini</h3>
            <p className="work-description">
              Invoice Extractor using Gemini is a Streamlit-based web application designed to analyze and extract data from invoices using Google's Gemini 2.5 Flash multimodal AI model. Users can upload invoice images in JPG, JPEG, or PNG format and input custom natural language queries (such as asking for specific line items, total amounts, billing dates, or vendor details) to get instant, context-aware answers. Built with Python, it integrates the modern google-genai SDK and utilizes python-dotenv for secure environment variable management, offering a clean, lightweight, and interactive interface for automated document analysis.
              <br></br>
              GitHub: <a href='https://github.com/ShreyaP-19/Invoice-extractor-using-Gemini'>Invoice-extractor-using-Gemini</a> | Live Link: <a href='https://huggingface.co/spaces/ShreyaP1908/Invoice-extractor-using-Gemini' target='_blank' rel='noopener noreferrer'>Live Link</a>
            </p>
          </div>
        </div>

        <div className="work-card" data-aos="fade-down">
          <div className="work-image">
            <img src={logo9} alt="MCQ Generator" />
          </div>
          <div className="work-content">
            <h3 className="work-title">MCQ Generator</h3>
            <p className="work-description">
              Developed an AI-powered Multiple-Choice Question (MCQ) Generator using LangChain and OpenAI to automate educational content creation. Built with a responsive Streamlit front-end, the application allows users to upload PDF or TXT files, specify subjects, and customize the difficulty levels (e.g., Simple, Intermediate, Advanced) and number of questions. It leverages sequential chain prompting to process raw text, generates structured JSON outputs parsed into clean, interactive tables, and provides automated, AI-driven reviews of the generated quizzes.
              <br></br>
              GitHub: <a href='https://github.com/ShreyaP-19/MCQGen'>MCQ_Generator</a>
            </p>
          </div>
        </div>

        <div className="work-card" data-aos="fade-down">
          <div className="work-image">
            <img src={logo4} alt="BACE-1 Prediction" />
          </div>
          <div className="work-content">
            <h3 className="work-title">BACE-1 Inhibitor Prediction by Fusing Graph and Sequence Encoder Representations</h3>
            <p className="work-description">
              Developed an AI-driven drug discovery system to predict BACE-1 inhibitors, which are potential therapeutic candidates for Alzheimer's disease. The project combines Graph Neural Networks (GNNs) and the ChemBERTa transformer model to leverage both molecular structural information and chemical sequence representations. SMILES strings were converted into molecular graphs, and feature fusion techniques were employed to integrate graph-based and transformer-generated embeddings. The model performs both inhibitor classification and pIC50 value prediction, enabling efficient virtual screening and supporting early-stage drug discovery efforts.
              <br></br>
              GitHub: <a href='https://github.com/ShreyaP-19/bace1-inhibitionPrediction'>bace1-inhibitionPrediction</a> | Live Link: <a href='https://bace1-inhibition-prediction.vercel.app/' target='_blank' rel='noopener noreferrer'>Live Link</a>
            </p>
          </div>
        </div>

        <div className="work-card" data-aos="fade-down">
          <div className="work-image">
            <img src={logo5} alt="YouTube Dashboard" />
          </div>
          <div className="work-content">
            <h3 className="work-title">YouTube Channel Intelligence Dashboard for Performance Analytics with Audience Engagement Insights</h3>
            <p className="work-description">
              Developed a full-stack YouTube Analytics Dashboard using Python, Streamlit, SQLite, Plotly, and YouTube Data API v3 to analyze channel performance, video engagement, and growth trends. The platform provides interactive visualizations, channel comparison, AI-driven strategic insights, advanced filtering, and automated PDF report generation. Implemented data extraction, storage, analytics, and reporting modules to help content creators and marketers make data-driven decisions for improving audience engagement and channel growth.
              <br></br>
              GitHub: <a href='https://github.com/ShreyaP-19/Youtube_analytics_dashboard'>Youtube_analytics_dashboard</a> | Live Link: <a href='https://huggingface.co/spaces/ShreyaP1908/Youtube_analytics_dashboard' target='_blank' rel='noopener noreferrer'>Live Link</a>
            </p>
          </div>
        </div>

        <div className="work-card" data-aos="fade-down">
          <div className="work-image">
            <img src={logo} alt="Project 1" />
          </div>
          <div className="work-content">
            <h3 className="work-title">Find-My-Dr</h3>
            <p className="work-description">
              Developed a full-stack doctor-patient appointment platform using the MERN stack with secure, role-based authentication for patients, doctors, and hospital admins. Implemented real-time scheduling features, including per-slot limits and booking restrictions. Designed dynamic admin dashboards to manage doctors, departments, and appointments. Utilized MongoDB for backend storage and React for building a responsive and user-friendly frontend interface.
              <br></br>
              GitHub: <a href='https://github.com/ShreyaP-19/Find-My-Dr '>Find-My-Dr </a> | Live Link: <a href='https://find-my-dr.vercel.app/' target='_blank' rel='noopener noreferrer'>Live Link</a>
            </p>
          </div>
        </div>
        <div className="work-card" data-aos="fade-down">
          <div className="work-image">
            <img src={logo1} alt="Project 2" />
          </div>
          <div className="work-content">
            <h3 className="work-title">Mental State Analyzer</h3>
            <p className="work-description">
              Developed an AI-powered mental health detection platform using NLP to analyze social media-style posts. Integrated IBM Watson NLU for real-time mood classification into categories such as Positive and Negative. Enabled personalized content recommendations to support user well-being and early intervention. Designed a streamlined, user-friendly interface for quick text input and instant emotional feedback.
              <br></br>
              GitHub: <a href='https://github.com/ShreyaP-19/redit-post-sentiment-analysis'>Mental State Analyzer</a> | Live Link: <a href='https://redit-post-sentiment-analysis-1.onrender.com/' target='_blank' rel='noopener noreferrer'>Live Link</a>
            </p>
          </div>
        </div>

        <div className="work-card" data-aos="fade-down">
          <div className="work-image">
            <img src={logo2} alt="Project 2" />
          </div>
          <div className="work-content">
            <h3 className="work-title">E-Commerce Platform</h3>
            <p className="work-description">
              A full-stack e-commerce application built with the MERN stack, allowing users to browse and purchase products. Includes secure user authentication, cart management, and order processing. Users can also register as sellers to add products and manage their own store or business through a dedicated dashboard.
              <br></br>
              GitHub: <a href='https://github.com/ShreyaP-19/E-Commerce-Platform'>E-Commerce-Platform</a>
            </p>
          </div>
        </div>
        <div className="work-card" data-aos="fade-down">
          <div className="work-image">
            <img src={logo3} alt="Project 2" />
          </div>
          <div className="work-content">
            <h3 className="work-title">Tic-Tac-Toe</h3>
            <p className="work-description">
              A simple browser-based Tic Tac Toe game built using vanilla JavaScript, HTML, and CSS. It allows two users to take alternate turns on the same device. The game detects winning combinations, disables boxes after a win, and includes reset and new game options with a clean UI.
              <br></br>
              GitHub: <a href='https://github.com/ShreyaP-19/TicTacToe/blob/main/tic.js'>TicTacToe</a>
            </p>
          </div>
        </div>



      </div>
    </div>
  )
}

export default Works
