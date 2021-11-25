package main

import "net/http"

func main() {
	fsPublic := http.FileServer(http.Dir("public"))
	fsElements := http.FileServer(http.Dir("elements"))
	http.Handle("/", fsPublic)
	http.Handle("/elements/", http.StripPrefix("/elements/", fsElements))
	http.ListenAndServe(":8888", nil)
}
