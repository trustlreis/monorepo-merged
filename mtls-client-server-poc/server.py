import ssl
import http.server

# Define the request handler for the server
class SimpleHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Check if the client is authorized (i.e., has a valid client certificate)
        if self.connection.getpeercert():
            self.send_response(200)
            self.end_headers()
            self.wfile.write(b'Hello, mutual TLS client!')
        else:
            self.send_response(401)
            self.end_headers()
            self.wfile.write(b'Unauthorized')

# Server address and port
server_address = ('localhost', 8443)

# Create the HTTP server
httpd = http.server.HTTPServer(server_address, SimpleHTTPRequestHandler)

# Configure SSL context for mutual TLS
ssl_context = ssl.create_default_context(ssl.Purpose.CLIENT_AUTH)

# Load server certificate and key
ssl_context.load_cert_chain(certfile='./certs/server/server.crt', keyfile='./certs/server/server.key')

# Load the CA certificate (this is to validate the client certificate)
ssl_context.load_verify_locations('./certs/ca/ca.crt')

# Require client certificate
ssl_context.verify_mode = ssl.CERT_REQUIRED

# Wrap the HTTP server socket with SSL for mTLS
httpd.socket = ssl_context.wrap_socket(httpd.socket, server_side=True)

# Start the HTTPS server with mTLS
print("Starting server on https://localhost:8443...")
httpd.serve_forever()
