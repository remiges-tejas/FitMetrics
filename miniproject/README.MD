version: '3.8'

services:
  mysql:
    image: mysql:latest
    container_name: mysql-db
    environment:
      MYSQL_ROOT_PASSWORD: rootpassword
      MYSQL_DATABASE: docker_bmi_db
      MYSQL_USER: tejas
      MYSQL_PASSWORD: mailpass
    ports:
      - "3306:3306"
    volumes:
      - mysql_data:/var/lib/mysql

  app:
    build:
      context: .
      dockerfile: Dockerfile  # Ensure this points to your Dockerfile
    container_name: springboot-app
    ports:
      - "8080:8080"
    depends_on:
      - mysql
    environment:
      SPRING_DATASOURCE_URL: jdbc:mysql://mysql:3306/docker_bmi_db
      SPRING_DATASOURCE_USERNAME: tejas
      SPRING_DATASOURCE_PASSWORD: mailpass

volumes:
  mysql_data: