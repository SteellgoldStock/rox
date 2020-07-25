clear
running=1

finish()
{
    running=0
}

trap finish SIGINT

while (( running )); do
    clear;
    node rox.js
    echo "The bot tries to reboot, if it doesn't succeed, it will stay off until an administrator restarts it..."
    sleep 2
done
