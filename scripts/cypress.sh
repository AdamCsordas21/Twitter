#!/bin/bash

BROWSER=none npx serve -s build -l 3000 &
servePid=$!

yarn cypress run
kill -9 $servePid
