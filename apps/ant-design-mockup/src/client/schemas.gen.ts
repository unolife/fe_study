// This file is auto-generated by @hey-api/openapi-ts

export const $HTTPValidationError = {
    title: 'HTTPValidationError',
    type: 'object',
    properties: {
        detail: {
            title: 'Detail',
            type: 'array',
            items: {
                '$ref': '#/components/schemas/ValidationError'
            }
        }
    }
} as const;

export const $Item = {
    title: 'Item',
    required: ['name', 'price'],
    type: 'object',
    properties: {
        name: {
            title: 'Name',
            type: 'string'
        },
        price: {
            title: 'Price',
            type: 'number'
        }
    }
} as const;

export const $ResponseMessage = {
    title: 'ResponseMessage',
    required: ['message'],
    type: 'object',
    properties: {
        message: {
            title: 'Message',
            type: 'string'
        }
    }
} as const;

export const $ValidationError = {
    title: 'ValidationError',
    required: ['loc', 'msg', 'type'],
    type: 'object',
    properties: {
        loc: {
            title: 'Location',
            type: 'array',
            items: {
                anyOf: [
                    {
                        type: 'string'
                    },
                    {
                        type: 'integer'
                    }
                ]
            }
        },
        msg: {
            title: 'Message',
            type: 'string'
        },
        type: {
            title: 'Error Type',
            type: 'string'
        }
    }
} as const;