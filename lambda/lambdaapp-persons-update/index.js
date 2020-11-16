const AWS = require('aws-sdk')
const dynamo = new AWS.DynamoDB.DocumentClient()

exports.handler = (event, context, callback) => {
    console.log("event");
    console.log(event);
    const params = {
        'TableName': '[DynamoDBテーブル名]',
        'Key':{
            'id': event.id
        },
        UpdateExpression: "set #nm = :n, description = :d",
        ExpressionAttributeNames: {
            '#nm': 'name'  
        },
        ExpressionAttributeValues:{
            ":n":event.name,
            ":d":event.description
        },
        ReturnValues:"UPDATED_NEW"
    }
    
    console.log("Updating the item...");
    dynamo.update(params, function(err, data) {
        if (err) {
            console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
        }
    });
};