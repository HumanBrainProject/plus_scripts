from dotenv import load_dotenv
load_dotenv("../common/.env")
from openid_http_client.auth_client.simple_refresh_token_client import SimpleRefreshTokenClient
from openid_http_client.http_client import HttpClient
from os import environ as env

def init_http_client():
    auth_client = SimpleRefreshTokenClient(env['OPENID_HOST'], env['CLIENT_SECRET'], env['CLIENT_ID'], env['REFRESH_TOKEN'], refresh_token_method='post')
    http_client = HttpClient(env['BASE_URL'], env['API_URL'], auth_client=auth_client)
    return http_client

api = init_http_client()