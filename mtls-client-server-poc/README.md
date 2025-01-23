# Mutual TLS (mTLS) Python Server and Client

This project demonstrates how to set up a mutual TLS (mTLS) authentication system using Python's `http.server` and `requests` libraries. The mTLS setup ensures that both the server and client authenticate each other using certificates issued by a common Certificate Authority (CA).

## Requirements

- Python 3.x
- Homebrew (for installing OpenSSL if necessary)
- OpenSSL (installed using Homebrew if not available)

### Dependencies

The following Python dependencies are required. You can install them using `requirements.txt`.

```
requests
```

To install the required Python packages, run:

```bash
pip install -r requirements.txt
```

### Install OpenSSL using Homebrew (for macOS users)

If OpenSSL is not available or is an older version, you can install it using Homebrew in your user environment, even without admin rights. To install OpenSSL via Homebrew, follow these steps:

1. Install Homebrew (if not installed):

   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. Install OpenSSL using Homebrew:

   ```bash
   brew install openssl
   ```

3. Set the necessary environment variables to use Homebrew-installed OpenSSL (add this to your `~/.bash_profile` or `~/.zshrc` file):

   ```bash
   export PATH="/opt/homebrew/bin:$PATH"
   export LDFLAGS="-L/opt/homebrew/opt/openssl@3/lib"
   export CPPFLAGS="-I/opt/homebrew/opt/openssl@3/include"
   export PKG_CONFIG_PATH="/opt/homebrew/opt/openssl@3/lib/pkgconfig"
   ```

4. After editing the file, apply the changes:

   ```bash
   source ~/.bash_profile  # or source ~/.zshrc depending on your shell
   ```

5. Verify OpenSSL installation:

   ```bash
   openssl version
   ```

   You should see the installed version, e.g., `OpenSSL 3.0.1`.

## Folder Structure

```bash
./
├── certs
│   ├── ca
│   │   ├── ca.crt       # CA certificate
│   │   └── ca.key       # CA private key
│   ├── server
│   │   ├── server.crt   # Server certificate
│   │   ├── server.csr   # Server certificate signing request
│   │   └── server.key   # Server private key
│   ├── client
│   │   ├── client.crt   # Client certificate
│   │   ├── client.csr   # Client certificate signing request
│   │   └── client.key   # Client private key
│   └── conf
│       ├── openssl.cnf          # Configuration file for server
│       └── openssl_client.cnf   # Configuration file for client
├── client.py           # Python client script
├── server.py           # Python server script
├── README.md           # This documentation file
└── requirements.txt    # Required Python libraries
```

## How to Generate Certificates

### Notes

- **Certificate Authority (CA)**: This project uses a self-signed CA to sign both the server and client certificates. The CA certificate (`ca.crt`) and private key (`ca.key`) are used to sign the client and server CSRs (Certificate Signing Requests). These files must be kept secure and private.
- **Server and Client Certificates**: The server and client certificates are signed by the CA to ensure mutual trust between the two. Both sides will use the CA certificate to verify each other's identity.
- **Configuration Files**: 
  - `openssl.cnf` is used to generate the server certificate and includes settings such as `subjectAltName` for `localhost`.
  - `openssl_client.cnf` is used to generate the client certificate and includes settings for the client-specific configuration.

### 1. Generate CA (Certificate Authority) Certificate

Run these commands to generate the CA private key and self-signed certificate:

```bash
# Create CA key
openssl genrsa -out ./certs/ca/ca.key 2048

# Create self-signed CA certificate
openssl req -x509 -new -nodes -key ./certs/ca/ca.key -sha256 -days 3650 -out ./certs/ca/ca.crt
```

### 2. Generate Server Certificate

To generate the server certificate, use the `openssl.cnf` configuration file:

```bash
# Generate server private key
openssl genrsa -out ./certs/server/server.key 2048

# Create a certificate signing request (CSR)
openssl req -new -key ./certs/server/server.key -out ./certs/server/server.csr -config ./certs/conf/openssl.cnf

# Sign the server CSR with the CA certificate to generate the server certificate
openssl x509 -req -in ./certs/server/server.csr -CA ./certs/ca/ca.crt -CAkey ./certs/ca/ca.key -CAcreateserial -out ./certs/server/server.crt -days 365 -sha256 -extensions req_ext -extfile ./certs/conf/openssl.cnf
```

### 3. Generate Client Certificate

To generate the client certificate, use the `openssl_client.cnf` configuration file:

```bash
# Generate client private key
openssl genrsa -out ./certs/client/client.key 2048

# Create a certificate signing request (CSR)
openssl req -new -key ./certs/client/client.key -out ./certs/client/client.csr -config ./certs/conf/openssl_client.cnf

# Sign the client CSR with the CA certificate to generate the client certificate
openssl x509 -req -in ./certs/client/client.csr -CA ./certs/ca/ca.crt -CAkey ./certs/ca/ca.key -CAcreateserial -out ./certs/client/client.crt -days 365 -sha256 -extensions req_ext -extfile ./certs/conf/openssl_client.cnf
```

## Running the Server

To run the mTLS server, execute the following command:

```bash
python3 server.py
```

The server will start on `https://localhost:8443` and will require a valid client certificate to authenticate clients.

## Running the Client

Once the server is running, you can execute the client script to connect to the server using mutual TLS authentication:

```bash
python3 client.py
```

If the client presents a valid certificate signed by the CA, the server will respond with:

```
Success: Hello, mutual TLS client!
```

If the client does not provide a valid certificate, the server will respond with:

```
Failed: 401 - Unauthorized
```

---

### Example `requirements.txt`

```txt
requests
```

---

### Notes on File Permissions

- **Private keys**: It is crucial to protect the private keys (`ca.key`, `server.key`, `client.key`). You can adjust the permissions to ensure that only the owner has access to them by running:

  ```bash
  chmod 600 ./certs/ca/ca.key ./certs/server/server.key ./certs/client/client.key
  ```

