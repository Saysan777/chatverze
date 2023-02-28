// interface is just a way to define structure to object in TS. It is used to provide what properties an object should have and what will bt the type of those properties as well.

interface Message {
    text: string;
    createdAt: admin.firestore.Timestamp;
    user: {
        _id: string;
        name: string;
        avatar: string;
    };
}