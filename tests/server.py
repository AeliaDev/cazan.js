import os
from http.server import BaseHTTPRequestHandler, HTTPServer


class Handler(BaseHTTPRequestHandler):

    def do_GET(self):
        try:
            if self.path == '/':
                filename = 'index.html'
                content_type = 'text/html'
            elif self.path == '/app.js':
                filename = 'app.js'
                content_type = 'text/javascript'
            elif self.path == '/cazan.min.js':
                filename = '../dist/cazan.min.js'
                content_type = 'text/javascript'
            else:
                self.send_response(404)
                self.end_headers()
                return

            with open(filename, 'rb') as file:
                content = file.read()

            self.send_response(200)
            self.send_header('Content-type', content_type)
            self.end_headers()
            self.wfile.write(content)

        except Exception as e:
            self.send_response(500)
            self.end_headers()
            self.wfile.write(str(e).encode())


if __name__ == '__main__':
    try:
        server = HTTPServer(('localhost', 8080), Handler)
        print('Server started at http://localhost:8080/')
        server.serve_forever()
    except KeyboardInterrupt:
        print('Server stopped.')
        