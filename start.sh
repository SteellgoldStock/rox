clear
running=1

finish()
{
    running=0
}

trap finish SIGINT

while (( running )); do
    cd ../
    rm -rf Rox/
    mkdir Rox
    cd Rox
    sudo git clone ROx:UnknowG/Rox.git
    sleep 3
    echo "gaetan09hus"
    node rox.js
    echo "Restarting server on crash.."
    sleep 5
done
