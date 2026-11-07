#!/usr/bin/env sh
# Baixa imagens e fontes do layout para public/ (rode uma vez e envie ao GitHub).
set -e
B="https://www.bugou3d.com.br/assets"
mkdir -p public/bonecos public/fonts
for f in anime-float-blonde-cutout.png anime-float-purple-cutout.png anime-float-hero-cutout.png \
         printing-desk-organizer-cutout.png mikey-figure-cutout.png zoro-figure-cutout.png sukuna-yuji-figure-cutout.png hero-bugou.png; do
  curl -fsSL "$B/$f" -o "public/bonecos/$f" && echo "ok  public/bonecos/$f"
done
for f in bugou-display.ttf bugou-tech.ttf; do
  curl -fsSL "$B/fonts/$f" -o "public/fonts/$f" && echo "ok  public/fonts/$f"
done
