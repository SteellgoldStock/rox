clear
running=1

finish()
{
    running=0
}

trap finish SIGINT

while (( running )); do
    node rox.js
    echo "Restarting server on crash.."
    sleep 5
done
# sudo git clone ROx:UnknowG/Rox.git
