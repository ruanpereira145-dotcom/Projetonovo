# Windows (PowerShell): baixa imagens e fontes do layout para public\
$B = 'https://www.bugou3d.com.br/assets'
New-Item -ItemType Directory -Force -Path public\bonecos, public\fonts | Out-Null
$imgs = 'anime-float-blonde-cutout.png','anime-float-purple-cutout.png','anime-float-hero-cutout.png','printing-desk-organizer-cutout.png','mikey-figure-cutout.png','zoro-figure-cutout.png','sukuna-yuji-figure-cutout.png','hero-bugou.png'
foreach ($f in $imgs) { Invoke-WebRequest "$B/$f" -OutFile "public\bonecos\$f"; Write-Host "ok  public\bonecos\$f" }
foreach ($f in 'bugou-display.ttf','bugou-tech.ttf') { Invoke-WebRequest "$B/fonts/$f" -OutFile "public\fonts\$f"; Write-Host "ok  public\fonts\$f" }
