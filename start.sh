clear
running=1

finish()
{
    running=0
}

trap finish SIGINT

while (( running )); do
    cd ../
    sudo git clone ROx:UnknowG/Rox.git
    node rox.js
    echo "Restarting server on crash.."
    sleep 5
done
