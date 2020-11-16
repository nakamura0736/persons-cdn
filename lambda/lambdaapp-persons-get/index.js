const AWS = require('aws-sdk')
const dynamo = new AWS.DynamoDB.DocumentClient()


exports.handler = (event, context, callback) => {
    const httpMethod = event.httpMethod
    const params = {
        'TableName': '[DynamoDBテーブル名]'
    }
    dynamo.scan(params, function (err, data) {
        const response = {
            statusCode: 200,
            body: JSON.stringify(data.Items)
        }
        callback(null, response)
    })
};