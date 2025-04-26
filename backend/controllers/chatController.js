const getChatsController = async (req, res) => {
    try{
        const chats = [
            { id: 1, message: 'Hello world' },
            { id: 2, message: 'How are you?' },
        ];

        res.status(200).json({
            success: true,
            data: chats,
        });
    }
    catch(error){
        next(error);
    }
};

const getSingleChatController = async(req, res) => {
    try{
        const chatId = req.params.id;
        const chats = [
            { id: 1, message: 'Hello world' },
            { id: 2, message: 'How are you?' },
        ];
        
        const chat = chats.find((chat) => (chat.id === parseInt(chatId)));
        if(!chat){
            const error = new Error(`Chat with id ${chatId} not found`);
            error.statusCode = 404;
            return next(error);
        }
        res.status(200).json({
            success: true,
            data: chat,
        })
    }
    catch(error){
        next(error);
    }
};

module.exports = {getChatsController, getSingleChatController};