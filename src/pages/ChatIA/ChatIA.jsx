'use client'

import React, { useState, useEffect, useRef } from 'react'
import { RiRobotLine } from 'react-icons/ri'

export default function NeonFuturisticChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { sender: 'bot', content: '¡Hola! Soy tu asistente AI del futuro. ¿En qué puedo ayudarte hoy?' }
  ])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef(null)

  const toggleChat = () => setIsOpen(!isOpen)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      setMessages([...messages, { sender: 'user', content: input }])
      setInput('')
      setTimeout(() => {
        setMessages(prev => [...prev, { sender: 'bot', content: 'Procesando tu mensaje con mi red neuronal cuántica...' }])
      }, 1000)
    }
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <div className="relative group">
          {/* Efectos neón externos */}
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-0 group-hover:opacity-75 blur-lg transition-opacity duration-500 rounded-3xl"></div>
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-500 animate-pulse rounded-3xl"></div>
          
          <div className="w-96 h-[32rem] rounded-2xl overflow-hidden shadow-2xl relative group">
            {/* Efecto neón moderno */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 opacity-0 blur-lg group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 blur-lg group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
            
            {/* Contenido del chat */}
            <div className="w-full h-full bg-black bg-opacity-90 backdrop-blur-xl rounded-2xl flex flex-col relative z-10">
              <div className="flex items-center justify-between p-4 bg-white bg-opacity-10">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <h2 className="text-white text-lg font-semibold">HENRY IA</h2>
                </div>
                <button onClick={toggleChat} className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-1 transition-colors duration-200">
                  <span className="h-5 w-5">X</span>
                  <span className="sr-only">Cerrar chat</span>
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white scrollbar-thumb-opacity-20 scrollbar-track-transparent">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[80%] p-3 rounded-2xl ${
                      message.sender === 'user' 
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white' 
                        : 'bg-white bg-opacity-10 text-white backdrop-blur-md'
                    }`}>
                      <p className="text-sm">{message.content}</p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              <form onSubmit={handleSubmit} className="p-4 bg-white bg-opacity-5 backdrop-blur-md">
                <div className="flex items-center space-x-2">
                  <input 
                    type="text"
                    placeholder="Escribe tu mensaje..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 bg-white bg-opacity-10 border-none text-white placeholder-white placeholder-opacity-50 focus:ring-2 focus:ring-blue-500 rounded-full py-2 px-4 outline-none"
                  />
                  <button 
                    type="submit" 
                    className="relative bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full p-2 transition-all duration-300 hover:from-cyan-400 hover:to-blue-400 hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] hover:scale-105 active:scale-95 overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9Ii4yIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNMCAwaDIwdjIwSDB6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative h-5 w-5 inline-flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
                      </svg>
                    </span>
                    <span className="sr-only">Enviar mensaje</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      <div className="relative group">
        {/* Efectos neón para el botón */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-0 group-hover:opacity-75 blur-lg transition-opacity duration-500 rounded-full"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-500 animate-pulse rounded-full"></div>
        <button
          onClick={toggleChat}
          className={`rounded-full w-16 h-16 ${isOpen ? 'hidden' : 'flex'} items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg transition-all duration-300 relative z-10 hover:scale-110 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]`}
          aria-label="Abrir chat"
        >
          <RiRobotLine className="h-8 w-8" />
        </button>
      </div>
    </div>
  )
}