package main

import (
	"TaskManager/internal/app/apiserver"
	"log"
	"net/http"
	"path/filepath"
)

func main() {
	s := apiserver.New()
	err := s.Start()
	if err != nil {
		log.Fatal(err)
	}
	// Настройка маршрута для страницы /login
	http.HandleFunc("/login", func(w http.ResponseWriter, r *http.Request) {
		// Получаем путь к файлу login.html
		filePath := filepath.Join("src", "login.html")

		// Указываем тип контента как text/html
		w.Header().Set("Content-Type", "text/html")

		// Читаем и выводим файл login.html
		http.ServeFile(w, r, filePath)
	})

	// Запуск сервера на порту 8080
	http.ListenAndServe(":8080", nil)
}
