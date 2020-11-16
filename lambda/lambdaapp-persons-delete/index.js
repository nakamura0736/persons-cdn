const AWS = require('aws-sdk')
const dynamo = new AWS.DynamoDB.DocumentClient()

exports.handler = (event, context, callback) => {
    console.log("event");
    console.log(event);
    const params = {
        'TableName': '[DynamoDBテーブル名]',
        'Key':{
            'id': event.id
        }
    }
    
    console.log("Attempting a conditional delete...");
    dynamo.delete(params, function(err, data) {
        if (err) {
            console.error("Unable to delete item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("DeleteItem succeeded:", JSON.stringify(data, null, 2));
        }
    });
};