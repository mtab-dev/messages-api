import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Message extends Document {
    @Prop({ required: true })
    id: string;
    
    @Prop({ required: true })
    content: string;

    @Prop({ required: true })
    senderId: string;

    @Prop({ required: true })
    receiverId: string;

    @Prop({ default: Date.now })
    createdAt: Date;
}

export const MessageSchema = SchemaFactory.createForClass(Message);