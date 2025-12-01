import json
from typing import Dict, Any
from pydantic import BaseModel, EmailStr, Field, ValidationError

class ContactRequest(BaseModel):
    '''Contact form submission model'''
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    message: str = Field(..., min_length=10, max_length=1000)

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Process contact form submissions from website
    Args: event - dict with httpMethod, body, headers
          context - object with request_id, function_name attributes
    Returns: HTTP response dict with statusCode, headers, body
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    body_str = event.get('body', '{}')
    
    try:
        body_data = json.loads(body_str)
        contact_data = ContactRequest(**body_data)
    except ValidationError as e:
        return {
            'statusCode': 422,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({
                'error': 'Validation failed',
                'details': e.errors()
            }, ensure_ascii=False)
        }
    except json.JSONDecodeError:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({'error': 'Invalid JSON'}, ensure_ascii=False)
        }
    
    result = {
        'success': True,
        'message': 'Заявка принята',
        'data': {
            'name': contact_data.name,
            'email': contact_data.email,
            'request_id': context.request_id
        }
    }
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'isBase64Encoded': False,
        'body': json.dumps(result, ensure_ascii=False)
    }