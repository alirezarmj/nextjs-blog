import { MongoClient } from "mongodb";

async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, message, name } = req.body;  //Extract message Body...

        //Validation form inputs in Server Side...
        if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
            res.status(422).json({ message: 'Invalid input' })
            return
        }

        const newMessage = { name, email, message }
        //Connect to Database
        let client;
        //  const contactString=`mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.ctkodcc.mongodb.net/?retryWrites=true&w=majority`
      
         try {
            client = await MongoClient.connect('mongodb+srv://javid:DjtztDJzNVrswGmF@cluster0.ctkodcc.mongodb.net/?retryWrites=true&w=majority')
            // client = await MongoClient.connect(contactString)
        } catch (error) {
            res.status(500).json({ message: 'Could not connect to DB' })
            return
        }
        const db = client.db()
        //Storing data in Database
        try {
            const result = await db.collection('messages').insertOne(newMessage);
            newMessage.id = result.insertedId;
        } catch (error) {
            client.close()
            res.status(500).json({ message: 'storing message failed !' })
            return
        }
        client.close();
        
        res.status(201).json({ message: "Successfully saved message", sendedMessage: newMessage })
    }
}

export default handler;