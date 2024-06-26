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
    content, err := os.ReadFile("../dist/lib/cazan.js")
    if err != nil {
        log.Fatal(err)
    }
    w.Write([]byte(string(content)))
}

func cazanMinJsHandler(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "text/javascript")
    content, err := os.ReadFile("../dist/lib/cazan.min.js")
    if err != nil {
        log.Fatal(err)
    }
    w.Write([]byte(string(content)))
}

func pngHandler(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "image/png")
    content, err := os.ReadFile("img.png")
    if err != nil {
        log.Fatal(err)
    }
    w.Write([]byte(string(content)))
}

func mp3Handler(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "audio/mpeg")
    content, err := os.ReadFile("audio.mp3")
    if err != nil {
        log.Fatal(err)
    }
    w.Write([]byte(string(content)))
}

func mp4Handler(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "video/mp4")
    content, err := os.ReadFile("video.mp4")
    if err != nil {
        log.Fatal(err)
    }
    w.Write([]byte(string(content)))
}

func main() {
    http.HandleFunc("/", indexHandler)
    http.HandleFunc("/app.js", jsHandler)
    http.HandleFunc("/cazan.js", cazanJsHandler)
    http.HandleFunc("/cazan.min.js", cazanMinJsHandler)
    http.HandleFunc("/img.png", pngHandler)
    http.HandleFunc("/audio.mp3", mp3Handler)
    http.HandleFunc("/video.mp4", mp4Handler)
    fmt.Println("Server started at http://localhost:8080/")
    http.ListenAndServe(":8080", nil)
}