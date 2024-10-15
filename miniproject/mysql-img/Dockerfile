# Use the official MySQL image as a base
FROM mysql:8.0

# Set environment variables for MySQL
ENV MYSQL_ROOT_PASSWORD=mailpass
ENV MYSQL_DATABASE=docker_bmi_db
ENV MYSQL_USER=tejas
ENV MYSQL_PASSWORD=mailpass

# Copy the initialization script into the container
COPY init.sql /docker-entrypoint-initdb.d/

# Expose the MySQL port
EXPOSE 3306