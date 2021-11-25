package main

import "net/http"

func main() {
	fsPublic := http.FileServer(http.Dir("public"))
	fsElements := http.FileServer(http.Dir("assets"))
	http.Handle("/", fsPublic)
	http.Handle("/assets/", http.StripPrefix("/assets/", fsElements))
	http.ListenAndServe(":8888", nil)
}
