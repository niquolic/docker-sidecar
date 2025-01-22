#!/bin/bash
while true; do
    cd /sidecar/..
    ls
    git pull --rebase
    sleep 10
done
