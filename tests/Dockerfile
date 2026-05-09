FROM mcr.microsoft.com/playwright/python:v1.59.0-jammy

WORKDIR /app
COPY requirements.txt .

RUN apt-get update && apt-get install -y xvfb \
    && pip install --no-cache-dir -r requirements.txt

# Copy backend files
COPY . .

ENV PORT=8000
ENV DISPLAY=:99

EXPOSE 8000

# Start Xvfb first, then run uvicorn
CMD Xvfb :99 -screen 0 1280x1024x24 & uvicorn server:app --host 0.0.0.0 --port ${PORT:-8000}
