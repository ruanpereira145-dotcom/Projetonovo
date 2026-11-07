#!/usr/bin/env sh
# Baixa os bonecos para public/bonecos (rode uma vez e envie a pasta ao GitHub).
set -e
mkdir -p public/bonecos
for f in anime-float-blonde-cutout.png anime-float-purple-cutout.png anime-float-hero-cutout.png \
         printing-desk-organizer-cutout.png mikey-figure-cutout.png zoro-figure-cutout.png sukuna-yuji-figure-cutout.png; do
  curl -fsSL "https://www.bugou3d.com.br/assets/$f" -o "public/bonecos/$f"
  echo "ok  public/bonecos/$f"
done
