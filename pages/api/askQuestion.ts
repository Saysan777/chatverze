import type { NextApiRequest, NextApiResponse } from "next";
import query from "../../utils/queryApi";
import admin from 'firebase-admin'
import { adminDb } from "../../firebaseAdmin";

type Data = {
    answer: string
}

// function(req,res) -> function (req:type, res:type) {}
export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { prompt, chatId, model, session } =req.body;
    if(!prompt) {
        res.status(400).json({ answer: 'Pleases provide a prompt'});
        return;
    }

    if(!chatId) {
        res.status(400).json({ answer: 'Pleases provide a valid chat ID!'});
        return;
    }

    // chatGpt query
    const response = await query(prompt, chatId, model);

    const message: Message = {
        text: response || 'chatVerze was unable to find an answer!',
        createdAt: admin.firestore.Timestamp.now(),
        user: {
            _id: 'ChatVerze',
            name:'chatVerze',
            avatar: 'https://links.papareact.com/89k',
        },
    }
    // old format of inserting the doc in collection -> concept clear to understand collection-> doc
    await adminDb.collection('users').doc(session?.user?.email).collection('chats').doc(chatId).collection('messages').add(message)

    res.status(200).json({ answer: message.text });
}
