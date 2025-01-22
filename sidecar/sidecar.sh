cd /project
while true; do
    echo "Pulling changes from git"
    git pull --rebase
    sleep 10
done
