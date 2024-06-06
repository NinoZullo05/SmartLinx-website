@echo off
echo Eseguo la build dell'immagine Docker...
docker build -t smartlinx-website .

echo Build dell'immagine completata. Salvo l'immagine Docker in un file .tar...
docker save -o smartlinx-website.tar smartlinx-website:latest

echo Salvataggio completato.