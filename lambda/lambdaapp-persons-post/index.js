const AWS = require('aws-sdk')
const dynamo = new AWS.DynamoDB.DocumentClient()

exports.handler = (event, context, callback) => {
    console.log("event");
    console.log(event);
    const params = {
        'TableName': '[DynamoDBテーブル名]',
        'Item': {
            'id': event.id,
            'name': event.name,
            'description': event.description
        }
    }
    dynamo.put(params, function(err, data) {
        if (err) {
            console.log('error')
        } else {
            console.log('success')
            const response = {
                statusCode: 200,
                body: JSON.stringify(data)
            }
            context.done(null, response)
        }
    })
};