# Windows (PowerShell): baixa os bonecos para public\bonecos
New-Item -ItemType Directory -Force -Path public\bonecos | Out-Null
$arquivos = 'anime-float-blonde-cutout.png','anime-float-purple-cutout.png','anime-float-hero-cutout.png','printing-desk-organizer-cutout.png','mikey-figure-cutout.png','zoro-figure-cutout.png','sukuna-yuji-figure-cutout.png'
foreach ($f in $arquivos) { Invoke-WebRequest "https://www.bugou3d.com.br/assets/$f" -OutFile "public\bonecos\$f"; Write-Host "ok  public\bonecos\$f" }
