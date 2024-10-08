---
tags:
  - post/medium
  - SoftwareDevelopment
  - Networking
  - Security
persona:
  - "[[🔥 Programmer]]"
  - "[[🔥 Analysist]]"
date_created: 2024-06-05
link:
  - https://berom0227.medium.com/solution-for-nginx-ssl-certificate-passphrase-issue-e723f2f45ff8
Habitus:
  - "[[◦ Knowledge]]"
  - "[[◦ Economic]]"
---
# Solution for Nginx SSL Certificate Passphrase Issue

Ensuring the seamless operation of your Nginx server, especially in automated environments like Docker, is crucial. This guide walks you through diagnosing and resolving the issue where Nginx fails to load an SSL certificate due to an encrypted key file requiring a passphrase.

## Problem Diagnosis

### Log Analysis

Reviewing the Nginx error logs reveals the following message:

```plaintext
nginx: [emerg] cannot load certificate key "/etc/ssl/certs/wildcard_eduroam_kr.key": PEM_read_bio_PrivateKey() failed
(SSL: error:1400006B:UI routines::processing error:while reading strings error:0480006D:PEM routines::problems getting password
error:07880109:common libcrypto routines::interrupted or cancelled error:07880109:common libcrypto routines::interrupted or
cancelled error:04800068:PEM routines::bad password read)
```

This error indicates that the `wildcard_eduroam_kr.key` file is encrypted and requires a passphrase, which Nginx cannot automatically provide during startup.

## Removing the Passphrase From the Key File

### Why Remove the Passphrase?

For automated environments such as Docker, manual passphrase entry during server startup is impractical. Removing the passphrase ensures Nginx can automatically load the SSL key, facilitating seamless automated deployments and operations.

### Steps to Remove the Passphrase

1. **Execute OpenSSL Command**

   Use the `openssl rsa` command to create a new key file without the passphrase:

   ```bash
   openssl rsa -in wildcard_eduroam_kr.key -out wildcard_eduroam_kr.key.no_pass
   ```

2. **Enter Passphrase**

   When prompted, enter the current passphrase for the key file:

   ```plaintext
   Enter pass phrase for wildcard_eduroam_kr.key:
   ```

   This will generate a new key file without a passphrase.

3. **Verify the New Key File**

   Ensure the new key file has been created successfully:

   ```bash
   ls -l wildcard_eduroam_kr.key.no_pass
   ```

	And, replace wildcard_eduroam_kr.key!
## Modifying Docker Compose Configuration

### Updating the `docker-compose.yml` File

Modify your `docker-compose.yml` to use the new key file without a passphrase:

```yaml
nginx:
  logging:
    driver: "json-file"
    options:
      max-size: "50m"
  environment:
    - TZ=Asia/Seoul
  image: nginx:latest
  container_name: nginx
  volumes:
    - ./nginx/nginx.conf:/etc/nginx/nginx.conf
    - ./nginx/certs/cert_wildcard.eduroam.kr.crt:/etc/ssl/certs/cert_wildcard.eduroam.kr.crt
    - ./nginx/certs/wildcard_eduroam_kr.key:/etc/ssl/certs/wildcard_eduroam_kr.key
  deploy:
    restart_policy:
      condition: unless-stopped
  ports:
    - 443:443
  networks:
    - public
    - private
```

## Rebuilding and Restarting Docker Containers

### Rebuild Docker Image and Restart Containers

Reflect the changes by rebuilding the Docker image and restarting the containers:

```bash
docker compose down
docker compose build
docker compose up -d
```

Rebuilding ensures that the new, unencrypted key file is used, as the key files are typically excluded from version control for security reasons and must be explicitly included in the build process.

## Verifying the Resolution

### Check Nginx Container Logs

Confirm that the issue is resolved by inspecting the Nginx container logs:

```bash
docker-compose logs nginx
```

### Validate Successful Startup

Ensure the Docker container is running correctly:

```bash
docker ps
```

![Docker PS Output](https://i.imgur.com/u7JY29q.png)

Finally, verify that there are no errors related to certificate loading in the logs:

```bash
docker logs [nginx-container-ID]
```

![Nginx Logs](https://i.imgur.com/0pC78qc.png)
