# This uses Ubuntu 24.04 and Python 3.12
FROM mcr.microsoft.com/playwright/python:v1.45.0-noble

WORKDIR /app

COPY tests/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY tests/ .

EXPOSE 8000

CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8000"]