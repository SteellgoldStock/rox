clear

while (( running )); do
  cd ../
  rm -rf Rox/
  mkdir Rox
  cd Rox
  print sudo git clone ROx:UnknowG/Rox.git
done
