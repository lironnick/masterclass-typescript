interface ImailTo {
    name: string;
    email: string;
}

interface ImailMessage {
    subject: string;
    body: string;
    attachment?: string[];
}

// DTO = Data Transfer Object (DDD)
interface IMessageDTO {
    to: ImailTo,
    message: ImailMessage;
}

class EmailService {

    // sendMail(to: ImailTo, message: ImailMessage) {
    //     console.log(`email enviado para ${to.name}: ${message.subject}`);
    // }

    sendMail({ to,message } : IMessageDTO) {
        console.log(`email enviado para ${to.name}: ${message.subject}`);
    }
}

export default EmailService;