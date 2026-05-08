# 1. Use the official Playwright image
FROM mcr.microsoft.com/playwright/python:v1.40.0-jammy

# 2. Set the working directory
WORKDIR /app

# 3. Copy requirements from the tests folder
COPY tests/requirements.txt .

# 4. Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# 5. Copy the CONTENTS of the tests folder into /app
# This ensures server.py is at the root of /app
COPY tests/ .

# 6. Expose the port
EXPOSE 8000

# 7. Start the server
# Because we copied 'tests/' into '.', server:app is now at /app/server.py
CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8000"]