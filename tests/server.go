package main

import (
    "fmt"
    "log"
    "net/http"
    "os"
)

func indexHandler(w http.ResponseWriter, r *http.Request) {
    content, err := os.ReadFile("index.html")
    if err != nil {
        log.Fatal(err)
    }
    w.Write([]byte(string(content)))
}

func jsHandler(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "text/javascript")
    content, err := os.ReadFile("app.js")
    if err != nil {
        log.Fatal(err)
    }
    w.Write([]byte(string(content)))
}

func cazanJsHandler(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "text/javascript")
    content, err := os.ReadFile("../dist/cazan.min.js")
    if err != nil {
        log.Fatal(err)
    }
    w.Write([]byte(string(content)))
}

func main() {
    http.HandleFunc("/", indexHandler)
    http.HandleFunc("/app.js", jsHandler)
    http.HandleFunc("/cazan.min.js", cazanJsHandler)
    fmt.Println("Server started at http://localhost:8080/")
    http.ListenAndServe(":8080", nil)
}