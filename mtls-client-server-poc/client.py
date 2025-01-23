import requests

# Define the URL and paths to the client certificate and CA cert
url = 'https://localhost:8443'
client_cert = ('./certs/client/client.crt', './certs/client/client.key')  # Client's cert and private key
ca_cert = './certs/ca/ca.crt'  # CA cert that signed the server's certificate

# Make the GET request with mutual TLS
response = requests.get(url, cert=client_cert, verify=ca_cert)

# Print the server's response
if response.status_code == 200:
    print(f"Success: {response.text}")
else:
    print(f"Failed: {response.status_code} - {response.text}")
