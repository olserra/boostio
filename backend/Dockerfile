# Use the official Python image as the base image
FROM python:3.8-alpine

# Set the working directory
WORKDIR /app

# Create and activate a virtual environment
RUN python -m venv venv
ENV PATH="/app/venv/bin:$PATH"

# Copy the Python dependencies file to the working directory
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY . .

# Expose the port on which the Flask app will run
EXPOSE 5000

# Start the Flask app
CMD ["python", "app.py"]
