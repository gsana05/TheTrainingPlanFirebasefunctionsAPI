import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";

Object.defineProperty(exports, "__esModule", { value: true });

admin.initializeApp(functions.config().firebase);

exports.addOrRemoveGoalId = functions.https.onCall(async (data: any, context: functions.https.CallableContext) => {
    
    const userId: string = data.userId;

    if (userId === null || typeof userId === undefined) {
        return {
            errorCode: 500,
            reason: "Invalid data provided",
            success: false,
        };
    }
    else{
        return {
            errorCode: 200,
            reason: "valid user id",
            success: true,
        };
    }

    //return await doAddOrRemoveGoalId(userId);
});


