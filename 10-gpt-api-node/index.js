// PARTE 1 QUE SÓ FAZ A REQUISIÇÃO A API DO CHATGPT

// import OpenAI from "openai";

// const openai = new OpenAI({
//     organization: "org-3W1346Cr1v3uVR3yDPiYb4XI",
//     apiKey: "sk-proj-9TeFdjtORkTayFt9FgCQT3BlbkFJ8Vb9AZ3tp3fLQLqK7QRD",
// });

// const chatCompletion = await openai.chat.completions.create({
//     model: "gpt-3.5-turbo",
//     messages: [
//         {"role": "user", "content": "Write the first line of a story about a magic backpack."}
//     ]
// });

// console.log(chatCompletion.choices[0].message);





// PARTE 2 -- ESTRUTURA TODO O BACK-END COM API LOCAL COM EXPRESS E REQUISIÇÕES AO CHATGPT

import OpenAI from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

// CONFIGURAÇÃO DO OPENAI / GPT COM APIKEY --- SE FOSSE GOOGLE AI (GEMINI) SÓ TROCAR!!!
const openai = new OpenAI({
    organization: "org-3W1346Cr1v3uVR3yDPiYb4XI",
    apiKey: "sk-proj-9TeFdjtORkTayFt9FgCQT3BlbkFJ8Vb9AZ3tp3fLQLqK7QRD",
});

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post("/sendMessage", async (req, res) => {
    
    const { messages } = req.body;

    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {"role": "system", "content": "Seja o John Lennon"},
            ...messages
        ]
    });

    res.json({
        chat_completion: chatCompletion.choices[0]
    })
})

app.listen(port, () => {
    console.log(`Exemplo de app consumindo http://localhost:${port}`);
});