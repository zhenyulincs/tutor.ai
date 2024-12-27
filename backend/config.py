import os
from dotenv import load_dotenv

env = os.getenv('FLASK_ENV', 'production')
if env == 'development':
    load_dotenv('.env.development')
elif env == 'production':
    load_dotenv('.env.production')
else:
    raise ValueError("Invalid FLASK_ENV value")
